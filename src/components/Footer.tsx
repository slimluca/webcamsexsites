import Link from "next/link";
import { portfolioSites } from "@/lib/affiliates";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-card-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="mb-2 text-sm font-bold">Webcam Sex Sites</p>
          <p className="text-xs leading-relaxed text-muted">
            Independent reviews and comparisons of the best live webcam
            platforms. 18+ only. We may earn commissions from affiliate links.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Explore
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/best-webcam-sites" className="hover:text-accent">
                Best Webcam Sites
              </Link>
            </li>
            <li>
              <Link href="/free-webcam-sex-sites" className="hover:text-accent">
                Free Webcam Sites
              </Link>
            </li>
            <li>
              <Link href="/cams" className="hover:text-accent">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className="hover:text-accent">
                Affiliate Disclosure
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Network
          </p>
          <ul className="space-y-2 text-sm">
            {portfolioSites.slice(0, 5).map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-card-border px-4 py-4 text-center text-xs text-muted">
        <p>
          © 2026 WebcamSexSites.com ·{" "}
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>{" "}
          · All models are 18+
        </p>
      </div>
    </footer>
  );
}
