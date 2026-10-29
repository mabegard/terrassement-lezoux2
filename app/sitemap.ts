import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/entreprise";
import { METIERS } from "@/lib/metiers";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/prestations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...METIERS.map((m) => ({
      url: `${SITE_URL}/prestations/${m.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/galerie`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/avis`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/mentions-legales`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
