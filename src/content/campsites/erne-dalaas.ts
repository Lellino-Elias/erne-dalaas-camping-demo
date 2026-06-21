import type { CampsiteConfig } from "../types";

const IMG = "/campsites/erne-dalaas";

const erneDalaas: CampsiteConfig = {
  name: "Haus & Camping Erne",
  shortName: "Erne",
  slug: "erne-dalaas",
  ort: "Dalaas",
  region: "Vorarlberg",
  brandKind: "Camping & Ferienwohnungen",
  regionLong: "Klostertal · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Camping mitten in der Klostertaler Bergwelt",
  claimEmphasis: "Klostertaler Bergwelt",
  emailDetail: "euer Aufenthaltsraum mit der selbst gebauten Bierzapfstelle",
  intro:
    "Bei Familie Erne stellst du dein Wohnmobil auf einen idyllischen Wiesenplatz mitten im Klostertal — komfortables Sanitärhaus, gratis WLAN und ein geselliger Aufenthaltsraum inklusive, Sommer wie Winter.",

  logo: { src: `${IMG}/logo-97491af9f8.png`, alt: "Haus & Camping Erne Logo" },

  statement: {
    text: "Morgens aus dem Vorzelt treten und direkt in die Klostertaler Berge blicken.",
    emphasis: "die Klostertaler Berge",
  },

  pillars: [
    {
      title: "Klostertaler Bergwelt",
      text: "Frische Bergluft und klare Aussichten — die Klostertaler Bergwelt beginnt direkt hinter dem Platz.",
      image: { src: `${IMG}/activity-0895f39e56.webp`, alt: "Sommerliche Bergkulisse über dem Klostertal bei Dalaas" },
    },
    {
      title: "Idyllischer Wiesenplatz",
      text: "Ebene Stellplätze auf gepflegter Wiese — für Wohnwagen, Wohnmobil und Zelt, Sommer wie Winter.",
      image: { src: `${IMG}/gallery-1c7d2e784e.webp`, alt: "Wiesenstellplätze mit Wohnwagen und Wildblumen am Camping Erne" },
    },
    {
      title: "Am Alfenzbach",
      text: "Gleich nebenan plätschert die Alfenz — ideal für ruhige Spaziergänge entlang des Bachs.",
      image: { src: `${IMG}/gallery-b6ade8da96.webp`, alt: "Die Alfenz fließt neben dem Campingplatz Erne durch das Tal" },
    },
  ],

  usps: [
    "43 Stellplätze",
    "Sommer wie Winter offen",
    "Gratis WLAN",
    "E-Ladestation 11 kW",
    "Hunde willkommen",
    "Touristenlager für 8",
  ],

  trust: {
    heading: "Darauf ist bei Familie Erne Verlass",
    headingEmphasis: "Familie Erne",
    intro:
      "Angelika und Thomas Erne führen ihren Platz persönlich: 43 Stellplätze auf der Wiese, ein gemütliches Touristenlager und kurze Wege zu Bad, Bäcker und Bahnhof — mitten in Dalaas.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-d77c81f6fc.webp`, alt: "Luftaufnahme: Camping Erne im grünen Klostertal bei Dalaas" },
  },

  breather: {
    image: { src: `${IMG}/gallery-3d41d8a058.webp`, alt: "Abendstimmung über den Stellplätzen am Camping Erne" },
    line: "Wenn die Sonne hinter die Gipfel sinkt, kommt das ganze Tal zur Ruhe.",
  },

  camping: {
    heading: "Dein Stellplatz im Klostertal",
    intro:
      "Vom Stellplatz blickst du direkt in die Berge: ebene Wiesenplätze mit Strom, ein komfortables Sanitärhaus und ein Aufenthaltsraum für gesellige Abende.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Ebene Wiesenplätze mit Strom, eingerahmt von Fels und Wald — der Bergblick ist gratis dabei.",
        image: { src: `${IMG}/gallery-a5cd90012c.webp`, alt: "Stellplätze mit Wohnwagen vor der Felswand am Camping Erne" },
      },
      {
        title: "Sommerabende am Platz",
        text: "Wenn die Sonne hinter die Gipfel sinkt, wird der Platz besonders ruhig und gemütlich.",
        image: { src: `${IMG}/gallery-8d68aaec2d.webp`, alt: "Wohnwagen im warmen Abendlicht am Campingplatz Erne" },
      },
      {
        title: "Persönlicher Empfang",
        text: "An der Anmeldung nimmt sich Familie Erne Zeit, mit dir den perfekten Stellplatz zu finden.",
        image: { src: `${IMG}/gallery-be51f33066.webp`, alt: "Anmeldung und Rezeption von Haus & Camping Erne in Dalaas" },
      },
      {
        title: "Touristenlager für 8 Personen",
        text: "Das gemütliche Lager bietet Platz für acht Personen — mit oder ohne Bettwäsche buchbar.",
        image: { src: `${IMG}/gallery-a8b771e2d7.webp`, alt: "Touristenlager mit Stockbetten am Camping Erne" },
      },
      {
        title: "Aufenthaltsraum mit Bierzapfstelle",
        text: "Kühlschrank, Fernseher und eine selbst gebaute Bierzapfstelle laden zu geselligen Abenden.",
        image: { src: `${IMG}/gallery-68e17a1dce.webp`, alt: "Aufenthaltsraum mit selbst gebauter Bierzapfstelle am Camping Erne" },
      },
      {
        title: "Mittendrin in Dalaas",
        text: "Sparmarkt, Bäcker, Bank und Bushaltestelle liegen nur einen Katzensprung entfernt.",
        image: { src: `${IMG}/gallery-03ff61069f.webp`, alt: "Camping Erne im sonnigen Talkessel von Dalaas" },
      },
    ],
  },

  mobilheime: {
    heading: "Ferienwohnungen & Zimmer im Haus Erne",
    intro:
      "Lieber feste Wände statt Zelt? Im Haus Erne findest du helle Ferienwohnungen und Zimmer. Preise verstehen sich ab vier Nächten, zzgl. Endreinigung und Kurtaxe — Sommerpreise auf Anfrage.",
    items: [
      {
        name: "Ferienwohnung Nr. 6",
        kind: "Ferienwohnung · 4 Personen",
        text: "Helle Wohnung für vier Personen mit separatem Schlafzimmer, voll ausgestatteter Küche und WLAN im ganzen Haus.",
        image: { src: `${IMG}/gallery-e6217f4c77.webp`, alt: "Wohn- und Essbereich der Ferienwohnung Nr. 6 im Haus Erne" },
        priceFrom: 140,
        features: ["Wohnraum mit Doppelbett", "Separates Schlafzimmer", "Voll ausgestattete Küche", "ab € 140 pro Nacht"],
      },
      {
        name: "Ferienwohnung Nr. 8",
        kind: "Ferienwohnung · 2 Personen",
        text: "Gemütliche Wohnung für zwei mit Balkon, eigener Küche und Kabel-TV — ideal für Paare.",
        image: { src: `${IMG}/gallery-26142bc381.webp`, alt: "Wohnraum der Ferienwohnung Nr. 8 im Haus Erne" },
        priceFrom: 76,
        features: ["Wohnraum mit Doppelbett", "Balkon", "Küche & Kabel-TV", "ab € 76 pro Nacht"],
      },
      {
        name: "Doppelzimmer",
        kind: "Zimmer im Haus Erne",
        text: "Komfortables Doppelzimmer mit Dusche/WC und Kabel-TV — die Zimmer 01, 02 und 07 haben einen Balkon.",
        image: { src: `${IMG}/gallery-42ec07b4a9.webp`, alt: "Doppelzimmer mit Holzdecke im Haus Erne" },
        priceFrom: 55,
        features: ["Dusche/WC", "Kabel-TV", "Teils mit Balkon", "ab € 55 pro Person/Nacht"],
      },
    ],
  },

  kinder: {
    heading: "Was Kinder hier erleben",
    intro:
      "Baden, klettern, toben: Schwimmbad und Spielplätze liegen nur wenige Schritte vom Platz entfernt — ideal für einen Familienurlaub im Tal.",
    features: [
      {
        title: "Beheiztes Freibad",
        text: "Das beheizte Freibad mit großer Liegewiese liegt nur wenige Schritte vom Platz entfernt.",
        image: { src: `${IMG}/gallery-539050e1da.webp`, alt: "Beheiztes Freibad Dalaas mit Liegewiese nahe dem Camping Erne" },
      },
      {
        title: "Spiel- & Fußballplätze",
        text: "Spiel- und Fußballplätze samt Trampolin sorgen für Abwechslung an der frischen Luft.",
        image: { src: `${IMG}/gallery-9f0370f32c.webp`, alt: "Spielplatz mit Trampolin und Fußballwiese nahe dem Camping Erne" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Klostertal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A14 und die S16 Arlberg Schnellstraße bis zur Ausfahrt Dalaas — von dort sind es nur wenige Minuten zum Platz.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Dalaas an der Arlbergbahn liegt im Ort — die letzten Meter zum Platz sind schnell zu Fuß geschafft.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Innsbruck ist gut eine Stunde entfernt, Friedrichshafen und Zürich liegen etwas weiter.",
      },
    ],
  },

  galerie: {
    heading: "Sommer wie Winter in Dalaas",
    headingEmphasis: "Dalaas",
    intro: "Vom grünen Wiesenplatz bis zur verschneiten Stellfläche — ein paar Eindrücke aus dem Klostertal.",
    tag: "Ganzjährig geöffnet",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-e2dad76145.webp`, alt: "Spielwiese mit großem Trampolin und Spielgeräten in Dalaas nahe dem Camping Erne" },
      { src: `${IMG}/gallery-a412ea2356.webp`, alt: "Verschneite Stellplätze am Camping Erne im Winter" },
      { src: `${IMG}/gallery-d0124cdf56.webp`, alt: "Dorfstraße von Dalaas mit Kirche und Bergen" },
      { src: `${IMG}/gallery-0b61221567.webp`, alt: "Touristenlager mit Stockbetten am Camping Erne" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz im Klostertal",
    headingEmphasis: "im Klostertal",
    intro: "Wähle Stellplatz, Zeitraum und Personen — Familie Erne meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Nebensaison · Stellplatz inkl. 2 Personen · zzgl. Kurtaxe € 2,80 p. P./Nacht (ab 15 J.) · Strom nach Verbrauch (€ 0,95/kWh)",
    highlight: {
      title: "Sommer wie Winter offen",
      text: "43 Stellplätze, ganzjährig geöffnet — Sommer wie Winter.",
    },
    categories: [
      { id: "wohnwagen", label: "Stellplatz Wohnwagen / Zelt", perNight: 33, perExtraGuest: 10 },
      { id: "wohnmobil", label: "Stellplatz Wohnmobil", perNight: 32, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 47.122573, lng: 9.997762 },
    tel: "+43 5585 7223",
    telHref: "tel:+4355857223",
    mail: "info@erne-dalaas.at",
    adresse: "Klostertalerstraße 64 · 6752 Dalaas · Vorarlberg",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Touristenlager", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default erneDalaas;
