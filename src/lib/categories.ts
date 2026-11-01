export type Category = {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
};

export const categories: Category[] = [
  {
    slug: "milf",
    name: "MILF",
    title: "MILF Live Webcam Shows",
    description:
      "Watch mature MILF models live. Free public rooms and private options on top-rated cam platforms.",
    keywords: ["milf webcam", "milf live cams", "mature milf cams"],
  },
  {
    slug: "asian",
    name: "Asian",
    title: "Asian Live Webcam Shows",
    description:
      "Browse Asian cam models online now. Free chat rooms and HD private shows.",
    keywords: ["asian webcam", "asian live cams", "asian cam girls"],
  },
  {
    slug: "couples",
    name: "Couples",
    title: "Couples Live Webcam Shows",
    description:
      "Live couple cam shows with interactive tipping. Free previews and private sessions.",
    keywords: ["couples webcam", "couple live cams", "couple sex cams"],
  },
  {
    slug: "mature",
    name: "Mature",
    title: "Mature Live Webcam Shows",
    description:
      "Mature and experienced models live on cam. Free rooms and private shows available.",
    keywords: ["mature webcam", "mature live cams", "older cam models"],
  },
  {
    slug: "trans",
    name: "Trans",
    title: "Trans Live Webcam Shows",
    description:
      "Trans models live online. Free public chat and private show options.",
    keywords: ["trans webcam", "trans live cams", "transgender cams"],
  },
  {
    slug: "fetish",
    name: "Fetish",
    title: "Fetish Live Webcam Shows",
    description:
      "Fetish and kink live cam shows across major platforms. Explore free rooms and private sessions.",
    keywords: ["fetish webcam", "kink live cams", "fetish cam shows"],
  },
  {
    slug: "italian",
    name: "Italian",
    title: "Italian Live Webcam Shows",
    description:
      "Italian-speaking models and Italy-focused live cams. Free chat and private options.",
    keywords: ["italian webcam", "webcam italia", "live cam italiane"],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    title: "South Africa Live Webcam Shows",
    description:
      "South African and African live cam shows. Free rooms and private sessions on top sites.",
    keywords: [
      "south africa webcam",
      "webcam sex south africa",
      "african live cams",
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
