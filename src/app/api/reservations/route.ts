import { NextResponse } from "next/server";
import {
  buildReservationReceipt,
  type ReservationDraft,
  type ReservationSubmitResponse,
  validateReservationDraft,
} from "@/lib/reservation";

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

  const receipt = buildReservationReceipt(validation.data);

  return NextResponse.json<ReservationSubmitResponse>(
    {
      success: true,
      receipt,
    },
    { status: 201 },
  );
}
