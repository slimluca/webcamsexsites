import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for WebcamSexSites.com",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-black text-foreground">Terms of Use</h1>
      <p>Last updated: October 31, 2026</p>
      <p>
        This site is for adults only (18+ or age of majority in your
        jurisdiction). By using the site you confirm you meet that requirement.
      </p>
      <p>
        Content is informational and for entertainment. We are not responsible
        for third-party platforms linked from this site. Affiliate commissions
        may be earned when you sign up or spend through our links.
      </p>
      <p>
        We may update these terms at any time. Continued use means acceptance of
        the current terms.
      </p>
    </article>
  );
}
