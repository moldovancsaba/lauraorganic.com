import Image from "next/image";
import { ArrowRight, CalendarDays, Check, Leaf, MapPin, ShoppingBasket, Sparkles } from "lucide-react";

const featuredProducts = [
  {
    name: "Tavaszi zöldségkosár",
    description:
      "Ropogós saláták, újhagyma, retek és friss fűszernövények egy szezonális válogatásban.",
    price: "4 900 Ft",
    badge: "Heti kedvenc",
  },
  {
    name: "Farmtojás",
    description:
      "Szabadtartásból származó friss tojás. Előre lefoglalva biztosan vár rád a piacon.",
    price: "1 450 Ft / 10 db",
    badge: "Mindig népszerű",
  },
  {
    name: "Friss kecskesajt",
    description:
      "Lágyan sós, krémes állagú kecskesajt helyi termelőtől, friss fűszerekkel.",
    price: "2 800 Ft / db",
    badge: "Kistermelői",
  },
  {
    name: "Hidegen sajtolt almalé",
    description:
      "Tiszta, adalékmentes almalé családi gazdaságból, szezonális készletben.",
    price: "1 990 Ft / 750 ml",
    badge: "Újdonság",
  },
];

const steps = [
  {
    title: "Kiválasztod, mire van szükséged",
    text: "A kiemelt termékekből és a heti kínálatból egyszerűen összeállíthatod a kosaradat.",
  },
  {
    title: "Félretesszük neked",
    text: "A rendelésedet előkészítjük, így nem kell attól tartanod, hogy elfogy, mire kiérsz a piacra.",
  },
  {
    title: "Átveszed a piacon",
    text: "Gyors átvétel sorban állás nélkül, biztosan összeállított csomaggal.",
  },
];

const highlights = [
  "Helyi, szezonális és gondosan válogatott termékek",
  "Piaci átvétel felesleges várakozás nélkül",
  "Kis kínálat, tudatosan kiválasztott termékek",
  "Laura Organic – letisztult, személyes és természetes",
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
              Heti kínálat
            </a>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary">
                <Leaf className="h-4 w-4" />
                Biopiac – biokosár rendelés
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.96] md:text-7xl">
                  Foglalás online, átvétel a piacon.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  A Laura Organic azért jött létre, hogy a legjobb biotermékeket előre
                  lefoglalhasd magadnak. Nincs keresgélés vagy kapkodás – csak átveszed
                  az előkészített csomagodat a piacon.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#termekek">
                  4 kiemelt termék
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a className="cta-secondary" href="#atvetel">
                  Hogyan működik?
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <article className="stat-card">
                  <span className="stat-value">4</span>
                  <span className="stat-label">kiemelt termék</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">1</span>
                  <span className="stat-label">átvételi pont</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">100%-ban előkészítve</span>
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
                    <p className="panel-title">Foglalás a heti kínálatra</p>
                    <p className="panel-copy">A hangsúly a gyors, egyszerű és átlátható rendelésen van.</p>
                  </div>
                </div>
                <div className="panel-row">
                  <ShoppingBasket className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Előkészített csomag</p>
                    <p className="panel-copy">A lefoglalt termékek biztosan megvárnak, mire megérkezel.</p>
                  </div>
                </div>
                <div className="panel-row">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Átvétel a piacon</p>
                    <p className="panel-copy">Személyes átvétel, online bizonytalanság helyett valódi kapcsolat.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-border/80 bg-accent p-5">
                <p className="panel-kicker">Letisztult felépítés</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  Átlátható landing oldal erős termékkiemeléssel, modern Next.js alapokon.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="termekek" className="page-shell py-16 md:py-24">
        <div className="section-head">
          <div>
            <p className="section-kicker">Kiemelt kínálat</p>
            <h2 className="section-title">4 termék, amit érdemes előre lefoglalni</h2>
          </div>
          <p className="section-copy">
            A kínálat hetente frissül, ezért ezek a blokkok könnyen szerkeszthetők.
            Jelenleg a legnépszerűbb termékeket emelik ki.
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
                  Előre lefoglalom
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
              <p className="section-kicker">Átvétel a piacon</p>
              <h2 className="section-title">Pontosan erre való az oldal</h2>
            </div>
            <p className="section-copy">
              Nem egy klasszikus webshopot építünk, hanem egy gyors és egyszerű foglalási
              élményt, amelyet személyes piaci átvétel zár le.
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
            <p className="section-kicker">Miért működik?</p>
            <h2 className="section-title">Egyszerű felépítés, világos üzenet</h2>
            <p className="text-lg leading-8 text-muted-foreground">
              A hangsúly nem a túlbonyolított funkciókon van, hanem azon, hogy a látogató
              néhány másodperc alatt megértse: itt biotermékeket foglalhat, amelyeket
              később személyesen vehet át a piacon.
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
