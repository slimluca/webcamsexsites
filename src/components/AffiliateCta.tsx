import Link from "next/link";

type Props = {
  slug: string;
  label?: string;
  className?: string;
};

export default function AffiliateCta({
  slug,
  label = "Visit Site",
  className = "",
}: Props) {
  return (
    <Link
      href={`/go/${slug}`}
      rel="sponsored noopener noreferrer"
      target="_blank"
      className={`inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover ${className}`}
    >
      {label}
    </Link>
  );
}
