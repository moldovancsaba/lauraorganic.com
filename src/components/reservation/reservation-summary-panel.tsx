"use client";

import Link from "next/link";
import { AccentPanel } from "@gds/core/client";
import { activeWeeklyAvailability, formatHufPrice, pickupSlots } from "@/lib/reservation";
import { useReservation } from "@/components/reservation/reservation-provider";

type ReservationSummaryPanelProps = {
  reviewHref?: string;
  showReviewAction?: boolean;
};

export function ReservationSummaryPanel({
  reviewHref = "/elorendeles",
  showReviewAction = true,
}: ReservationSummaryPanelProps) {
  const {
    addItem,
    decrementItem,
    removeItem,
    reservationCount,
    rows,
    selectedPickupSlotId,
    setPickupSlot,
    subtotal,
  } = useReservation();

  const selectedPickupSlot = pickupSlots.find((slot) => slot.id === selectedPickupSlotId);

  return (
    <AccentPanel
      tone={rows.length > 0 ? "green" : "gray"}
      variant="subtle"
      title={
        rows.length > 0
          ? `${reservationCount} tétel van a szombati rendelésedben.`
          : "Még nincs semmi a szombati rendelésedben."
      }
    >
      {rows.length > 0 ? (
        <div className="reservation-shell">
          <div className="pickup-slot-list" role="list" aria-label="Átvételi hely választása">
            {pickupSlots
              .filter((slot) => slot.isActive)
              .map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  className={`pickup-slot-button ${
                    selectedPickupSlotId === slot.id ? "pickup-slot-button-active" : ""
                  }`}
                  onClick={() => setPickupSlot(slot.id)}
                >
                  <span className="pickup-slot-label">{slot.label}</span>
                  <span className="pickup-slot-meta">
                    {slot.location} • {slot.dayLabel} • {slot.timeWindow}
                  </span>
                </button>
              ))}
          </div>

          <div className="reservation-items">
            {rows.map((row) => (
              <div key={row.product.id} className="reservation-row">
                <div className="reservation-row-main">
                  <div>
                    <h3 className="reservation-row-title">{row.product.name}</h3>
                    <p className="reservation-row-meta">
                      {formatHufPrice(row.product.unitPrice)} / adag
                    </p>
                  </div>
                  <p className="reservation-row-total">{formatHufPrice(row.lineTotal)}</p>
                </div>

                <div className="reservation-row-actions">
                  <div
                    className="reservation-quantity-controls"
                    role="group"
                    aria-label={`${row.product.name} mennyiség`}
                  >
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => decrementItem(row.product.id)}
                      aria-label={`${row.product.name} mennyiségének csökkentése`}
                    >
                      -
                    </button>
                    <span className="quantity-value">{row.quantity}</span>
                    <button
                      type="button"
                      className="quantity-button"
                      onClick={() => addItem(row.product.id)}
                      aria-label={`${row.product.name} mennyiségének növelése`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="reservation-remove-button"
                    onClick={() => removeItem(row.product.id)}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="reservation-summary">
            <div>
              <p className="reservation-summary-label">Összesen</p>
              <p className="reservation-summary-value">{formatHufPrice(subtotal)}</p>
            </div>
            <div>
              <p className="reservation-summary-label">Átvétel</p>
              <p className="reservation-summary-meta">
                {selectedPickupSlot
                  ? `${selectedPickupSlot.location} • ${selectedPickupSlot.dayLabel} • ${selectedPickupSlot.timeWindow}`
                  : activeWeeklyAvailability.pickupWindowLabel}
              </p>
            </div>
          </div>

          {showReviewAction ? (
            <div className="reservation-summary-actions">
              <Link href={reviewHref} className="primary-button">
                Átvétel véglegesítése
              </Link>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="reservation-empty-state">
          <p>
            Válassz egy fogást a heti kínálatból, és itt rögtön látni fogod az
            összesítést.
          </p>
          <p>
            Az átvétel szombaton történik, a rendeléseket pedig frissen készítjük el
            az átvétel napjára.
          </p>
          {showReviewAction ? (
            <div className="reservation-summary-actions">
              <Link href="#heti-ajanlat" className="primary-button">
                Vissza a heti kínálathoz
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </AccentPanel>
  );
}
