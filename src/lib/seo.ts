import type { Metadata } from "next";

const siteName = "Webcam Sex Sites";
const siteUrl = "https://webcamsexsites.com";
const defaultDescription =
  "Compare the best live webcam sex sites in 2026. Honest reviews of Chaturbate, BongaCams and more — free rooms, private shows, and clear ratings.";

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    other: {
      rating: "adult",
    },
  };
}

export { siteName, siteUrl, defaultDescription };
