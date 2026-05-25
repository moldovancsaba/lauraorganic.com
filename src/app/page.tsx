"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AccentPanel,
  EditorialHero,
  FeatureBand,
  GdsIcons,
  PageHeader,
  PublicBrandFooter,
  PublicNav,
  PublicProductCard,
  PublicShell,
} from "@gds/core/client";
import {
  activeWeeklyAvailability,
  calculateReservationSubtotal,
  formatHufPrice,
  getReservationProduct,
  pickupSlots,
  type PickupSlot,
  type ProductId,
  type ReservationItemInput,
} from "@/lib/reservation";
import { lauraSiteContent, type LauraIconKey } from "@/lib/site-content";

const iconMap: Record<LauraIconKey, (typeof GdsIcons)[LauraIconKey]> = {
  Home: GdsIcons.Home,
  Calendar: GdsIcons.Calendar,
  Reward: GdsIcons.Reward,
  List: GdsIcons.List,
  Check: GdsIcons.Check,
};

function BrandLockup() {
  return (
    <a href="#" className="brand-lockup" aria-label="Laura Organic">
      <div className="brand-logo-wrap">
        <Image
          src="/logo.png"
          alt="Laura Organic logo"
          fill
          sizes="192px"
          className="brand-logo"
          priority
        />
      </div>
    </a>
  );
}

