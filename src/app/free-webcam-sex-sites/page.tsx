import type { Metadata } from "next";
import { affiliateSites } from "@/lib/affiliates";
import { buildMetadata } from "@/lib/seo";
import AffiliateCta from "@/components/AffiliateCta";
import SiteCard from "@/components/SiteCard";

export const metadata: Metadata = buildMetadata({
  title: "Free Webcam Sex Sites — Watch Live Without Paying",
  description:
    "Best free webcam sex sites with real public rooms. No signup required to watch on many platforms. Compare free live cam options for 2026.",
  path: "/free-webcam-sex-sites",
});

export default function FreeWebcamSitesPage() {
  const freeSites = affiliateSites.filter((s) => s.freeToJoin);

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Free to watch
        </p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Free Webcam Sex Sites
        </h1>
        <p className="max-w-2xl text-muted">
          These platforms let you watch live public rooms for free. Tips and
          private shows are optional. Below are the strongest free options we
          recommend.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {freeSites.map((site, i) => (
          <SiteCard key={site.id} site={site} rank={i + 1} />
        ))}
      </div>

      <section className="space-y-3 text-sm leading-relaxed text-muted">
        <h2 className="text-xl font-bold text-foreground">
          What “free” actually means
        </h2>
        <p>
          Free usually means public chat rooms. Models set goals and tip menus;
          viewers who tip get more interaction. Private shows cost tokens or
          per-minute rates. You can use every site below without paying if you
          only watch public rooms.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <AffiliateCta slug="chaturbate" label="Free on Chaturbate" />
          <AffiliateCta slug="bongacams" label="Free on BongaCams" />
        </div>
      </section>
    </article>
  );
}
