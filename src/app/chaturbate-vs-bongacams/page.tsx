import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AffiliateCta from "@/components/AffiliateCta";

export const metadata: Metadata = buildMetadata({
  title: "Chaturbate vs BongaCams (2026) — Which Is Better?",
  description:
    "Chaturbate vs BongaCams compared: free content, model variety, private shows, tokens, and which platform wins for different users in 2026.",
  path: "/chaturbate-vs-bongacams",
});

const rows = [
  ["Free public rooms", "Excellent", "Excellent"],
  ["Model volume", "Highest", "Very high"],
  ["EU model strength", "Strong", "Excellent"],
  ["Private shows", "Good", "Excellent"],
  ["Mobile experience", "Strong", "Good"],
  ["Best for beginners", "Yes", "Also good"],
];

export default function ComparisonPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Comparison
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Chaturbate vs BongaCams
        </h1>
        <p className="text-muted">
          Both are top-tier free live cam platforms. The right choice depends on
          volume vs European focus and how you use private shows.
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-card-border">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-card text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-4 py-3">Factor</th>
              <th className="px-4 py-3">Chaturbate</th>
              <th className="px-4 py-3">BongaCams</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([factor, cb, bc]) => (
              <tr key={factor} className="border-t border-card-border">
                <td className="px-4 py-3 font-medium">{factor}</td>
                <td className="px-4 py-3 text-muted">{cb}</td>
                <td className="px-4 py-3 text-muted">{bc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">Our take</h2>
        <p>
          Pick <strong className="text-foreground">Chaturbate</strong> if you
          want maximum rooms online at any hour and a simple free-first
          experience. Pick{" "}
          <strong className="text-foreground">BongaCams</strong> if you lean
          European models and private-show features. Many users keep accounts on
          both.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <AffiliateCta slug="chaturbate" label="Try Chaturbate" />
        <AffiliateCta slug="bongacams" label="Try BongaCams" />
      </div>
    </article>
  );
}
