import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

const base = SITE_CONFIG.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/sobre-nosotros`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/contacto`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = [
    "climatizacion",
    "aerotermia",
    "fontaneria",
    "camaras-frigorificas",
  ].map((slug) => ({
    url: `${base}/servicios/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const zoneRoutes = ["viladecans", "castelldefels", "lhospitalet"].map(
    (slug) => ({
      url: `${base}/zonas/${slug}`,
      priority: 0.85,
      changeFrequency: "monthly" as const,
    })
  );

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes].map((route) => ({
    ...route,
    lastModified: now,
  }));
}
