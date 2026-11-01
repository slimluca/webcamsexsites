import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for WebcamSexSites.com",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-4 text-sm leading-relaxed text-muted">
      <h1 className="text-3xl font-black text-foreground">Privacy Policy</h1>
      <p>Last updated: October 31, 2026</p>
      <p>
        WebcamSexSites.com respects your privacy. We may collect basic analytics
        (pages visited, device type, approximate location) to improve the site.
        Age confirmation is stored locally in your browser.
      </p>
      <p>
        Affiliate partners may set cookies when you click outbound links. Review
        their policies on their sites. We do not sell personal information.
      </p>
      <p>
        Contact: replace with your real contact email before going live.
      </p>
    </article>
  );
}
