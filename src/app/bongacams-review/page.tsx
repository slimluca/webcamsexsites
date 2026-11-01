import type { Metadata } from "next";
import { getSiteBySlug } from "@/lib/affiliates";
import { buildMetadata } from "@/lib/seo";
import AffiliateCta from "@/components/AffiliateCta";

const site = getSiteBySlug("bongacams")!;

export const metadata: Metadata = buildMetadata({
  title: "BongaCams Review 2026 — Pros, Cons & Verdict",
  description:
    "Honest BongaCams review: free rooms, private shows, European model quality, tokens, pros and cons for 2026.",
  path: "/bongacams-review",
});

export default function BongaCamsReviewPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Review · Score {site.score}/10
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          BongaCams Review (2026)
        </h1>
        <p className="text-muted">{site.tagline}</p>
        <AffiliateCta slug="bongacams" label="Visit BongaCams" />
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-card-border bg-card p-5">
          <h2 className="mb-3 text-sm font-bold text-success">Pros</h2>
          <ul className="space-y-2 text-sm text-muted">
            {site.pros.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-card-border bg-card p-5">
          <h2 className="mb-3 text-sm font-bold text-accent">Cons</h2>
          <ul className="space-y-2 text-sm text-muted">
            {site.cons.map((c) => (
              <li key={c}>• {c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">Overview</h2>
        <p>
          BongaCams is a major live cam network with particularly strong reach
          in Europe. Free public shows sit alongside paid privates and a full
          token economy. Contests and promotions keep the homepage active.
        </p>
        <h2 className="text-xl font-bold text-foreground">Who it is for</h2>
        <p>
          A strong pick if you care about European model quality and private
          show tools. Users who want maximum global volume may still prefer
          Chaturbate as a primary site and use BongaCams as a second option.
        </p>
        <h2 className="text-xl font-bold text-foreground">Verdict</h2>
        <p>
          High score for quality and private features. Recommended alongside
          Chaturbate rather than as a strict either/or for most people.
        </p>
      </section>

      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center">
        <p className="mb-4 text-sm font-medium">
          Try BongaCams free — register and browse public rooms.
        </p>
        <AffiliateCta slug="bongacams" label="Join BongaCams" />
      </div>
    </article>
  );
}
