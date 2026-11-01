export type AffiliateSite = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  score: number;
  pros: string[];
  cons: string[];
  highlights: string[];
  /** Replace with your real affiliate URLs */
  affiliateUrl: string;
  freeToJoin: boolean;
  bestFor: string;
};

export const affiliateSites: AffiliateSite[] = [
  {
    id: "chaturbate",
    name: "Chaturbate",
    slug: "chaturbate",
    tagline: "Huge free public shows and active tipping culture",
    score: 9.4,
    pros: [
      "Massive model selection online 24/7",
      "Free public chat rooms",
      "Strong mobile experience",
      "Transparent token pricing",
    ],
    cons: ["Public rooms can feel crowded", "Token packs vary by region"],
    highlights: ["Free to watch", "HD streams", "Interactive tips"],
    affiliateUrl: "https://chaturbate.com/?track=YOUR_AFFILIATE_ID",
    freeToJoin: true,
    bestFor: "Users who want free shows and high variety",
  },
  {
    id: "bongacams",
    name: "BongaCams",
    slug: "bongacams",
    tagline: "Strong European traffic and flexible private options",
    score: 9.1,
    pros: [
      "Excellent model quality in EU geos",
      "Good private show tools",
      "Regular contests and promotions",
      "Solid free public content",
    ],
    cons: ["Interface can feel busy", "Fewer US-focused models than CB"],
    highlights: ["Free registration", "Token system", "Private shows"],
    affiliateUrl: "https://bongacams.com/?track=YOUR_AFFILIATE_ID",
    freeToJoin: true,
    bestFor: "European audiences and private-show fans",
  },
  {
    id: "stripchat",
    name: "Stripchat",
    slug: "stripchat",
    tagline: "Modern UI with VR and interactive toys",
    score: 8.9,
    pros: [
      "Clean modern design",
      "VR and interactive toy support",
      "Good free content layer",
      "Strong niche tags",
    ],
    cons: ["Token economy takes learning", "Premium features cost more"],
    highlights: ["VR cams", "Interactive toys", "HD"],
    affiliateUrl: "https://stripchat.com/?track=YOUR_AFFILIATE_ID",
    freeToJoin: true,
    bestFor: "Tech-forward users and niche browsing",
  },
];

export function getSiteBySlug(slug: string) {
  return affiliateSites.find((s) => s.slug === slug);
}

export function getAffiliateRedirect(slug: string) {
  const site = getSiteBySlug(slug);
  return site?.affiliateUrl ?? null;
}

/** Portfolio sites you already own — link from hub where relevant */
export const portfolioSites = [
  { name: "Sesso Chat", url: "https://sessochat.net", region: "IT" },
  { name: "Webcam Sex Site", url: "https://webcamsex.site", region: "EN" },
  { name: "Webcam Sex Me", url: "https://webcamsex.me", region: "EN" },
  { name: "Live Cam Italia", url: "https://livecamitalia.it", region: "IT" },
  { name: "Sesso Webcam", url: "https://sessowebcam.it", region: "IT" },
  { name: "Modelle Webcam", url: "https://modellewebcam.com", region: "IT" },
  { name: "Webcam Sex ZA", url: "https://webcamsex.co.za", region: "ZA" },
  { name: "Webcam Sex Africa", url: "https://webcamsex.africa", region: "AF" },
];
