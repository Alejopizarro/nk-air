export const SITE_CONFIG = {
  name: "NK Air",
  tagline: "Climatización · Aerotermia · Fontanería",
  description:
    "Especialistas en instalación y reparación de climatización, aerotermia y fontanería en Viladecans y el Baix Llobregat. Más de 25 años de experiencia.",
  url: "https://www.nkair.es",
  phone: "+34600000000",
  phoneDisplay: "600 000 000",
  whatsapp: "34600000000",
  whatsappMessage:
    "Hola, me gustaría pedir un presupuesto para un servicio de NK Air.",
  email: "info@nkair.es",
  address: {
    street: "Carretera Barcelona 33",
    city: "Viladecans",
    province: "Barcelona",
    postalCode: "08840",
    country: "España",
  },
  coordinates: {
    latitude: 41.3103,
    longitude: 2.0123,
  },
  schedule: {
    days: "Lunes – Viernes",
    hours: "08:00 – 19:00",
  },
  social: {
    google: "",
    facebook: "",
    instagram: "",
  },
} as const;

export const ZONES = [
  { name: "Viladecans", slug: "viladecans" },
  { name: "Castelldefels", slug: "castelldefels" },
  { name: "L'Hospitalet de Llobregat", slug: "lhospitalet" },
  { name: "Gavà", slug: null },
  { name: "El Prat de Llobregat", slug: null },
  { name: "Cornellà de Llobregat", slug: null },
  { name: "Sant Boi de Llobregat", slug: null },
  { name: "Begues", slug: null },
  { name: "Barcelona", slug: null },
] as const;

export const SERVICES = [
  {
    name: "Aire Acondicionado",
    slug: "climatizacion",
    shortDesc:
      "Instalación, reparación y mantenimiento de splits, multisplits y sistemas de conductos para hogares y negocios.",
  },
  {
    name: "Aerotermia",
    slug: "aerotermia",
    shortDesc:
      "La alternativa sostenible para climatizar tu hogar y tener agua caliente. Ahorra hasta un 70% en energía.",
  },
  {
    name: "Fontanería",
    slug: "fontaneria",
    shortDesc:
      "Instalaciones, reparaciones y mantenimiento de fontanería para viviendas y locales comerciales.",
  },
  {
    name: "Cámaras Frigoríficas",
    slug: "camaras-frigorificas",
    shortDesc:
      "Instalación y mantenimiento de cámaras frigoríficas y equipos de frío para uso comercial e industrial.",
  },
] as const;

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(
    message ?? SITE_CONFIG.whatsappMessage
  );
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`;
}
