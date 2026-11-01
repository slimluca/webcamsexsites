import Link from "next/link";
import type { AffiliateSite } from "@/lib/affiliates";
import AffiliateCta from "./AffiliateCta";

export default function SiteCard({
  site,
  rank,
}: {
  site: AffiliateSite;
  rank?: number;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-card-border bg-card p-5 shadow-sm transition hover:border-zinc-600">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          {typeof rank === "number" && (
            <span className="mb-1 inline-block text-xs font-semibold text-accent">
              #{rank}
            </span>
          )}
          <h3 className="text-lg font-bold">{site.name}</h3>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-accent-soft">
          <span className="text-lg font-black text-accent">{site.score}</span>
          <span className="text-[10px] text-muted">/10</span>
        </div>
      </div>
      <ul className="mb-4 flex flex-wrap gap-1.5">
        {site.highlights.map((h) => (
          <li
            key={h}
            className="rounded-full border border-card-border px-2.5 py-0.5 text-[11px] text-muted"
          >
            {h}
          </li>
        ))}
      </ul>
      <p className="mb-4 text-xs text-muted">
        Best for: <span className="text-foreground">{site.bestFor}</span>
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-3">
        <AffiliateCta slug={site.slug} label={`Join ${site.name}`} />
        <Link
          href={`/${site.slug}-review`}
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          Full review
        </Link>
      </div>
    </article>
  );
}
