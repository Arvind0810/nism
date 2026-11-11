import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted">That exam, chapter or video doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
      >
        Browse certifications
      </Link>
    </div>
  );
}
