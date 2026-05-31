import { NextResponse } from "next/server";
import {
  type ReservationDraft,
  type ReservationSubmitResponse,
  validateReservationDraft,
} from "@/lib/reservation";
import { persistReservationDraft } from "@/lib/reservation-store";

export const runtime = "nodejs";
const IDEMPOTENCY_HEADER = "x-idempotency-key";

export async function POST(request: Request) {
  let body: ReservationDraft;

  try {
    body = (await request.json()) as ReservationDraft;
  } catch {
    return NextResponse.json<ReservationSubmitResponse>(
      {
        success: false,
        message: "A kérés törzse nem olvasható.",
        retryable: false,
      },
      { status: 400 },
    );
  }

  const validation = validateReservationDraft(body);

  if (!validation.success) {
    return NextResponse.json<ReservationSubmitResponse>(
      {
        success: false,
        message: "A rendelés adatai nem érvényesek.",
        retryable: false,
        issues: validation.issues,
      },
      { status: 400 },
    );
  }

  const idempotencyKey = request.headers.get(IDEMPOTENCY_HEADER);
  let saved;

  try {
    saved = await persistReservationDraft(validation.data, idempotencyKey);
  } catch (error) {
    if ((error as Error).message === "INVALID_IDEMPOTENCY_KEY") {
      return NextResponse.json<ReservationSubmitResponse>(
        {
          success: false,
          message: "Hiányzik vagy érvénytelen az idempotency kulcs.",
          retryable: false,
          issues: [
            {
              field: "request.idempotencyKey",
              code: "invalid",
              message: "Küldj érvényes idempotency kulcsot a kéréshez.",
            },
          ],
        },
        { status: 400 },
      );
    }

    return NextResponse.json<ReservationSubmitResponse>(
      {
        success: false,
        message: "A rendelés mentése most nem sikerült. Próbáld meg újra.",
        retryable: true,
      },
      { status: 503 },
    );
  }

  return NextResponse.json<ReservationSubmitResponse>(
    {
      success: true,
      receipt: saved.receipt,
    },
    { status: saved.kind === "created" ? 201 : 200 },
  );
}
