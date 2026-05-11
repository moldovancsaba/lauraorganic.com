import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Coffee,
  Leaf,
  Mail,
  MapPin,
  ShoppingBasket,
  Truck,
} from "lucide-react";

const featuredProducts = [
  {
    name: "Lassan sült szezonális zöldségtál",
    description:
      "Lassan sült szezonális zöldségek, friss fűszerek és természetes alapanyagok — egyszerűen elkészítve, hogy minden íz a helyén maradjon.",
    price: "4 900 Ft",
  },
  {
    name: "Zöldfűszeres kecskesajtos quiche",
    description:
      "Vajas tészta, lágy kecskesajt és friss zöldfűszerek egy olyan fogásban, amit szombati ebédre is öröm hazavinni.",
    price: "3 600 Ft",
  },
  {
    name: "Tavaszi krémleves pirított magvakkal",
    description:
      "Selymes, szezonális leves organikus alapanyagokból, frissen elkészítve a heti kínálat részeként.",
    price: "2 800 Ft",
  },
  {
    name: "Hidegen sajtolt almalé",
    description:
      "Tiszta, adalékmentes almalé családi gazdaságból, amely jól illik a szombati piaci ritmushoz.",
    price: "1 990 Ft",
  },
];

const steps = [
  {
    title: "Előrendelés",
    text: "Hét közben kiválasztod, mit vinnél haza a szombati kínálatból.",
  },
  {
    title: "Friss elkészítés",
    text: "Pénteken és szombat hajnalban készítjük el a rendeléseket kis mennyiségben.",
  },
  {
    title: "Átvétel",
    text: "Szombaton átveszed a biopiacon vagy a foodtrucknál — sorban állás és bizonytalanság nélkül.",
  },
];

const pickupLabels = [
  "Piaci átvétel",
  "Foodtruck pickup",
  "Szombat délelőtt",
  "Frissen elkészítve",
];

const highlights = [
  "Szezonális organikus fogások heti rotációban",
  "Kis mennyiségben készül, frissen a szombati átvételhez",
  "Piaci hangulat, személyesebb és nyugodtabb rutin",
  "Nem harsány, nem teches — valódi ízekre épülő márka",
];

