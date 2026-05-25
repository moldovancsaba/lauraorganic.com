import { lauraSiteContent, type LauraSiteContent } from "@/lib/site-content";

export type ProductId = LauraSiteContent["weeklyOffer"]["items"][number]["id"];

export type ReservationProductState = "available" | "limited" | "sold-out" | "preorder";
export type PickupMode = "market" | "foodtruck";
export type ReservationWeekStatus = "draft" | "active" | "closed";
export type ReservationErrorCode =
  | "required"
  | "invalid"
  | "out_of_range"
  | "unavailable"
  | "not_found";

export type ReservationProduct = {
  id: ProductId;
  name: string;
  description: string;
  unitPrice: number;
  currency: "HUF";
  imageSrc: string;
  imageAlt: string;
  helperText: string;
  state: ReservationProductState;
  ctaLabel: string;
};

export type WeeklyAvailabilityItem = {
  productId: ProductId;
  state: ReservationProductState;
  remainingQuantity: number | null;
  maxPerOrder: number;
};

export type WeeklyAvailability = {
  weekKey: string;
  title: string;
  preorderDeadlineLabel: string;
  pickupWindowLabel: string;
  status: ReservationWeekStatus;
  items: WeeklyAvailabilityItem[];
};

export type PickupSlot = {
  id: string;
  label: string;
  mode: PickupMode;
  location: string;
  dayLabel: string;
  timeWindow: string;
  isActive: boolean;
};

export type ReservationItemInput = {
  productId: ProductId;
  quantity: number;
};

export type CustomerContactPayload = {
  fullName: string;
  email: string;
  phone?: string;
  pickupSlotId: string;
  notes?: string;
};

export type ReservationDraft = {
  weekKey: string;
  items: ReservationItemInput[];
  customer: CustomerContactPayload;
};

export type ValidationIssue = {
  field: string;
  code: ReservationErrorCode;
  message: string;
};

export type ValidationResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      issues: ValidationIssue[];
    };

export const reservationProducts: ReservationProduct[] = lauraSiteContent.weeklyOffer.items.map(
  (item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    unitPrice: parseHufPrice(item.price),
    currency: "HUF",
    imageSrc: item.image.src,
    imageAlt: item.image.alt,
    helperText: item.helperText,
    state: "preorder",
    ctaLabel: item.ctaLabel,
  }),
);

export const pickupSlots: PickupSlot[] = [
  {
    id: "biomarket-piac",
    label: "Piaci átvétel",
    mode: "market",
    location: "Biomarket Budapest",
    dayLabel: "Szombat",
    timeWindow: "7:00 – 13:00",
    isActive: true,
  },
  {
    id: "foodtruck-szombat",
    label: "Foodtruck pickup",
    mode: "foodtruck",
    location: "Laura Organic foodtruck",
    dayLabel: "Szombat",
    timeWindow: "7:00 – 13:00",
    isActive: true,
  },
];

export const activeWeeklyAvailability: WeeklyAvailability = {
  weekKey: "laura-organic-current-week",
  title: lauraSiteContent.weeklyOffer.title,
  preorderDeadlineLabel: "Péntek 24:00",
  pickupWindowLabel: "Szombat 7:00 – 13:00",
  status: "active",
  items: reservationProducts.map((product) => ({
    productId: product.id,
    state: product.state,
    remainingQuantity: null,
    maxPerOrder: 10,
  })),
};

export function parseHufPrice(value: string): number {
  const normalized = value.replace(/\s/g, "").replace("Ft", "").trim();
  const parsed = Number.parseInt(normalized, 10);

  if (!Number.isFinite(parsed)) {
    throw new Error(`Invalid HUF price: ${value}`);
  }

  return parsed;
}

export function formatHufPrice(value: number): string {
  return new Intl.NumberFormat("hu-HU").format(value).replace(/\u00a0/g, " ") + " Ft";
}

export function getReservationProduct(productId: ProductId): ReservationProduct | undefined {
  return reservationProducts.find((product) => product.id === productId);
}

export function getAvailabilityItem(productId: ProductId): WeeklyAvailabilityItem | undefined {
  return activeWeeklyAvailability.items.find((item) => item.productId === productId);
}

export function getPickupSlot(slotId: string): PickupSlot | undefined {
  return pickupSlots.find((slot) => slot.id === slotId);
}

export function calculateReservationSubtotal(items: ReservationItemInput[]): number {
  return items.reduce((total, item) => {
    const product = getReservationProduct(item.productId);
    return total + (product ? product.unitPrice * item.quantity : 0);
  }, 0);
}

