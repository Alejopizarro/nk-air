import { SITE_CONFIG } from "./config";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.province,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    areaServed: [
      "Viladecans",
      "Castelldefels",
      "L'Hospitalet de Llobregat",
      "Gavà",
      "El Prat de Llobregat",
      "Cornellà de Llobregat",
      "Sant Boi de Llobregat",
      "Begues",
      "Barcelona",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    priceRange: "€€",
    image: `${SITE_CONFIG.url}/og-image.jpg`,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: "Baix Llobregat, Barcelona",
    url,
  };
}
