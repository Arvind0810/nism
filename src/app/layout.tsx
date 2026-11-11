import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { examHref, exams } from "@/data/exams";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NISM Prep: Investment Adviser certifications",
    template: "%s · NISM Prep",
  },
  description:
    "Chapter-by-chapter video lessons, practice tests and mock exams for the NISM Investment Adviser certifications (Series X-A and X-B).",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="sticky top-0 z-20 border-b border-border bg-surface/90 backdrop-blur print:hidden">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-xs font-bold text-accent-foreground">
                NP
              </span>
              <span className="hidden sm:inline">NISM Prep</span>
            </Link>
            <nav aria-label="Certifications" className="flex items-center gap-1 text-sm">
              <Link
                href="/"
                className="rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                All exams
              </Link>
              {exams.map((exam) => (
                <Link
                  key={exam.id}
                  href={examHref(exam)}
                  className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                >
                  {exam.code}
                  {exam.status === "coming-soon" && (
                    <span className="rounded bg-warning-soft px-1 text-[10px] font-semibold uppercase text-warning">
                      Soon
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-surface print:hidden">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted">
            <p>
              Independent study aid for NISM certification exams. Not affiliated with NISM or SEBI. Always check the
              latest official syllabus before your exam.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