export function validateReservationItem(item: ReservationItemInput): ValidationResult<ReservationItemInput> {
  const issues: ValidationIssue[] = [];
  const product = getReservationProduct(item.productId);
  const availability = getAvailabilityItem(item.productId);

  if (!product) {
    issues.push({
      field: "productId",
      code: "not_found",
      message: "A választott termék nem található.",
    });
  }

  if (!Number.isInteger(item.quantity)) {
    issues.push({
      field: "quantity",
      code: "invalid",
      message: "A mennyiség csak egész szám lehet.",
    });
  } else if (item.quantity < 1) {
    issues.push({
      field: "quantity",
      code: "out_of_range",
      message: "Legalább 1 darabot kell megadni.",
    });
  } else if (availability && item.quantity > availability.maxPerOrder) {
    issues.push({
      field: "quantity",
      code: "out_of_range",
      message: `Egyszerre legfeljebb ${availability.maxPerOrder} darab foglalható ebből a termékből.`,
    });
  }

  if (availability && availability.state === "sold-out") {
    issues.push({
      field: "productId",
      code: "unavailable",
      message: "Ez a termék erre a hétre már elfogyott.",
    });
  }

  if (issues.length > 0) {
    return { success: false, issues };
  }

  return { success: true, data: item };
}

export function validateCustomerContact(
  customer: CustomerContactPayload,
): ValidationResult<CustomerContactPayload> {
  const issues: ValidationIssue[] = [];
  const fullName = customer.fullName.trim();
  const email = customer.email.trim();
  const phone = customer.phone?.trim() ?? "";
  const slot = getPickupSlot(customer.pickupSlotId);

  if (fullName.length < 2) {
    issues.push({
      field: "fullName",
      code: "required",
      message: "Add meg a nevedet.",
    });
  }

  if (!EMAIL_PATTERN.test(email)) {
    issues.push({
      field: "email",
      code: "invalid",
      message: "Adj meg egy érvényes e-mail-címet.",
    });
  }

  if (phone.length > 0 && !PHONE_PATTERN.test(phone)) {
    issues.push({
      field: "phone",
      code: "invalid",
      message: "Adj meg egy érvényes telefonszámot.",
    });
  }

  if (!slot || !slot.isActive) {
    issues.push({
      field: "pickupSlotId",
      code: "invalid",
      message: "Válassz egy aktív átvételi helyet.",
    });
  }

  if (customer.notes && customer.notes.length > 400) {
    issues.push({
      field: "notes",
      code: "out_of_range",
      message: "A megjegyzés legfeljebb 400 karakter lehet.",
    });
  }

  if (issues.length > 0) {
    return { success: false, issues };
  }

  return {
    success: true,
    data: {
      ...customer,
      fullName,
      email,
      phone: phone || undefined,
      notes: customer.notes?.trim() || undefined,
    },
  };
}

export function validateReservationDraft(
  draft: ReservationDraft,
): ValidationResult<ReservationDraft> {
  const issues: ValidationIssue[] = [];

  if (draft.weekKey !== activeWeeklyAvailability.weekKey) {
    issues.push({
      field: "weekKey",
      code: "invalid",
      message: "A foglalás nem az aktív heti kínálathoz tartozik.",
    });
  }

  if (draft.items.length === 0) {
    issues.push({
      field: "items",
      code: "required",
      message: "Adj legalább egy terméket a rendeléshez.",
    });
  }

  for (const item of draft.items) {
    const result = validateReservationItem(item);
    if (!result.success) {
      issues.push(...result.issues.map((issue) => ({ ...issue, field: `items.${issue.field}` })));
    }
  }

  const uniqueIds = new Set(draft.items.map((item) => item.productId));
  if (uniqueIds.size !== draft.items.length) {
    issues.push({
      field: "items",
      code: "invalid",
      message: "Minden termék csak egyszer szerepelhet a rendelésben.",
    });
  }

  const customerResult = validateCustomerContact(draft.customer);
  if (!customerResult.success) {
    issues.push(
      ...customerResult.issues.map((issue) => ({ ...issue, field: `customer.${issue.field}` })),
    );
  }

  if (issues.length > 0) {
    return { success: false, issues };
  }

  const normalizedCustomer = customerResult.success ? customerResult.data : draft.customer;

  return {
    success: true,
    data: {
      ...draft,
      customer: normalizedCustomer,
    },
  };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d\s()./-]{7,24}$/;
