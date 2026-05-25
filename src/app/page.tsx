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
} from "@gds/core/client";

const navItems = [
  { id: "menu", label: "Étlap", href: "#heti-ajanlat" },
  { id: "about", label: "Rólunk", href: "#rolunk" },
  { id: "weekly", label: "Heti ajánlat", href: "#heti-ajanlat" },
  { id: "faq", label: "GYIK", href: "#gyik" },
  { id: "contact", label: "Kapcsolat", href: "#kapcsolat" },
];

const featureItems = [
  {
    id: "market",
    title: "Találkozzunk szombat reggel!",
    text: "Minden szombaton a biopiacon vagyunk a foodtruckunkkal.",
    meta: "Biomarket Budapest\nSzombatonként 7:00 – 13:00",
    icon: GdsIcons.Home,
  },
  {
    id: "preorder",
    title: "Rendelj előre, spórolj időt!",
    text: "Add le rendelésed online péntek éjfélig, és vedd át könnyedén a piacon.",
    meta: "Hogyan működik?",
    icon: GdsIcons.Calendar,
  },
  {
    id: "fresh",
    title: "Frissen főzve, neked készítve.",
    text: "Heti étlapunk szezonálisan változik, mindig a legjobb alapanyagokból.",
    meta: "100% organikus • növényi alapú • csomagolásmentes",
    icon: GdsIcons.Reward,
  },
];

const weeklyItems = [
  {
    name: "Zöldborsó krémleves mentával",
    description: "Friss, tavaszi ízek egy tányérban.",
    price: "1 890 Ft",
    image: "/zoldborso_kremleves_mentaval.png",
  },
  {
    name: "Csicseriborsó curry jázminrizzsel",
    description: "Laktató, fűszeres, melengető.",
    price: "2 690 Ft",
    image: "/csicseriborso_curry_jazminrizzsel.png",
  },
  {
    name: "Medvehagymás kesudiós pesto tészta",
    description: "Krémes, friss, tavaszi hangulat.",
    price: "2 490 Ft",
    image: "/medvehagymas_kesudios_pesto_teszta.png",
  },
  {
    name: "Csokoládé mousse málnával",
    description: "Édes befejezés, bűntudat nélkül.",
    price: "1 490 Ft",
    image: "/csokolade_mousse_malnaval.png",
  },
];

