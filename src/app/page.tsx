import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CirclePlus,
  Heart,
  Leaf,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Soup,
} from "lucide-react";

const navItems = [
  { label: "Étlap", href: "#heti-ajanlat" },
  { label: "Rólunk", href: "#rolunk" },
  { label: "Heti ajánlat", href: "#heti-ajanlat" },
  { label: "GYIK", href: "#gyik" },
  { label: "Kapcsolat", href: "#kapcsolat" },
];

const featureItems = [
  {
    title: "Találkozzunk szombat reggel!",
    text: "Minden szombaton a biopiacon vagyunk a foodtruckunkkal.",
    meta: "Biomarket Budapest\nSzombatonként 7:00 – 13:00",
    icon: MapPin,
  },
  {
    title: "Rendelj előre, spórolj időt!",
    text: "Add le rendelésed online péntek éjfélig, és vedd át könnyedén a piacon.",
    meta: "HOGYAN MŰKÖDIK?",
    icon: ShoppingBag,
  },
  {
    title: "Frissen főzve, neked készítve.",
    text: "Heti étlapunk szezonálisan változik, mindig a legjobb alapanyagokból.",
    meta: "100% organikus • növényi alapú • csomagolásmentes",
    icon: Soup,
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
    step: "1",
    title: "Válassz kedvedre",
    text: "Böngészd át a heti ajánlatot, és tedd a kosárba, amihez épp kedved van.",
    icon: Soup,
  },
  {
    step: "2",
    title: "Rendelj péntek éjfélig",
    text: "Add le rendelésed online péntek 24:00-ig.",
    icon: CalendarDays,
  },
  {
    step: "3",
    title: "Vedd át a piacon",
    text: "Szombaton a foodtrucknál fenntartjuk neked.",
    icon: PackageCheck,
  },
  {
    step: "4",
    title: "Élvezd tudatosan",
    text: "Finom, tápláló étel – neked, a testednek és a bolygónknak.",
    icon: Heart,
  },
];

export default function Home() {
  return (
    <main className="laura-page">
      <section className="hero-section">
        <div className="page-shell">
          <header className="topbar">
            <a href="#" className="brand-lockup" aria-label="Laura Organic">
              <div className="brand-logo-wrap">
                <Image
                  src="/logo.png"
                  alt="Laura Organic logo"
                  fill
                  sizes="128px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>

            <nav className="desktop-nav" aria-label="Fő navigáció">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="#heti-ajanlat" className="nav-cta">
              <ShoppingBag className="h-4 w-4" />
              Előrendelés
            </a>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Bio ételek. Igazi alapanyagokból.</p>
              <div className="hero-line" />
              <h1 className="hero-title">
                Organikus.
                <br />
                Kézműves.
                <br />
                Készen, neked.
              </h1>
              <p className="hero-body">
                100% organikus, szezonális alapanyagokból készült, növényi alapú ételek.
                Főzzük helyetted, hogy több időd legyen az igazán fontos dolgokra.
              </p>

              <div className="hero-actions">
                <a href="#heti-ajanlat" className="primary-button">
                  Nézd meg a heti étlapot
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="hero-tags">
                <span>100% organikus</span>
                <span>Növényi alapú</span>
                <span>Csomagolásmentes</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-canvas">
                <div className="hero-photo-frame">
                  <Image
                    src="/laura_organic_header_right.png"
                    alt="Laura Organic foodtruck a piacon"
                    fill
                    sizes="(min-width: 1200px) 60vw, 100vw"
                    className="hero-photo"
                    priority
                  />
                </div>
                <div className="hero-photo-overlay" />
              </div>
            </div>
          </div>

          <section className="feature-band">
            {featureItems.map((item) => (
              <article key={item.title} className="feature-card">
                <div className="feature-icon">
                  <item.icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="feature-title">{item.title}</h2>
                  <p className="feature-text">{item.text}</p>
                  <p className="feature-meta whitespace-pre-line">{item.meta}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>

      <section id="heti-ajanlat" className="weekly-section">
        <div className="page-shell">
          <div className="section-heading centered">
            <div className="section-leaf">
              <Leaf className="h-4 w-4" />
            </div>
            <h2 className="section-title">Heti ajánlat</h2>
            <p className="section-subtitle">Finom, tápláló, 100% organikus.</p>
          </div>

          <div className="weekly-grid">
            {weeklyItems.map((item) => (
              <article key={item.name} className="weekly-card">
                <div className="weekly-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="weekly-photo"
                  />
                </div>
                <div className="weekly-content">
                  <h3 className="weekly-title">{item.name}</h3>
                  <p className="weekly-description">{item.description}</p>
                  <div className="weekly-footer">
                    <span className="weekly-price">{item.price}</span>
                    <button type="button" className="add-button" aria-label={`${item.name} hozzáadása`}>
                      <CirclePlus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="section-action">
            <a href="#kapcsolat" className="primary-button compact">
              Összes étel megnézése
            </a>
          </div>
        </div>
      </section>

      <section id="gyik" className="process-section">
        <div className="page-shell">
          <div className="process-panel">
            <div className="section-heading centered compact-heading">
              <h2 className="section-title small">Így működik az előrendelés</h2>
            </div>

            <div className="process-grid">
              {preorderSteps.map((item) => (
                <article key={item.step} className="process-card">
                  <span className="process-step">{item.step}</span>
                  <div className="process-icon">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="process-title">{item.title}</h3>
                    <p className="process-text">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="kapcsolat" className="footer-section">
        <div className="page-shell footer-grid">
          <div className="footer-visual">
            <Image
              src="/laura_organic_footer_left.png"
              alt="Laura Organic heti fogások"
              fill
              sizes="(min-width: 1200px) 35vw, 100vw"
              className="footer-photo"
            />
          </div>

          <div id="rolunk" className="footer-copy">
            <h2 className="footer-title">Laura Organic</h2>
            <p className="footer-text">
              Hiszünk az egyszerűségben, a minőségben és a természet ritmusában.
              Ételeinkkel szeretnénk hozzájárulni egy egészségesebb, tudatosabb mindennaphoz.
            </p>
            <a href="https://instagram.com" className="footer-link">
              Kövess minket Instagramon
            </a>
          </div>

          <blockquote className="footer-quote">
            “A jó étel kapcsolat.
            <br />
            Önmagaddal és
            <br />a természettel.”
          </blockquote>
        </div>
      </footer>
    </main>
  );
}
