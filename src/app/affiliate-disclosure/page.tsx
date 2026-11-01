import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: "How WebcamSexSites.com earns commissions from affiliate links.",
  path: "/affiliate-disclosure",
});

export default function DisclosurePage() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-black text-foreground">
        Affiliate Disclosure
      </h1>
      <p>
        WebcamSexSites.com participates in affiliate programs including (but not
        limited to) programs operated by major live cam platforms. If you click
        a link and register or spend, we may earn a commission at no extra cost
        to you.
      </p>
      <p>
        Rankings and reviews are editorial. Affiliate relationships do not
        guarantee higher placement. Always do your own research before spending
        money on any platform.
      </p>
    </article>
  );
}
