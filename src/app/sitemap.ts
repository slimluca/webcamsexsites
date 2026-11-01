import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/best-webcam-sites",
    "/free-webcam-sex-sites",
    "/chaturbate-review",
    "/bongacams-review",
    "/chaturbate-vs-bongacams",
    "/cams",
    "/privacy",
    "/terms",
    "/affiliate-disclosure",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" || path === "/best-webcam-sites" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteUrl}/cams/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries];
}
