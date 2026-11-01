import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { affiliateSites } from "@/lib/affiliates";
import { buildMetadata } from "@/lib/seo";
import SiteCard from "@/components/SiteCard";
import AffiliateCta from "@/components/AffiliateCta";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return buildMetadata({
    title: cat.title,
    description: cat.description,
    path: `/cams/${cat.slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Category
        </p>
        <h1 className="text-3xl font-black tracking-tight">{cat.title}</h1>
        <p className="max-w-2xl text-muted">{cat.description}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <AffiliateCta slug="chaturbate" label="Watch free on Chaturbate" />
          <AffiliateCta slug="bongacams" label="Watch free on BongaCams" />
        </div>
      </header>

      <section>
        <h2 className="mb-4 text-xl font-bold">Recommended platforms</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {affiliateSites.map((site, i) => (
            <SiteCard key={site.id} site={site} rank={i + 1} />
          ))}
        </div>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">
          Finding {cat.name.toLowerCase()} shows
        </h2>
        <p>
          Use each platform&apos;s tag and search filters for &quot;{cat.name}
          &quot;. Public rooms are free; tip or go private only if you want more
          control. Always confirm you are on an 18+ verified platform.
        </p>
      </section>
    </article>
  );
}
