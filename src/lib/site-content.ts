export type LauraIconKey = "Home" | "Calendar" | "Reward" | "List" | "Check";

export type NavItemContent = {
  id: string;
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLines: string[];
  description: string;
  cta: {
    label: string;
    href: string;
  };
  meta: Array<{
    id: string;
    label: string;
  }>;
  media: {
    src: string;
    alt: string;
  };
};

export type FeatureItemContent = {
  id: string;
  title: string;
  text: string;
  meta: string;
  icon: LauraIconKey;
};

export type WeeklyDishContent = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  helperText: string;
  ctaLabel: string;
  ctaHref: string;
};

export type ProcessStepContent = {
  id: string;
  title: string;
  text: string;
  icon: LauraIconKey;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  panelTitle: string;
  paragraphs: string[];
};

export type FooterContent = {
  media: {
    src: string;
    alt: string;
  };
  brandTitle: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
  quoteLines: string[];
};

export type LauraSiteContent = {
  navigation: NavItemContent[];
  shell: {
    primaryAction: {
      label: string;
      href: string;
    };
  };
  hero: HeroContent;
  featureBand: FeatureItemContent[];
  weeklyOffer: {
    eyebrow: string;
    title: string;
    description: string;
    items: WeeklyDishContent[];
    sectionAction: {
      label: string;
      href: string;
    };
  };
  process: {
    title: string;
    steps: ProcessStepContent[];
  };
  about: AboutContent;
  footer: FooterContent;
};

