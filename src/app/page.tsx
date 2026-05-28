"use client";

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
  StateBlock,
} from "@doneisbetter/gds/client";
import {
  activeWeeklyAvailability,
  getAvailabilityActionLabel,
  getAvailabilityStateLabel,
  isProductReservable,
  type ProductId,
} from "@/lib/reservation";
import { ReservationSummaryPanel } from "@/components/reservation/reservation-summary-panel";
import { useReservation } from "@/components/reservation/reservation-provider";
import {
  getActiveWeeklyOffer,
  lauraSiteContent,
  type LauraIconKey,
} from "@/lib/site-content";

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
  const { about, featureBand, footer, hero, navigation, process, shell, weeklyOfferFallback } =
    lauraSiteContent;
  const { addItem, items } = useReservation();
  const activeWeeklyOffer = getActiveWeeklyOffer();
  const hasActiveWeeklyOffer = Boolean(activeWeeklyOffer && activeWeeklyOffer.items.length > 0);
  const weeklyItems = activeWeeklyOffer?.items ?? [];

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
      headerVariant="branded-quiet"
      classNames={{
        header: "site-header",
        navigation: "site-navigation",
        content: "site-content",
      }}
    >
      <main className="laura-page">
        <section className="hero-section">
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
            surfaceVariant="flat-public"
            classNames={{
              root: "hero-surface",
              content: "hero-content",
              actions: "hero-actions",
            }}
          />

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
              eyebrow={activeWeeklyOffer?.eyebrow ?? "Heti kínálat"}
              title={activeWeeklyOffer?.title ?? weeklyOfferFallback.title}
              description={activeWeeklyOffer?.description ?? weeklyOfferFallback.description}
            />
          </div>

          {hasActiveWeeklyOffer ? (
            <>
              <div className="weekly-grid">
                {weeklyItems.map((item) => {
                  const quantityInReservation =
                    items.find((reservationItem) => reservationItem.productId === item.id)
                      ?.quantity ?? 0;
                  const isReservable = isProductReservable(item.id as ProductId);

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
                        helperText={getAvailabilityStateLabel(item.id as ProductId)}
                        state={isReservable ? "preorder" : "sold-out"}
                        primaryAction={
                          <button
                            type="button"
                            className={`product-action-link ${
                              isReservable ? "" : "product-action-link-disabled"
                            }`}
                            onClick={() => {
                              if (isReservable) {
                                addItem(item.id as ProductId);
                              }
                            }}
                            disabled={!isReservable}
                          >
                            {getAvailabilityActionLabel(item.id as ProductId, item.ctaLabel)}
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
                <a href={activeWeeklyOffer?.sectionAction.href ?? "#kapcsolat"} className="primary-button">
                  {activeWeeklyOffer?.sectionAction.label ?? "Kapcsolat"}
                </a>
              </div>
            </>
          ) : (
            <div className="weekly-fallback-wrap">
              <StateBlock
                variant="not-enough-data"
                title={weeklyOfferFallback.title}
                description={
                  <span>
                    {weeklyOfferFallback.description}
                    <br />
                    {weeklyOfferFallback.helperText}
                  </span>
                }
                compact
              />
            </div>
          )}
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
            <ReservationSummaryPanel preorderClosed={!activeWeeklyAvailability} />
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
                  title: item.title,
                  description: item.text,
                  icon: <Icon size="1.4rem" />,
                  stepLabel: String(index + 1),
                };
              })}
              columns={2}
              variant="process"
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
            layoutVariant="balanced-quote"
            classNames={{
              root: "footer-card",
            }}
          />
        </footer>
      </main>
    </PublicShell>
  );
}
