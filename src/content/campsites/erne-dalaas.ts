import type { CampsiteConfig } from "../types";

/**
 * Camping Erne — Dalaas, Klostertal (Vorarlberg).
 * Familiär geführter Wiesenplatz (Haus & Camping Erne, Familie Angelika & Thomas Erne).
 * Inhalte zu 100 % aus raw/digest abgeleitet. Original-Palette (kein theme), heroVariant center.
 */
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

  claim: "Dein Bergurlaub im Klostertal — Sommer wie Winter",
  claimEmphasis: "im Klostertal",
  emailDetail: "euer gemütlicher Aufenthaltsraum mit der selbst gebauten Bierzapfstelle",
  intro:
    "Ein familiär geführter Wiesenplatz mitten im Klostertal: 43 ebene Stellplätze, ein komfortables Sanitärhaus und ringsum die Vorarlberger Bergwelt. Hier tankst du Sommer wie Winter neue Energie.",

  logo: { src: `${IMG}/logo-97491af9f8.png`, alt: "Logo Haus & Camping Erne, Dalaas-Arlberg" },

  statement: {
    text: "Bei Familie Erne campst du dort, wo die Berge des Klostertals direkt hinter dem Vorzelt beginnen.",
    emphasis: "Familie Erne",
  },

  pillars: [
    { title: "Mitten in der Bergwelt", text: "Rundherum die Klostertaler Berge, frische Luft und Aussichten, die den Alltag schnell vergessen lassen.", image: { src: `${IMG}/gallery-1c7d2e784e.webp`, alt: "Blühende Wiese und Berge beim Camping Erne in Dalaas" } },
    { title: "Idyllischer Wiesenplatz", text: "43 ebene Stellplätze auf gepflegter Wiese — mit Strom, WLAN und reichlich Platz zum Ankommen.", image: { src: `${IMG}/gallery-3d41d8a058.webp`, alt: "Stellplätze mit Wohnwagen im Abendlicht am Camping Erne" } },
    { title: "Familiär geführt", text: "Angelika und Thomas Erne führen Haus und Platz persönlich — herzlich und mit viel Gespür für Gäste.", image: { src: `${IMG}/gallery-0cfcbf3dae.webp`, alt: "Heller Aufenthaltsraum mit gedeckten Tischen bei Familie Erne" } },
  ],

  usps: ["43 Stellplätze", "Sommer wie Winter offen", "Komfortables Sanitärhaus", "Gratis WLAN", "E-Ladestation 11 kW", "Hunde willkommen"],

  trust: {
    heading: "Was dich in Dalaas erwartet",
    headingEmphasis: "Dalaas",
    intro: "Persönlich von Familie Erne geführt: kurze Wege ins Dorf, ein Lebensmittelgeschäft direkt nebenan und ein Platz, an dem du dich vom ersten Moment an wohlfühlst.",
  },

  awards: [],

  saison: { von: "Sommer", bis: "Winter" },

  hero: {
    aerial: { src: `${IMG}/gallery-d77c81f6fc.webp`, alt: "Luftaufnahme: Camping Erne im Klostertal bei Dalaas" },
  },

  camping: {
    heading: "Dein Platz in Dalaas",
    intro: "Idyllischer Wiesenplatz mit komfortablem Sanitärhaus, Aufenthaltsraum und Touristenlager — alles, was du für entspannte Campingtage im Klostertal brauchst.",
    features: [
      { title: "43 Stellplätze auf der Wiese", text: "Ebene, gepflegte Plätze für Wohnwagen, Wohnmobil und Zelt — den Spot wählst du mit der Familie aus.", image: { src: `${IMG}/gallery-a5cd90012c.webp`, alt: "Wiesenstellplätze mit Wohnwagen am Camping Erne" } },
      { title: "Plätze mit Bergblick", text: "Morgens als Erstes die Klostertaler Gipfel im Blick — viele Stellplätze liegen direkt am grünen Hang.", image: { src: `${IMG}/gallery-8d68aaec2d.webp`, alt: "Stellplatz mit Vorzelt vor Bergkulisse im Abendlicht" } },
      { title: "Sommer wie Winter offen", text: "Der Platz hat das ganze Jahr geöffnet — im Winter campst du mitten in der verschneiten Bergkulisse.", image: { src: `${IMG}/gallery-a412ea2356.webp`, alt: "Verschneiter Campingplatz Erne im Winter" } },
      { title: "Gemütlicher Aufenthaltsraum", text: "Mit Kühlschrank, Fernseher und selbst gebauter Bierzapfstelle — der Treffpunkt für gesellige Abende.", image: { src: `${IMG}/gallery-68e17a1dce.webp`, alt: "Aufenthaltsraum mit Bierzapfstelle am Camping Erne" } },
      { title: "Touristenlager für 8", text: "Das Lager am Platz bietet acht Personen Platz und ist mit oder ohne Bettwäsche buchbar.", image: { src: `${IMG}/gallery-a8b771e2d7.webp`, alt: "Touristenlager mit Stockbetten am Camping Erne" } },
      { title: "Lebensmittel gleich nebenan", text: "Der Sparmarkt liegt direkt neben dem Platz — dazu Bäckerei, Bank und Arzt im Dorf erreichbar.", image: { src: `${IMG}/gallery-03ff61069f.webp`, alt: "Rezeption von Camping Erne mit Bergblick in Dalaas" } },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Ferienwohnungen",
    intro: "Lieber ein festes Dach? Im Haus Erne findest du gemütliche Doppelzimmer und voll ausgestattete Ferienwohnungen für zwei bis vier Personen.",
    items: [
      { name: "Ferienwohnung Nr. 8", kind: "für 2 Personen", text: "Wohnraum mit Doppelbett, Dusche/WC, voll ausgestattete Küche und eigener Balkon — gemütlich für zwei.", image: { src: `${IMG}/gallery-92518a619d.webp`, alt: "Wohnraum der Ferienwohnung Nr. 8 mit Küche im Haus Erne" }, priceFrom: 76, features: ["Doppelbett", "Küche & Balkon", "Kabel-TV & WLAN"] },
      { name: "Ferienwohnung Nr. 6", kind: "für 4 Personen", text: "Wohnraum mit Doppelbett plus separates Schlafzimmer, große Küche mit Backofen und WLAN im ganzen Haus.", image: { src: `${IMG}/gallery-e6217f4c77.webp`, alt: "Ferienwohnung Nr. 6 mit Wohn- und Essbereich im Haus Erne" }, priceFrom: 140, features: ["2 Schlafbereiche", "Küche mit Backofen", "Kabel-TV & WLAN"] },
      { name: "Doppelzimmer im Haus Erne", kind: "für 2 Personen", text: "Helles Zimmer mit Doppelbett und Dusche/WC — ideal für einen kurzen Aufenthalt im Klostertal.", image: { src: `${IMG}/gallery-db8f53a891.webp`, alt: "Helles Doppelzimmer im Haus Erne" }, priceFrom: 110, priceNote: "Nebensaison ab € 55 / Person / Nacht, Doppelzimmer für 2 Personen", features: ["Doppelbett", "Dusche/WC", "Kabel-TV"] },
    ],
  },

  kinder: {
    heading: "Für die jungen Gäste",
    intro: "Gleich um die Ecke wartet jede Menge Auslauf — ideal für einen Urlaub, an dem die Kinder den ganzen Tag draußen sein dürfen.",
    features: [
      { title: "Beheiztes Schwimmbad nebenan", text: "Das öffentliche, geheizte Freibad Dalaas liegt nur einen Katzensprung vom Platz entfernt.", image: { src: `${IMG}/gallery-539050e1da.webp`, alt: "Beheiztes Freibad Dalaas in der Nähe des Camping Erne" } },
      { title: "Spielplatz um die Ecke", text: "Spielplätze und Fußballwiese beim Schwimmbad und bei der Volksschule sorgen für Abwechslung.", image: { src: `${IMG}/gallery-ce3cdbbd13.webp`, alt: "Spielplatz mit Kletterturm und Rutsche bei Dalaas" } },
    ],
  },

  aktivitaeten: {
    heading: "Das Klostertal aktiv erleben",
    intro: "Wandern, Radeln, im Winter die Pisten — rund um Dalaas liegt dir die ganze Vorarlberger Bergwelt zu Füßen.",
    items: [
      { title: "Wandern in der Bergwelt", text: "Direkt von Dalaas führen Wege hinauf zu Almen, Wasserfällen und weiten Bergpanoramen.", image: { src: `${IMG}/activity-0895f39e56.webp`, alt: "Bergwelt mit Wasserfall im Klostertal bei Dalaas" } },
      { title: "Spaziergänge an der Alfenz", text: "Entlang des Alfenzbachs erkundest du das Tal bei gemütlichen Spaziergängen direkt am Wasser.", image: { src: `${IMG}/gallery-b6ade8da96.webp`, alt: "Alfenzbach im grünen Tal bei Dalaas" } },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Klostertal",
    modes: [
      { title: "Mit dem Auto", text: "Über die Arlberg Schnellstraße S16 bis Dalaas, dann der Klostertalerstraße bis zum Platz folgen." },
      { title: "Mit der Bahn", text: "Der Bahnhof Dalaas an der Arlbergbahn liegt nur wenige Minuten entfernt — der Platz ist gut zu Fuß erreichbar." },
      { title: "Vom Flughafen", text: "Friedrichshafen und Innsbruck erreichst du jeweils in rund eineinhalb Stunden mit dem Auto." },
    ],
  },

  galerie: {
    heading: "Wohnen bei Familie Erne",
    headingEmphasis: "Familie Erne",
    intro: "Neben dem Campingplatz vermietet Familie Erne gemütliche Zimmer und Ferienwohnungen im Haus — ein paar Eindrücke.",
    tag: "Zimmer & Ferienwohnungen",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-e43fe97c34.webp`, alt: "Helles Doppelzimmer im Haus Erne" },
      { src: `${IMG}/gallery-42ec07b4a9.webp`, alt: "Doppelzimmer mit Balkon im Haus Erne" },
      { src: `${IMG}/gallery-9c03967046.webp`, alt: "Gedeckter Esstisch in der Ferienwohnung Nr. 6" },
      { src: `${IMG}/gallery-26142bc381.webp`, alt: "Gemütlicher Wohnraum der Ferienwohnung Nr. 8" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "Stellplatz",
    intro: "Sag uns Zeitraum und Personen — Familie Erne meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preise Nebensaison · Stellplatz inkl. 2 Personen · zzgl. Ortstaxe € 2,80 p. P./Nacht (ab 15 J.) · Strom nach Verbrauch",
    highlight: { title: "Mittendrin", text: "Vom Stellplatz sind es nur wenige Schritte ins Dorf und zum Lebensmittelgeschäft." },
    categories: [
      { id: "stellplatz", label: "Stellplatz Wohnwagen/Zelt", perNight: 33, perExtraGuest: 9.8 },
      { id: "wohnmobil", label: "Stellplatz Wohnmobil", perNight: 32.30, perExtraGuest: 9.8 },
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
      { label: "Aufenthaltsraum", href: "#camping" },
    ]},
    { label: "Wohnen", href: "#mobilheime" },
    { label: "Kinder", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default erneDalaas;
