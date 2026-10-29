import type { MetadataRoute } from "next";

const BASE = "https://www.terrassement-lezoux.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/prestations`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/galerie`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/avis`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