export const lauraSiteContent: LauraSiteContent = {
  navigation: [
    { id: "menu", label: "Étlap", href: "#heti-ajanlat" },
    { id: "about", label: "Rólunk", href: "#rolunk" },
    { id: "weekly", label: "Heti ajánlat", href: "#heti-ajanlat" },
    { id: "faq", label: "GYIK", href: "#gyik" },
    { id: "contact", label: "Kapcsolat", href: "#kapcsolat" },
  ],
  shell: {
    primaryAction: {
      label: "Előrendelés",
      href: "#heti-ajanlat",
    },
  },
  hero: {
    eyebrow: "Bio ételek. Igazi alapanyagokból.",
    titleLines: ["Organikus.", "Kézműves.", "Készen, neked."],
    description:
      "100% organikus, szezonális alapanyagokból készült, növényi alapú ételek. Főzzük helyetted, hogy több időd legyen az igazán fontos dolgokra.",
    cta: {
      label: "Nézd meg a heti étlapot",
      href: "#heti-ajanlat",
    },
    meta: [
      { id: "organic", label: "100% organikus" },
      { id: "plant", label: "Növényi alapú" },
      { id: "packaging", label: "Csomagolásmentes" },
    ],
    media: {
      src: "/laura_organic_header_right.png",
      alt: "Laura Organic foodtruck a piacon",
    },
  },
  featureBand: [
    {
      id: "market",
      title: "Találkozzunk szombat reggel!",
      text: "Minden szombaton a biopiacon vagyunk a foodtruckunkkal.",
      meta: "Biomarket Budapest\nSzombatonként 7:00 – 13:00",
      icon: "Home",
    },
    {
      id: "preorder",
      title: "Rendelj előre, spórolj időt!",
      text: "Add le rendelésed online péntek éjfélig, és vedd át könnyedén a piacon.",
      meta: "Hogyan működik?",
      icon: "Calendar",
    },
    {
      id: "fresh",
      title: "Frissen főzve, neked készítve.",
      text: "Heti étlapunk szezonálisan változik, mindig a legjobb alapanyagokból.",
      meta: "100% organikus • növényi alapú • csomagolásmentes",
      icon: "Reward",
    },
  ],
  weeklyOffer: {
    eyebrow: "Heti kínálat",
    title: "Heti ajánlat",
    description: "Finom, tápláló, 100% organikus.",
    items: [
      {
        id: "green-pea-soup",
        name: "Zöldborsó krémleves mentával",
        description: "Friss, tavaszi ízek egy tányérban.",
        price: "1 890 Ft",
        image: {
          src: "/zoldborso_kremleves_mentaval.png",
          alt: "Zöldborsó krémleves mentával",
        },
        helperText: "Szombati átvétellel",
        ctaLabel: "Előrendelem",
        ctaHref: "#kapcsolat",
      },
      {
        id: "chickpea-curry",
        name: "Csicseriborsó curry jázminrizzsel",
        description: "Laktató, fűszeres, melengető.",
        price: "2 690 Ft",
        image: {
          src: "/csicseriborso_curry_jazminrizzsel.png",
          alt: "Csicseriborsó curry jázminrizzsel",
        },
        helperText: "Szombati átvétellel",
        ctaLabel: "Előrendelem",
        ctaHref: "#kapcsolat",
      },
      {
        id: "wild-garlic-pasta",
        name: "Medvehagymás kesudiós pesto tészta",
        description: "Krémes, friss, tavaszi hangulat.",
        price: "2 490 Ft",
        image: {
          src: "/medvehagymas_kesudios_pesto_teszta.png",
          alt: "Medvehagymás kesudiós pesto tészta",
        },
        helperText: "Szombati átvétellel",
        ctaLabel: "Előrendelem",
        ctaHref: "#kapcsolat",
      },
      {
        id: "chocolate-mousse",
        name: "Csokoládé mousse málnával",
        description: "Édes befejezés, bűntudat nélkül.",
        price: "1 490 Ft",
        image: {
          src: "/csokolade_mousse_malnaval.png",
          alt: "Csokoládé mousse málnával",
        },
        helperText: "Szombati átvétellel",
        ctaLabel: "Előrendelem",
        ctaHref: "#kapcsolat",
      },
    ],
    sectionAction: {
      label: "Összes étel megnézése",
      href: "#kapcsolat",
    },
  },
  process: {
    title: "Így működik az előrendelés",
    steps: [
      {
        id: "choose",
        title: "Válassz kedvedre",
        text: "Böngészd át a heti ajánlatot, és tedd a kosárba, amihez épp kedved van.",
        icon: "List",
      },
      {
        id: "deadline",
        title: "Rendelj péntek éjfélig",
        text: "Add le rendelésed online péntek 24:00-ig.",
        icon: "Calendar",
      },
      {
        id: "pickup",
        title: "Vedd át a piacon",
        text: "Szombaton a foodtrucknál fenntartjuk neked.",
        icon: "Check",
      },
      {
        id: "enjoy",
        title: "Élvezd tudatosan",
        text: "Finom, tápláló étel – neked, a testednek és a bolygónknak.",
        icon: "Reward",
      },
    ],
  },
  about: {
    eyebrow: "Miért Laura Organic?",
    title: "Nem webshop. Inkább egy lassabb, jobb szombat.",
    description: "Kis tételben készített organikus fogások, a piac ritmusához igazítva.",
    panelTitle: "A jó ételhez nem kell túlmagyarázott koncepció.",
    paragraphs: [
      "Elég hozzá jó alapanyag, szezonális gondolkodás és idő arra, hogy rendesen elkészüljön.",
      "A Laura Organic ebből indul ki minden héten: frissebb étel, nyugodtabb átvétel, kevesebb pazarlás.",
    ],
  },
  footer: {
    media: {
      src: "/laura_organic_footer_left.png",
      alt: "Laura Organic heti fogások",
    },
    brandTitle: "Laura Organic",
    description:
      "Hiszünk az egyszerűségben, a minőségben és a természet ritmusában. Ételeinkkel szeretnénk hozzájárulni egy egészségesebb, tudatosabb mindennaphoz.",
    action: {
      label: "Kövess minket Instagramon",
      href: "https://instagram.com",
    },
    quoteLines: ["“A jó étel kapcsolat.", "Önmagaddal és", "a természettel.”"],
  },
};
