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

  const lastModified = new Date("2026-11-01");

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" || path === "/best-webcam-sites" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${siteUrl}/cams/${c.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...categoryEntries];
}
