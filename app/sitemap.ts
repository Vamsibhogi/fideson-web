import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";
import { USE_CASES } from "@/data/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/pricing", priority: 0.9, freq: "weekly" },
    { path: "/features", priority: 0.9, freq: "monthly" },
    { path: "/manychat-alternative", priority: 0.8, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
    { path: "/data-deletion", priority: 0.2, freq: "yearly" },
    { path: "/delete-my-data", priority: 0.2, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  for (const u of USE_CASES) {
    entries.push({
      url: `${SITE.url}/instagram-automation/${u.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
