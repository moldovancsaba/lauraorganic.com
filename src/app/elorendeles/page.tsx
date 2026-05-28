"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AccentPanel,
  EmptyState,
  FormField,
  PageHeader,
  PublicShell,
} from "@doneisbetter/gds/client";
import { ReservationSummaryPanel } from "@/components/reservation/reservation-summary-panel";
import {
  activeWeeklyAvailability,
  pickupSlots,
  validateReservationDraft,
  type ReservationReceipt,
  type ReservationSubmitResponse,
  type ValidationIssue,
} from "@/lib/reservation";
import { useReservation } from "@/components/reservation/reservation-provider";
import { trackAnalyticsEvent } from "@/lib/analytics";

type CustomerFormState = {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

function BrandLockup() {
  return (
    <Link href="/" className="brand-lockup" aria-label="Laura Organic">
      <span className="brand-logo-wrap">
        <Image
          src="/logo.png"
          alt="Laura Organic logo"
          fill
          sizes="192px"
          className="brand-logo"
          priority
        />
      </span>
    </Link>
  );
}

export default function ReservationPage() {
  const { clearReservation, items, selectedPickupSlotId, setPickupSlot, subtotal } = useReservation();
  const selectedPickupSlot = pickupSlots.find((slot) => slot.id === selectedPickupSlotId);
  const [customer, setCustomer] = useState<CustomerFormState>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [issues, setIssues] = useState<ValidationIssue[]>([]);
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<ReservationReceipt | null>(null);

  const issueMap = useMemo(
    () =>
      new Map(
        issues
          .filter((issue) => issue.field.startsWith("customer."))
          .map((issue) => [issue.field.replace("customer.", ""), issue.message]),
      ),
    [issues],
  );

  function updateCustomerField<K extends keyof CustomerFormState>(
    field: K,
    value: CustomerFormState[K],
  ) {
    setCustomer((current) => ({ ...current, [field]: value }));
    setIsValidated(false);
    setSubmitError(null);
  }

  async function handleValidationSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!activeWeeklyAvailability) {
      setIssues([
        {
          field: "weekKey",
          code: "unavailable",
          message: "Erre a hétre még nincs aktív kínálat.",
        },
      ]);
      setIsValidated(false);
      return;
    }

    const result = validateReservationDraft({
      weekKey: activeWeeklyAvailability.weekKey,
      items,
      customer: {
        ...customer,
        pickupSlotId: selectedPickupSlotId,
      },
    });

    if (!result.success) {
      setIssues(result.issues);
      setIsValidated(false);
      setSubmitError(null);
      trackAnalyticsEvent("reservation_validation_failed", {
        issueCount: result.issues.length,
      });
      return;
    }

    trackAnalyticsEvent("reservation_submit_started", {
      itemCount: result.data.items.reduce((total, item) => total + item.quantity, 0),
      subtotal,
      pickupSlotId: result.data.customer.pickupSlotId,
    });

    setIsSubmitting(true);
    setIssues([]);
    setSubmitError(null);

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.data),
      });

      const payload = (await response.json()) as ReservationSubmitResponse;

      if (!response.ok || !payload.success) {
        const nextIssues = payload.success ? [] : payload.issues ?? [];
        setIssues(nextIssues);
        setSubmitError(payload.success ? "A rendelés mentése nem sikerült." : payload.message);
        setIsValidated(false);
        trackAnalyticsEvent("reservation_submit_failed", {
          status: response.status,
          retryable: payload.success ? false : payload.retryable,
        });
        return;
      }

      setCustomer({
        fullName: result.data.customer.fullName,
        email: result.data.customer.email,
        phone: result.data.customer.phone ?? "",
        notes: result.data.customer.notes ?? "",
      });
      setIsValidated(true);
      setReceipt(payload.receipt);
      clearReservation();
      trackAnalyticsEvent("reservation_submit_succeeded", {
        reservationId: payload.receipt.reservationId,
        itemCount: payload.receipt.itemCount,
        subtotal: payload.receipt.subtotal,
      });
    } catch {
      setSubmitError("A rendelés mentése közben hálózati hiba történt. Próbáld meg újra.");
      setIsValidated(false);
      trackAnalyticsEvent("reservation_submit_failed", {
        status: "network_error",
        retryable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <PublicShell
      brand={<BrandLockup />}
      actions={
        <Link href="/" className="nav-cta">
          Vissza az étlaphoz
        </Link>
      }
      maxContentWidth={1100}
      headerBordered={false}
      headerVariant="branded-quiet"
      classNames={{
        header: "site-header",
        content: "site-content",
      }}
      compact
    >
      <main className="laura-page review-page">
        <section className="review-hero-section">
          <div className="section-header-wrap centered">
            <PageHeader
              eyebrow="Szombati rendelés"
              title="Átvétel véglegesítése"
              description="Ellenőrizd a kiválasztott fogásokat, az átvételi helyet és a heti rendelésed összesítését."
            />
          </div>

          <div className="review-grid">
            <div className="review-main-column">
              <ReservationSummaryPanel showReviewAction={false} />
            </div>

            <div className="review-side-column">
              <AccentPanel
                tone="amber"
                variant="subtle"
                title="Mit ellenőrizz most?"
              >
                <div className="review-note-list">
                  <p>1. Minden kiválasztott fogás szerepel-e a rendelésben.</p>
                  <p>2. A megfelelő átvételi hely van-e kijelölve.</p>
                  <p>3. A rendelést péntek éjfélig kell véglegesíteni.</p>
                </div>
              </AccentPanel>

              <AccentPanel tone="gray" variant="subtle" title="Heti tudnivalók">
                <div className="review-note-list">
                  <p>
                    Előrendelési határidő:{" "}
                    <strong>{activeWeeklyAvailability?.preorderDeadlineLabel ?? "Péntek 24:00"}</strong>
                  </p>
                  <p>
                    Átvételi idősáv:{" "}
                    <strong>{activeWeeklyAvailability?.pickupWindowLabel ?? "Szombat 7:00 – 13:00"}</strong>
                  </p>
                  <p>
                    Kiválasztott hely:{" "}
                    <strong>
                      {selectedPickupSlot
                        ? `${selectedPickupSlot.location} • ${selectedPickupSlot.label}`
                        : "Még nincs kiválasztva"}
                    </strong>
                  </p>
                </div>
              </AccentPanel>

              <AccentPanel tone="amber" variant="subtle" title="Kapcsolat és átvétel">
                <form className="review-form" onSubmit={handleValidationSubmit} noValidate>
                  <FormField label="Név" error={issueMap.get("fullName")}>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="review-form-input"
                      value={customer.fullName}
                      onChange={(event) => updateCustomerField("fullName", event.target.value)}
                      autoComplete="name"
                    />
                  </FormField>

                  <FormField label="E-mail" error={issueMap.get("email")}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="review-form-input"
                      value={customer.email}
                      onChange={(event) => updateCustomerField("email", event.target.value)}
                      autoComplete="email"
                    />
                  </FormField>

                  <FormField label="Telefonszám" error={issueMap.get("phone")}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="review-form-input"
                      value={customer.phone ?? ""}
                      onChange={(event) => updateCustomerField("phone", event.target.value)}
                      autoComplete="tel"
                    />
                  </FormField>

                  <FormField label="Átvételi hely" error={issueMap.get("pickupSlotId")}>
                    <select
                      id="pickupSlot"
                      name="pickupSlot"
                      className="review-form-input"
                      value={selectedPickupSlotId}
                      onChange={(event) => {
                        setPickupSlot(event.target.value);
                        setIsValidated(false);
                      }}
                    >
                      {pickupSlots
                        .filter((slot) => slot.isActive)
                        .map((slot) => (
                          <option key={slot.id} value={slot.id}>
                            {slot.label} • {slot.location}
                          </option>
                        ))}
                    </select>
                  </FormField>

                  <FormField label="Megjegyzés" error={issueMap.get("notes")}>
                    <textarea
                      id="notes"
                      name="notes"
                      className="review-form-input review-form-textarea"
                      value={customer.notes ?? ""}
                      onChange={(event) => updateCustomerField("notes", event.target.value)}
                    />
                  </FormField>

                  {issues.find((issue) => issue.field === "items") ? (
                    <p className="review-form-error">
                      {issues.find((issue) => issue.field === "items")?.message}
                    </p>
                  ) : null}

                  <div className="review-form-actions">
                    <button type="submit" className="primary-button" disabled={isSubmitting}>
                      {isSubmitting ? "Rendelés mentése..." : "Rendelés megerősítése"}
                    </button>
                  </div>
                </form>
              </AccentPanel>

              {receipt ? (
                <AccentPanel tone="green" variant="subtle" title="Köszönjük a rendelést. Szombaton várunk az átvételnél.">
                  <div className="review-note-list">
                    <p>
                      Azonosító: <strong>{receipt.reservationId}</strong>
                    </p>
                    <p>
                      Név: <strong>{receipt.customerName}</strong>
                    </p>
                    <p>
                      Átvétel:{" "}
                      <strong>
                        {receipt.pickupLocation} • {receipt.pickupLabel}
                      </strong>
                    </p>
                    <p>
                      Összesen: <strong>{receipt.itemCount} tétel</strong>
                    </p>
                    <p>A rendelésedet frissen készítjük el az átvétel napjára.</p>
                  </div>
                </AccentPanel>
              ) : items.length === 0 ? (
                <EmptyState
                  title="Még nincs mit véglegesíteni"
                  description="Először válassz fogásokat a heti kínálatból. A rendelésed a landing oldalon azonnal frissül, és ide visszatérve már ellenőrizheted az összesítést."
                  action={
                    <Link href="/#heti-ajanlat" className="primary-button">
                      Heti kínálat megnyitása
                    </Link>
                  }
                />
              ) : (
                <AccentPanel
                  tone={isValidated ? "green" : "amber"}
                  variant="subtle"
                  title={
                    submitError
                      ? "A rendelés most nem menthető"
                      : isValidated
                        ? "A rendelés adatai rendben vannak"
                        : "Következő lépés"
                  }
                >
                  <div className="review-note-list">
                    {submitError ? (
                      <>
                        <p>{submitError}</p>
                        <p>Az adatok megmaradtak, ezért ugyaninnen újra megpróbálhatod.</p>
                      </>
                    ) : isValidated ? (
                      <>
                        <p>A rendelésed sikeresen átment a helyi és a szerveroldali ellenőrzésen.</p>
                        <p>A visszaigazolást fent látod a rendelési azonosítóval együtt.</p>
                      </>
                    ) : (
                      <>
                        <p>
                          Töltsd ki az elérhetőségeidet, majd erősítsd meg a rendelést.
                        </p>
                        <p>
                          Ha minden rendben van, a rendszer rögtön elmenti a rendelést.
                        </p>
                      </>
                    )}
                  </div>
                </AccentPanel>
              )}
            </div>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
