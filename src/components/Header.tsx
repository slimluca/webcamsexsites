import Link from "next/link";

const nav = [
  { href: "/best-webcam-sites", label: "Best Sites" },
  { href: "/cams", label: "Categories" },
  { href: "/chaturbate-review", label: "Chaturbate" },
  { href: "/bongacams-review", label: "BongaCams" },
  { href: "/free-webcam-sex-sites", label: "Free Cams" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-black text-white">
            WS
          </span>
          <span className="hidden text-sm font-bold tracking-tight sm:inline">
            Webcam Sex Sites
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted transition hover:bg-card hover:text-foreground sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
