import type { Metadata } from "next";
import { affiliateSites } from "@/lib/affiliates";
import SiteCard from "@/components/SiteCard";
import { buildMetadata } from "@/lib/seo";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = buildMetadata({
  title: "Best Webcam Sites 2026 — Ranked & Compared",
  description:
    "The best live webcam sex sites in 2026 ranked by free content, model variety, reliability and value. Chaturbate, BongaCams, Stripchat and more.",
  path: "/best-webcam-sites",
});

export default function BestWebcamSitesPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Rankings · 2026
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Best Webcam Sites Right Now
        </h1>
        <p className="max-w-2xl text-muted">
          Side-by-side comparison of the top live cam platforms. Focused on
          free public rooms, private show quality, and overall experience —
          not hype.
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-card-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-card text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3 font-semibold">Rank</th>
              <th className="px-4 py-3 font-semibold">Site</th>
              <th className="px-4 py-3 font-semibold">Score</th>
              <th className="px-4 py-3 font-semibold">Best for</th>
              <th className="px-4 py-3 font-semibold">Free?</th>
              <th className="px-4 py-3 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {affiliateSites.map((site, i) => (
              <tr
                key={site.id}
                className="border-t border-card-border hover:bg-card/60"
              >
                <td className="px-4 py-3 font-bold text-accent">#{i + 1}</td>
                <td className="px-4 py-3 font-semibold">{site.name}</td>
                <td className="px-4 py-3">{site.score}/10</td>
                <td className="px-4 py-3 text-muted">{site.bestFor}</td>
                <td className="px-4 py-3">
                  {site.freeToJoin ? (
                    <span className="text-success">Yes</span>
                  ) : (
                    "No"
                  )}
                </td>
                <td className="px-4 py-3">
                  <AffiliateCta slug={site.slug} label="Visit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {affiliateSites.map((site, i) => (
          <SiteCard key={site.id} site={site} rank={i + 1} />
        ))}
      </div>

      <section className="space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">
          How to choose a webcam site
        </h2>
        <p>
          Start with free public rooms to learn the interface. Move to private
          shows only when you know what you want. Compare token prices and
          refund policies before buying large packs. Mobile performance matters
          — test the site on your phone before spending.
        </p>
        <p>
          For detailed breakdowns see our{" "}
          <a href="/chaturbate-review" className="text-accent">
            Chaturbate review
          </a>{" "}
          and{" "}
          <a href="/bongacams-review" className="text-accent">
            BongaCams review
          </a>
          .
        </p>
      </section>
    </article>
  );
}
