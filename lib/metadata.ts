import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image = "/og-image.jpg",
}: PageMetaOptions): Metadata {
  const canonical = `${SITE_CONFIG.url}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`;

  return {
    title: `${title} | NK Air`,
    description,
    keywords: [
      "climatización Viladecans",
      "aire acondicionado Baix Llobregat",
      "aerotermia Barcelona",
      "fontanería Viladecans",
      ...keywords,
    ],
    alternates: { canonical },
    openGraph: {
      title: `${title} | NK Air`,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NK Air`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
