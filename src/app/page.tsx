import Image from "next/image";
import { ArrowRight, CalendarDays, Check, Leaf, MapPin, ShoppingBasket, Sparkles } from "lucide-react";

const featuredProducts = [
  {
    name: "Tavaszi zoldsegkosar",
    description:
      "Ropogos salatak, ujhagyma, retek es fuszernovenyek egy heti piacra hangolt csomagban.",
    price: "4 900 Ft",
    badge: "Heti kedvenc",
  },
  {
    name: "Farm tojas",
    description:
      "Szabad tartasbol, frissen szedve. Elore foglalva biztosan var rad a piacon.",
    price: "1 450 Ft / 10 db",
    badge: "Mindig keresett",
  },
  {
    name: "Friss kecskesajt",
    description:
      "Lagyan sos, kremes texturaju sajt helyi termelotol, friss fuszerekkel.",
    price: "2 800 Ft / db",
    badge: "Kistermeloi",
  },
  {
    name: "Hidegen sajtolt almale",
    description:
      "Tiszta, adalekmentes ital csaladi gazdasagbol, szezonalis tetelben.",
    price: "1 990 Ft / 750 ml",
    badge: "Uj tetel",
  },
];

const steps = [
  {
    title: "Kivalasztod, mit szeretnel",
    text: "A kiemelt termekekbol es a heti kinalatbol egyszeruen osszeallitod a kosarad.",
  },
  {
    title: "Lefoglaljuk neked",
    text: "A rendelesedet felretesszuk, igy nem kell attol tartanod, hogy elfogy mire kialsz a piacra.",
  },
  {
    title: "Atveszed a piacon",
    text: "Gyors atvetel, sorbanallas helyett biztos csomaggal. Pontosan erre valo a rendszer.",
  },
];

const highlights = [
  "Helyi, szezonalis es atgondolt valogatas",
  "Piaci atvetel felesleges varakozas nelkul",
  "Kis kinalat, gondosan valasztott termekek",
  "Laura Organic hangulat: tiszta, szemelyes, emberi",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="page-shell pt-6 pb-16 md:pt-8 md:pb-24">
          <header className="flex items-center justify-between rounded-full border border-border/70 bg-white/70 px-4 py-3 backdrop-blur md:px-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border/70 bg-card">
                <Image
                  src="/laura_organic_logo.png"
                  alt="Laura Organic logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="brand-mark">Laura Organic</p>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                lauraorganic.com
                </p>
              </div>
            </div>
            <a className="pill-link" href="#termekek">
              Heti kinalat
            </a>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary">
                <Leaf className="h-4 w-4" />
                Biopiac Biokaja rendelo
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.96] md:text-7xl">
                  Lefoglalas online, atvetel a piacon.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  A Laura Organic oldala arra epul, hogy a legjobb termekeket mar elore
                  biztosithasd magadnak. Nem keresgelsz, nem kapkodsz, csak atveszed a
                  piacra keszitett csomagodat.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#termekek">
                  4 kiemelt termek
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a className="cta-secondary" href="#atvetel">
                  Hogyan mukodik
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <article className="stat-card">
                  <span className="stat-value">4</span>
                  <span className="stat-label">kiemelt termek</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">1</span>
                  <span className="stat-label">atveteli pont: piac</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">elore osszekeszitve</span>
                </article>
              </div>
            </div>

            <aside className="feature-panel">
              <div className="flex items-center justify-between">
                <p className="panel-kicker">Piaci ritmus</p>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>

              <div className="space-y-4">
                <div className="panel-row">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Foglalas a heti kinalatra</p>
                    <p className="panel-copy">A hangsuly a rovid, vilagos es gyors rendelesen van.</p>
                  </div>
                </div>
                <div className="panel-row">
                  <ShoppingBasket className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Elore osszekeszitett csomag</p>
                    <p className="panel-copy">A kiemelt termekek biztosan megvarnak, mire megerkezel.</p>
                  </div>
                </div>
                <div className="panel-row">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Atvetel a piacon</p>
                    <p className="panel-copy">Szemelyes atadas, online bizonytalansag helyett valos kapcsolat.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-border/80 bg-accent p-5">
                <p className="panel-kicker">Oldalirany</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  Tiszta landing oldal, eros termekkiemelessel es Vercelre alkalmas
                  Next.js App Router alapon.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="termekek" className="page-shell py-16 md:py-24">
        <div className="section-head">
          <div>
            <p className="section-kicker">Kiemelt kinalat</p>
            <h2 className="section-title">4 termek, ami miatt erdemes elore foglalni</h2>
          </div>
          <p className="section-copy">
            Ezek a blokkok konnyen szerkeszthetok, ha a heti kinalat valtozik. Jelenleg eros
            nyitooldali termekkiemelest adnak.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.name} className="product-card">
              <span className="product-badge">{product.badge}</span>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-base leading-7 text-muted-foreground">{product.description}</p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <p className="text-2xl font-semibold text-primary">{product.price}</p>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  foglalhato
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="atvetel" className="page-shell pb-16 md:pb-24">
        <div className="rounded-[2rem] border border-border/80 bg-card p-7 shadow-soft md:p-10">
          <div className="section-head">
            <div>
              <p className="section-kicker">Atvetel a piacon</p>
              <h2 className="section-title">Pontosan erre valo az oldal</h2>
            </div>
            <p className="section-copy">
              Nem webshop-logikat epitunk, hanem egy gyors foglalasi elmenyt, amit a piaci
              szemelyes atvetel zar le.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="step-card">
                <span className="step-index">0{index + 1}</span>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Miert mukodik</p>
            <h2 className="section-title">Egyszeru szerkezet, erosen pozicionalt uzenet</h2>
            <p className="text-lg leading-8 text-muted-foreground">
              A hangsuly nem a tulbonyolitott funkciokon van, hanem azon, hogy a latogato 10
              masodperc alatt ertse meg: itt biotermeket foglal, majd a piacon veszi at.
            </p>
          </div>

          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="highlight-row">
                <div className="highlight-icon">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-base font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