export default function Home() {
  const { about, featureBand, footer, hero, navigation, process, shell, weeklyOffer } =
    lauraSiteContent;
  const [reservationItems, setReservationItems] = useState<ReservationItemInput[]>([]);
  const [selectedPickupSlotId, setSelectedPickupSlotId] = useState<string>(
    pickupSlots.find((slot) => slot.isActive)?.id ?? "",
  );

  const selectedPickupSlot = pickupSlots.find((slot) => slot.id === selectedPickupSlotId);
  const reservationSubtotal = calculateReservationSubtotal(reservationItems);
  const reservationCount = reservationItems.reduce((total, item) => total + item.quantity, 0);
  const reservationRows = reservationItems
    .map((item) => {
      const product = getReservationProduct(item.productId);

      if (!product) {
        return null;
      }

      return {
        ...item,
        product,
        lineTotal: product.unitPrice * item.quantity,
      };
    })
    .filter((row): row is NonNullable<typeof row> => row !== null);

  function addToReservation(productId: ProductId) {
    const availability = activeWeeklyAvailability.items.find((item) => item.productId === productId);
    const maxPerOrder = availability?.maxPerOrder ?? 10;

    setReservationItems((current) => {
      const existingItem = current.find((item) => item.productId === productId);

      if (!existingItem) {
        return [...current, { productId, quantity: 1 }];
      }

      return current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(item.quantity + 1, maxPerOrder) }
          : item,
      );
    });
  }

  function decrementReservationItem(productId: ProductId) {
    setReservationItems((current) =>
      current.flatMap((item) => {
        if (item.productId !== productId) {
          return [item];
        }

        if (item.quantity <= 1) {
          return [];
        }

        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }

  function removeReservationItem(productId: ProductId) {
    setReservationItems((current) => current.filter((item) => item.productId !== productId));
  }

  return (
    <PublicShell
      brand={<BrandLockup />}
      navigation={
        <PublicNav
          items={navigation}
          activeId="weekly"
          renderLink={(item, active) => (
            <a
              href={item.href}
              className={`nav-link ${active ? "nav-link-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </a>
          )}
        />
      }
      actions={
        <a href={shell.primaryAction.href} className="nav-cta">
          {shell.primaryAction.label}
        </a>
      }
      maxContentWidth={1500}
      headerBordered={false}
    >
      <main className="laura-page">
        <section className="hero-section">
          <div className="hero-editorial">
            <EditorialHero
              eyebrow={hero.eyebrow}
              title={
                <>
                  {hero.titleLines.map((line, index) => (
                    <span key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </>
              }
              description={hero.description}
              actions={[
                { label: hero.cta.label, href: hero.cta.href, variant: "primary" },
              ]}
              meta={hero.meta}
              media={
                <div className="hero-media">
                  <Image
                    src={hero.media.src}
                    alt={hero.media.alt}
                    fill
                    sizes="(min-width: 1200px) 60vw, 100vw"
                    className="hero-photo"
                    priority
                  />
                </div>
              }
              mediaAlt={hero.media.alt}
              mediaFade="background-blend"
            />
          </div>

          <div className="feature-band-wrap">
            <FeatureBand
              items={featureBand.map((item) => {
                const Icon = iconMap[item.icon];

                return {
                  id: item.id,
                  title: item.title,
                  description: item.text,
                  meta: <span className="feature-meta">{item.meta}</span>,
                  icon: <Icon size="1.4rem" />,
                };
              })}
              columns={3}
            />
          </div>
        </section>

        <section id="heti-ajanlat" className="weekly-section">
          <div className="section-header-wrap centered">
            <PageHeader
              eyebrow={weeklyOffer.eyebrow}
              title={weeklyOffer.title}
              description={weeklyOffer.description}
            />
          </div>

          <div className="weekly-grid">
            {weeklyOffer.items.map((item) => {
              const quantityInReservation =
                reservationItems.find((reservationItem) => reservationItem.productId === item.id)
                  ?.quantity ?? 0;

              return (
                <div key={item.id} className="weekly-card-wrap">
                  <PublicProductCard
                    title={item.name}
                    description={item.description}
                    image={
                      <div className="weekly-image">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                          className="weekly-photo"
                        />
                      </div>
                    }
                    price={item.price}
                    helperText={item.helperText}
                    state="preorder"
                    primaryAction={
                      <button
                        type="button"
                        className="product-action-link"
                        onClick={() => addToReservation(item.id)}
                      >
                        {item.ctaLabel}
                      </button>
                    }
                    secondaryAction={
                      quantityInReservation > 0 ? (
                        <span className="product-cart-hint">
                          {quantityInReservation} darab a rendelésben
                        </span>
                      ) : undefined
                    }
                  />
                </div>
              );
            })}
          </div>

          <div className="section-action">
            <a href={weeklyOffer.sectionAction.href} className="primary-button">
              {weeklyOffer.sectionAction.label}
            </a>
          </div>
        </section>

        <section className="reservation-shell-section">
          <div className="section-header-wrap centered compact">
            <PageHeader
              eyebrow="Szombati rendelés"
              title="Előrendelésem"
              description="Állítsd össze a rendelésedet, majd a következő lépésben véglegesítheted az átvételt."
            />
          </div>

          <div className="reservation-panel-wrap">
            <AccentPanel
              tone={reservationRows.length > 0 ? "green" : "gray"}
              variant="subtle"
              title={
                reservationRows.length > 0
                  ? `${reservationCount} tétel van a szombati rendelésedben.`
                  : "Még nincs semmi a szombati rendelésedben."
              }
            >
              {reservationRows.length > 0 ? (
                <div className="reservation-shell">
                  <div className="pickup-slot-list" role="list" aria-label="Átvételi hely választása">
                    {pickupSlots
                      .filter((slot) => slot.isActive)
                      .map((slot: PickupSlot) => (
                        <button
                          key={slot.id}
                          type="button"
                          className={`pickup-slot-button ${
                            selectedPickupSlotId === slot.id ? "pickup-slot-button-active" : ""
                          }`}
                          onClick={() => setSelectedPickupSlotId(slot.id)}
                        >
                          <span className="pickup-slot-label">{slot.label}</span>
                          <span className="pickup-slot-meta">
                            {slot.location} • {slot.dayLabel} • {slot.timeWindow}
                          </span>
                        </button>
                      ))}
                  </div>

                  <div className="reservation-items">
                    {reservationRows.map((row) => (
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
                              onClick={() => decrementReservationItem(row.product.id)}
                              aria-label={`${row.product.name} mennyiségének csökkentése`}
                            >
                              -
                            </button>
                            <span className="quantity-value">{row.quantity}</span>
                            <button
                              type="button"
                              className="quantity-button"
                              onClick={() => addToReservation(row.product.id)}
                              aria-label={`${row.product.name} mennyiségének növelése`}
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            className="reservation-remove-button"
                            onClick={() => removeReservationItem(row.product.id)}
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
                      <p className="reservation-summary-value">
                        {formatHufPrice(reservationSubtotal)}
                      </p>
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
                </div>
              ) : (
                <div className="reservation-empty-state">
                  <p>
                    Válassz egy fogást a heti kínálatból, és itt rögtön látni fogod az
                    összesítést.
                  </p>
                  <p>
                    Az átvétel szombaton történik, a rendeléseket pedig frissen készítjük
                    el az átvétel napjára.
                  </p>
                </div>
              )}
            </AccentPanel>
          </div>
        </section>

        <section id="gyik" className="process-section">
          <div className="section-header-wrap centered compact">
            <PageHeader title={process.title} />
          </div>
          <div className="process-band-wrap">
            <FeatureBand
              items={process.steps.map((item, index) => {
                const Icon = iconMap[item.icon];

                return {
                  id: item.id,
                  title: (
                    <span>
                      <span className="process-step-inline">{index + 1}</span>
                      {item.title}
                    </span>
                  ),
                  description: item.text,
                  icon: <Icon size="1.4rem" />,
                };
              })}
              columns={2}
            />
          </div>
        </section>

        <section id="rolunk" className="about-section">
          <div className="section-header-wrap centered compact">
            <PageHeader
              eyebrow={about.eyebrow}
              title={about.title}
              description={about.description}
            />
          </div>
          <div className="about-panel-wrap">
            <AccentPanel tone="amber" variant="subtle" title={about.panelTitle}>
              <div className="about-copy">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </AccentPanel>
          </div>
        </section>

        <footer id="kapcsolat" className="footer-section">
          <div className="footer-shell">
            <PublicBrandFooter
              media={
                <div className="footer-visual">
                  <Image
                    src={footer.media.src}
                    alt={footer.media.alt}
                    fill
                    sizes="(min-width: 1200px) 35vw, 100vw"
                    className="footer-photo"
                  />
                </div>
              }
              brandTitle={footer.brandTitle}
              description={footer.description}
              actions={
                <a href={footer.action.href} className="footer-link">
                  {footer.action.label}
                </a>
              }
              secondary={
                <blockquote className="footer-quote">
                  {footer.quoteLines.map((line, index) => (
                    <span key={line}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </blockquote>
              }
            />
          </div>
        </footer>
      </main>
    </PublicShell>
  );
}
