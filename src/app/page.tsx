import Link from "next/link";
import { ExamProgressBar } from "@/components/ProgressWidgets";
import { examHref, exams } from "@/data/exams";

export default function ExamDirectoryPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:py-14">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-accent">NISM Investment Adviser certifications</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Prepare for X-A and X-B in one place.
        </h1>
        <p className="mt-3 text-muted">
          SEBI-registered investment advisers need both NISM Series X-A (Level 1) and X-B (Level 2). Pick a
          certification to study chapter by chapter, take practice tests and sit timed mock exams. Your progress is
          tracked separately for each one.
        </p>
      </section>

      <section aria-label="Certifications" className="grid gap-5 md:grid-cols-2">
        {exams.map((exam) => {
          const isAvailable = exam.status === "available";
          return (
            <article
              key={exam.id}
              className={`flex flex-col gap-4 rounded-2xl border bg-surface p-6 ${
                isAvailable ? "border-border" : "border-dashed border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">NISM Series {exam.code}</p>
                  <h2 className="mt-1 text-xl font-semibold">{exam.title}</h2>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    isAvailable ? "bg-success-soft text-success" : "bg-warning-soft text-warning"
                  }`}
                >
                  {isAvailable ? "Available" : "Coming soon"}
                </span>
              </div>
              <p className="text-sm text-muted">{exam.tagline}</p>
              {isAvailable && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  <li>{exam.modules.length} modules</li>
                  <li>{exam.chapters.length} chapters</li>
                  {exam.mock && <li>Timed mock exam</li>}
                </ul>
              )}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                {isAvailable ? <ExamProgressBar examId={exam.id} /> : <span />}
                <Link
                  href={examHref(exam)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                    isAvailable
                      ? "bg-accent text-accent-foreground hover:bg-accent-strong"
                      : "border border-border text-muted hover:bg-surface-muted"
                  }`}
                >
                  {isAvailable ? `Open ${exam.code} →` : "Learn more"}
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