const preorderSteps = [
  {
    id: "choose",
    title: "Válassz kedvedre",
    text: "Böngészd át a heti ajánlatot, és tedd a kosárba, amihez épp kedved van.",
    icon: GdsIcons.List,
  },
  {
    id: "deadline",
    title: "Rendelj péntek éjfélig",
    text: "Add le rendelésed online péntek 24:00-ig.",
    icon: GdsIcons.Calendar,
  },
  {
    id: "pickup",
    title: "Vedd át a piacon",
    text: "Szombaton a foodtrucknál fenntartjuk neked.",
    icon: GdsIcons.Check,
  },
  {
    id: "enjoy",
    title: "Élvezd tudatosan",
    text: "Finom, tápláló étel – neked, a testednek és a bolygónknak.",
    icon: GdsIcons.Reward,
  },
];

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
  return (
    <PublicShell
      brand={<BrandLockup />}
      navigation={
        <PublicNav
          items={navItems}
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
        <a href="#heti-ajanlat" className="nav-cta">
          Előrendelés
        </a>
      }
      maxContentWidth={1500}
      headerBordered={false}
    >
      <main className="laura-page">
        <section className="hero-section">
          <div className="hero-editorial">
            <EditorialHero
              eyebrow="Bio ételek. Igazi alapanyagokból."
              title={
                <>
                  Organikus.
                  <br />
                  Kézműves.
                  <br />
                  Készen, neked.
                </>
              }
              description="100% organikus, szezonális alapanyagokból készült, növényi alapú ételek. Főzzük helyetted, hogy több időd legyen az igazán fontos dolgokra."
              actions={[
                { label: "Nézd meg a heti étlapot", href: "#heti-ajanlat", variant: "primary" },
              ]}
              meta={[
                { id: "organic", label: "100% organikus" },
                { id: "plant", label: "Növényi alapú" },
                { id: "packaging", label: "Csomagolásmentes" },
              ]}
              media={
                <div className="hero-media">
                  <Image
                    src="/laura_organic_header_right.png"
                    alt="Laura Organic foodtruck a piacon"
                    fill
                    sizes="(min-width: 1200px) 60vw, 100vw"
                    className="hero-photo"
                    priority
                  />
                </div>
              }
              mediaAlt="Laura Organic foodtruck a piacon"
              mediaFade="background-blend"
            />
          </div>

          <div className="feature-band-wrap">
            <FeatureBand
              items={featureItems.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.text,
                meta: <span className="feature-meta">{item.meta}</span>,
                icon: <item.icon size="1.4rem" />,
              }))}
              columns={3}
            />
          </div>
        </section>

        <section id="heti-ajanlat" className="weekly-section">
          <div className="section-header-wrap centered">
            <PageHeader
              eyebrow="Heti kínálat"
              title="Heti ajánlat"
              description="Finom, tápláló, 100% organikus."
            />
          </div>

          <div className="weekly-grid">
            {weeklyItems.map((item) => (
              <div key={item.name} className="weekly-card-wrap">
                <PublicProductCard
                  title={item.name}
                  description={item.description}
                  image={
                    <div className="weekly-image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="weekly-photo"
                      />
                    </div>
                  }
                  price={item.price}
                  helperText="Szombati átvétellel"
                  state="preorder"
                  primaryAction={
                    <a href="#kapcsolat" className="product-action-link">
                      Előrendelem
                    </a>
                  }
                />
              </div>
            ))}
          </div>

          <div className="section-action">
            <a href="#kapcsolat" className="primary-button">
              Összes étel megnézése
            </a>
          </div>
        </section>

        <section id="gyik" className="process-section">
          <div className="section-header-wrap centered compact">
            <PageHeader title="Így működik az előrendelés" />
          </div>
          <div className="process-band-wrap">
            <FeatureBand
              items={preorderSteps.map((item, index) => ({
                id: item.id,
                title: (
                  <span>
                    <span className="process-step-inline">{index + 1}</span>
                    {item.title}
                  </span>
                ),
                description: item.text,
                icon: <item.icon size="1.4rem" />,
              }))}
              columns={2}
            />
          </div>
        </section>

        <section id="rolunk" className="about-section">
          <div className="section-header-wrap centered compact">
            <PageHeader
              eyebrow="Miért Laura Organic?"
              title="Nem webshop. Inkább egy lassabb, jobb szombat."
              description="Kis tételben készített organikus fogások, a piac ritmusához igazítva."
            />
          </div>
          <div className="about-panel-wrap">
            <AccentPanel tone="amber" variant="subtle" title="A jó ételhez nem kell túlmagyarázott koncepció.">
              <div className="about-copy">
                <p>
                  Elég hozzá jó alapanyag, szezonális gondolkodás és idő arra, hogy
                  rendesen elkészüljön.
                </p>
                <p>
                  A Laura Organic ebből indul ki minden héten: frissebb étel, nyugodtabb
                  átvétel, kevesebb pazarlás.
                </p>
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
                    src="/laura_organic_footer_left.png"
                    alt="Laura Organic heti fogások"
                    fill
                    sizes="(min-width: 1200px) 35vw, 100vw"
                    className="footer-photo"
                  />
                </div>
              }
              brandTitle="Laura Organic"
              description="Hiszünk az egyszerűségben, a minőségben és a természet ritmusában. Ételeinkkel szeretnénk hozzájárulni egy egészségesebb, tudatosabb mindennaphoz."
              actions={
                <a href="https://instagram.com" className="footer-link">
                  Kövess minket Instagramon
                </a>
              }
              secondary={
                <blockquote className="footer-quote">
                  “A jó étel kapcsolat.
                  <br />
                  Önmagaddal és
                  <br />a természettel.”
                </blockquote>
              }
            />
          </div>
        </footer>
      </main>
    </PublicShell>
  );
}
