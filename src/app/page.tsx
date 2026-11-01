import Link from "next/link";
import { affiliateSites } from "@/lib/affiliates";
import { categories } from "@/lib/categories";
import SiteCard from "@/components/SiteCard";
import AffiliateCta from "@/components/AffiliateCta";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-3xl border border-card-border bg-gradient-to-br from-card via-background to-accent-soft px-6 py-12 sm:px-10">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Updated for 2026 · 18+
          </p>
          <h1 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Best Webcam Sex Sites — Honest Reviews
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted sm:text-lg">
            Compare top live cam platforms side by side. Free public rooms,
            private shows, token systems, and which sites actually convert for
            real users.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/best-webcam-sites"
              className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              See top ranked sites
            </Link>
            <Link
              href="/free-webcam-sex-sites"
              className="rounded-xl border border-card-border px-6 py-3 text-sm font-semibold transition hover:border-zinc-500"
            >
              Free webcam sites
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Top rated platforms</h2>
            <p className="mt-1 text-sm text-muted">
              Ranked by variety, free content, reliability, and user experience.
            </p>
          </div>
          <Link
            href="/best-webcam-sites"
            className="hidden text-sm font-medium text-accent sm:inline"
          >
            Full ranking →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {affiliateSites.map((site, i) => (
            <SiteCard key={site.id} site={site} rank={i + 1} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">Browse by category</h2>
        <p className="mb-6 text-sm text-muted">
          Jump into niche live cam pages optimised for search intent.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/cams/${cat.slug}`}
              className="rounded-xl border border-card-border bg-card px-4 py-4 text-center text-sm font-semibold transition hover:border-accent hover:bg-accent-soft"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-card-border bg-card p-6 sm:p-8">
        <h2 className="mb-3 text-xl font-bold">Quick picks</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-card-border p-4">
            <p className="mb-1 text-sm font-semibold">Best overall free cams</p>
            <p className="mb-3 text-xs text-muted">
              Huge public rooms and constant activity.
            </p>
            <AffiliateCta slug="chaturbate" label="Open Chaturbate" />
          </div>
          <div className="rounded-xl border border-card-border p-4">
            <p className="mb-1 text-sm font-semibold">Strong for Europe</p>
            <p className="mb-3 text-xs text-muted">
              Great model quality and private show tools.
            </p>
            <AffiliateCta slug="bongacams" label="Open BongaCams" />
          </div>
        </div>
      </section>

      <section className="prose-invert max-w-none space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">
          How we rank webcam sites
        </h2>
        <p>
          We score platforms on free content quality, model variety, stream
          reliability, payment clarity, mobile experience, and support. Rankings
          are editorial and updated as platforms change. Affiliate relationships
          do not buy higher placement.
        </p>
        <p>
          Always use platforms that verify models are 18+. Read our{" "}
          <Link href="/affiliate-disclosure" className="text-accent">
            affiliate disclosure
          </Link>{" "}
          for how we make money.
        </p>
      </section>
    </div>
  );
}
