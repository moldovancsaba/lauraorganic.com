import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import {
  calculateReservationSubtotal,
  getPickupSlot,
  type ReservationDraft,
  type ReservationItemInput,
  type ReservationReceipt,
} from "@/lib/reservation";

type StoredReservation = {
  reservationId: string;
  referenceCode: string;
  status: "submitted";
  idempotencyKey: string;
  submittedAt: string;
  weekKey: string;
  customerName: string;
  customerEmail: string;
  pickupLabel: string;
  pickupLocation: string;
  itemCount: number;
  subtotal: number;
  items: ReservationItemInput[];
};

type ReservationStoreData = {
  byIdempotencyKey: Record<string, string>;
  reservations: StoredReservation[];
};

type ReservationSubmitResult =
  | {
      kind: "created";
      receipt: ReservationReceipt;
    }
  | {
      kind: "replayed";
      receipt: ReservationReceipt;
    };

const DEFAULT_STORE_FILE_PATH = path.join(".data", "reservations.store.json");
const STORE_FILE_PATH = process.env.RESERVATION_STORE_PATH ?? DEFAULT_STORE_FILE_PATH;
const TMP_FILE_PATH = `${STORE_FILE_PATH}.tmp`;
const MAX_IDEMPOTENCY_KEY_LENGTH = 128;
const MIN_IDEMPOTENCY_KEY_LENGTH = 12;

let inProcessWriteLock: Promise<void> = Promise.resolve();

function normalizeIdempotencyKey(raw: string | null): string | null {
  if (!raw) {
    return null;
  }

  const normalized = raw.trim();

  if (
    normalized.length < MIN_IDEMPOTENCY_KEY_LENGTH ||
    normalized.length > MAX_IDEMPOTENCY_KEY_LENGTH
  ) {
    return null;
  }

  if (!/^[a-zA-Z0-9._:-]+$/.test(normalized)) {
    return null;
  }

  return normalized;
}

function toReceipt(record: StoredReservation): ReservationReceipt {
  return {
    reservationId: record.reservationId,
    submittedAt: record.submittedAt,
    weekKey: record.weekKey,
    customerName: record.customerName,
    customerEmail: record.customerEmail,
    pickupLabel: record.pickupLabel,
    pickupLocation: record.pickupLocation,
    itemCount: record.itemCount,
    subtotal: record.subtotal,
  };
}

function nextReferenceCode(submittedAt: string): string {
  const datePart = submittedAt.slice(2, 10).replaceAll("-", "");
  return `LO-${datePart}-${randomUUID().slice(0, 6).toUpperCase()}`;
}

function buildStoredReservation(
  draft: ReservationDraft,
  idempotencyKey: string,
): StoredReservation {
  const pickupSlot = getPickupSlot(draft.customer.pickupSlotId);
  const itemCount = draft.items.reduce((total, item) => total + item.quantity, 0);
  const submittedAt = new Date().toISOString();

  return {
    reservationId: randomUUID(),
    referenceCode: nextReferenceCode(submittedAt),
    status: "submitted",
    idempotencyKey,
    submittedAt,
    weekKey: draft.weekKey,
    customerName: draft.customer.fullName,
    customerEmail: draft.customer.email,
    pickupLabel: pickupSlot?.label ?? "Átvétel",
    pickupLocation: pickupSlot?.location ?? "Laura Organic",
    itemCount,
    subtotal: calculateReservationSubtotal(draft.items),
    items: draft.items,
  };
}

async function ensureStoreDirectory() {
  await mkdir(path.dirname(STORE_FILE_PATH), { recursive: true });
}

async function readStore(): Promise<ReservationStoreData> {
  try {
    const source = await readFile(STORE_FILE_PATH, "utf-8");
    const parsed = JSON.parse(source) as ReservationStoreData;

    if (!parsed || typeof parsed !== "object") {
      throw new Error("Invalid reservation store shape.");
    }

    return {
      byIdempotencyKey: parsed.byIdempotencyKey ?? {},
      reservations: Array.isArray(parsed.reservations) ? parsed.reservations : [],
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return {
        byIdempotencyKey: {},
        reservations: [],
      };
    }

    throw error;
  }
}

async function writeStore(data: ReservationStoreData) {
  await ensureStoreDirectory();
  await writeFile(TMP_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
  await rename(TMP_FILE_PATH, STORE_FILE_PATH);
}

async function withWriteLock<T>(work: () => Promise<T>): Promise<T> {
  const previous = inProcessWriteLock;
  let release: () => void = () => {};
  inProcessWriteLock = new Promise<void>((resolve) => {
    release = resolve;
  });

  await previous;
  try {
    return await work();
  } finally {
    release();
  }
}

export async function persistReservationDraft(
  draft: ReservationDraft,
  rawIdempotencyKey: string | null,
): Promise<ReservationSubmitResult> {
  const idempotencyKey = normalizeIdempotencyKey(rawIdempotencyKey);
  if (!idempotencyKey) {
    throw new Error("INVALID_IDEMPOTENCY_KEY");
  }

  return withWriteLock(async () => {
    const store = await readStore();
    const existingReservationId = store.byIdempotencyKey[idempotencyKey];

    if (existingReservationId) {
      const existing = store.reservations.find(
        (reservation) => reservation.reservationId === existingReservationId,
      );
      if (existing) {
        return {
          kind: "replayed",
          receipt: toReceipt(existing),
        };
      }
    }

    const next = buildStoredReservation(draft, idempotencyKey);
    store.reservations.push(next);
    store.byIdempotencyKey[idempotencyKey] = next.reservationId;
    await writeStore(store);

    return {
      kind: "created",
      receipt: toReceipt(next),
    };
  });
}
