import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Live Cam Categories — Browse Webcam Niches",
  description:
    "Browse live webcam categories: MILF, Asian, couples, mature, Italian, South Africa and more.",
  path: "/cams",
});

export default function CamsIndexPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-black tracking-tight">Cam Categories</h1>
        <p className="max-w-2xl text-muted">
          Choose a niche to see recommended platforms and free live options.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/cams/${cat.slug}`}
            className="rounded-2xl border border-card-border bg-card p-5 transition hover:border-accent"
          >
            <h2 className="mb-2 text-lg font-bold">{cat.name}</h2>
            <p className="text-sm text-muted line-clamp-3">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
