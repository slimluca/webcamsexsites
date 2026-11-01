import type { Metadata } from "next";
import { getSiteBySlug } from "@/lib/affiliates";
import { buildMetadata } from "@/lib/seo";
import AffiliateCta from "@/components/AffiliateCta";

const site = getSiteBySlug("chaturbate")!;

export const metadata: Metadata = buildMetadata({
  title: "Chaturbate Review 2026 — Pros, Cons & Verdict",
  description:
    "Honest Chaturbate review: free public shows, tokens, mobile app, pros and cons. Is Chaturbate still the best free live cam site in 2026?",
  path: "/chaturbate-review",
});

export default function ChaturbateReviewPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Review · Score {site.score}/10
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Chaturbate Review (2026)
        </h1>
        <p className="text-muted">{site.tagline}</p>
        <AffiliateCta slug="chaturbate" label="Visit Chaturbate" />
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
          Chaturbate remains one of the largest free live cam platforms. Public
          rooms are free to watch; models earn through tips and private shows.
          The catalogue is enormous, which is both the main strength and a
          source of noise for new users.
        </p>
        <h2 className="text-xl font-bold text-foreground">Tokens & pricing</h2>
        <p>
          Interaction runs on tokens. Pack prices vary by region and promotions.
          Start with a small pack until you know how much you use. Always check
          the current price list inside the site before buying.
        </p>
        <h2 className="text-xl font-bold text-foreground">Who it is for</h2>
        <p>
          Best for users who want free public content first, high model
          variety, and an active tipping culture. If you prefer a quieter,
          more curated European feel, compare with BongaCams.
        </p>
        <h2 className="text-xl font-bold text-foreground">Verdict</h2>
        <p>
          Chaturbate earns our top overall score for scale, free content, and
          reliability. It is the default recommendation for most first-time
          users in 2026.
        </p>
      </section>

      <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6 text-center">
        <p className="mb-4 text-sm font-medium">
          Ready to try Chaturbate? Free to join and watch public rooms.
        </p>
        <AffiliateCta slug="chaturbate" label="Join Chaturbate" />
      </div>
    </article>
  );
}