const navItems = [
  { label: "Heti kínálat", href: "#termekek" },
  { label: "Szombati átvétel", href: "#atvetel" },
  { label: "Piac & foodtruck", href: "#ritmus" },
  { label: "Rólunk", href: "#rolunk" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="page-shell pt-6 pb-16 md:pt-8 md:pb-24">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-border/70 bg-white/70 px-4 py-3 backdrop-blur md:px-6">
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
                  szombati piac • foodtruck • előrendelés
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="pill-link" href="#termekek">
              E heti menü
            </a>
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary">
                <Leaf className="h-4 w-4" />
                Szezonális bioételek előrendeléssel
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.92] md:text-7xl">
                  Szombati piac. Frissen elkészítve. Csak átveszed.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  Kis tételben készített, organikus készételek és friss fogások a
                  szombati biopiac hangulatával. Előrendelsz online, majd kényelmesen
                  átveszed a piacon vagy a foodtrucknál.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#termekek">
                  Előrendelek szombatra
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a className="cta-secondary" href="#atvetel">
                  Hol vehető át?
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <article className="stat-card">
                  <span className="stat-value">Heti</span>
                  <span className="stat-label">rotációban készül</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">Szombat</span>
                  <span className="stat-label">átvétel a piacon</span>
                </article>
                <article className="stat-card">
                  <span className="stat-value">Kis tétel</span>
                  <span className="stat-label">frissen elkészítve</span>
                </article>
              </div>
            </div>

            <aside className="feature-panel">
              <div className="flex items-center justify-between">
                <p className="panel-kicker">A piac ritmusa</p>
                <Coffee className="h-4 w-4 text-primary" />
              </div>

              <div className="space-y-4">
                <div className="panel-row">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Előrendelés hét közben</p>
                    <p className="panel-copy">
                      Nyugodtan kiválasztod, mit vinnél haza a szombati kínálatból.
                    </p>
                  </div>
                </div>
                <div className="panel-row">
                  <ShoppingBasket className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Friss elkészítés kis tételben</p>
                    <p className="panel-copy">
                      Pontosan annyi készül, amennyire valóban szükség van.
                    </p>
                  </div>
                </div>
                <div className="panel-row">
                  <MapPin className="h-4 w-4 text-primary" />
                  <div>
                    <p className="panel-title">Átvétel a piacon vagy a foodtrucknál</p>
                    <p className="panel-copy">
                      Személyes, kiszámítható, sorban állás és bizonytalanság nélkül.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-border/80 bg-accent p-5">
                <p className="panel-kicker">Nyugodt szombat reggel</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  Nem webshop. Inkább egy lassabb, jobb szombat.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 md:py-16">
        <div className="section-head">
          <div>
            <p className="section-kicker">Miért más?</p>
            <h2 className="section-title">Nem webshop. Inkább egy lassabb, jobb szombat.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              A Laura Organic nem polcokra gyártott étel. Hetente változó, szezonális
              kínálattal készülünk — olyan fogásokkal, amelyeket mi magunk is szívesen
              vinnénk haza a piacról.
            </p>
            <p>
              Minden kis adagban készül, valódi alapanyagokból, fölösleges kompromisszumok
              nélkül. Az előrendelés miatt pontosan annyi készül, amennyire valóban szükség van.
            </p>
            <p>Az eredmény: frissebb étel, nyugodtabb átvétel, kevesebb pazarlás.</p>
          </div>
        </div>
      </section>

      <section id="atvetel" className="page-shell pb-16 md:pb-24">
        <div className="rounded-[2rem] border border-border/80 bg-card p-7 shadow-soft md:p-10">
          <div className="section-head">
            <div>
              <p className="section-kicker">Így működik</p>
              <h2 className="section-title">Egyszerű. Friss. Kiszámítható.</h2>
            </div>
            <p className="section-copy">
              Előrendelésből indul, friss elkészítéssel folytatódik, és személyes
              szombati átvétellel zárul.
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

      <section id="ritmus" className="page-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="section-kicker">A piac ritmusa</p>
            <h2 className="section-title">Korai kávéillat, friss fogások, ismerős beszélgetések.</h2>
            <div className="space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                A Laura Organic ezt a hangulatot szeretné megőrizni: nem sietős rendelést,
                hanem egy nyugodt szombati rutin részeként.
              </p>
              <p>
                A foodtrucknál átvenni az ételt épp annyira fontos élmény, mint maga az étel.
              </p>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="highlight-row">
              <div className="highlight-icon">
                <Coffee className="h-4 w-4" />
              </div>
              <p className="text-base font-medium text-foreground">
                Korai kávéillat, lassan ébredő piac és frissen sült fogások.
              </p>
            </div>
            <div className="highlight-row">
              <div className="highlight-icon">
                <Truck className="h-4 w-4" />
              </div>
              <p className="text-base font-medium text-foreground">
                Foodtruckos átvétel, ami a márka hangulatának része.
              </p>
            </div>
            <div className="highlight-row">
              <div className="highlight-icon">
                <Clock3 className="h-4 w-4" />
              </div>
              <p className="text-base font-medium text-foreground">
                Nem sietős élmény, hanem egy lassabb és jobb szombat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="termekek" className="page-shell pb-16 md:pb-24">
        <div className="section-head">
          <div>
            <p className="section-kicker">E heti kínálat</p>
            <h2 className="section-title">Szezonális organikus fogások, heti rotációban.</h2>
          </div>
          <p className="section-copy">
            Amit most találsz, jövő héten már lehet, hogy nem lesz ugyanaz.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.name} className="product-card">
              <span className="product-badge">E heti fogás</span>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Frissen készített organikus fogás szombati átvétellel.
                </p>
                <p className="text-base leading-7 text-muted-foreground">{product.description}</p>
              </div>
              <div className="mt-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Korlátozott mennyiségben készül.
                </p>
                <p className="text-sm text-muted-foreground">
                  Átvétel: szombaton a biopiacon vagy a foodtrucknál.
                </p>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-2xl font-semibold text-primary">{product.price}</p>
                  <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    Szombati átvétellel
                  </span>
                </div>
                <a className="cta-secondary w-full" href="#newsletter">
                  Előrendelem
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Átvétel szombaton</p>
            <h2 className="section-title">Személyesen a biopiacon vagy a foodtrucknál.</h2>
            <div className="space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                A rendeléseket személyesen lehet átvenni a szombati biopiacon vagy a foodtrucknál.
              </p>
              <p>
                Nem futárra és raktárra épülünk — hanem frissen elkészített ételekre és
                személyes átvételre.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {pickupLabels.map((item) => (
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

      <section id="rolunk" className="page-shell pb-16 md:pb-24">
        <div className="rounded-[2rem] border border-border/80 bg-card p-7 shadow-soft md:p-10">
          <div className="section-head">
            <div>
              <p className="section-kicker">Miért Laura Organic?</p>
              <h2 className="section-title">A jó ételhez nem kell túlmagyarázott koncepció.</h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                Elég hozzá jó alapanyag, szezonális gondolkodás és idő arra, hogy rendesen elkészüljön.
              </p>
              <p>A Laura Organic ebből indul ki minden héten.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="section-kicker">Márkairány</p>
            <h2 className="section-title">Nyugodt, prémium, budapesti organikus márka.</h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Szombati biopiaci élményként, szezonális foodtruckként és előrendeléses
              frissétel-rendszerként kommunikálunk.
            </p>
          </div>

          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="highlight-row">
                <div className="highlight-icon">
                  <Leaf className="h-4 w-4" />
                </div>
                <p className="text-base font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="page-shell pb-20">
        <div className="rounded-[2rem] border border-border/80 bg-card p-7 shadow-soft md:p-10">
          <div className="section-head">
            <div>
              <p className="section-kicker">Heti kínálat és piaci hírek</p>
              <h2 className="section-title">Péntekenként elküldjük az aktuális szombati kínálatot.</h2>
            </div>
            <div className="space-y-5">
              <p className="section-copy">
                Iratkozz fel, és péntekenként elküldjük az aktuális szombati kínálatot.
              </p>
              <form className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email címed"
                    className="w-full rounded-full border border-border bg-background px-11 py-3 text-foreground outline-none transition focus:border-primary"
                  />
                </div>
                <button type="submit" className="cta-primary">
                  Kérem az e heti menüt
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 bg-white/40 py-8">
        <div className="page-shell flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Organikus készételek szombati átvétellel</p>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
