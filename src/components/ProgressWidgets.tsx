"use client";

import { getExam, passPercentFor } from "@/data/exams";
import type { Exam } from "@/data/types";
import {
  resetExamProgress,
  scorePercent,
  setWatched,
  useExamProgress,
  type ExamProgress,
} from "@/lib/progress";

export function isChapterPassed(exam: Exam, progress: ExamProgress, slug: string): boolean {
  const score = progress.tests[slug];
  return score !== undefined && scorePercent(score) >= passPercentFor(exam);
}

function requireExam(examId: string): Exam {
  const exam = getExam(examId);
  if (!exam) throw new Error(`Unknown exam "${examId}"`);
  return exam;
}

export function ChapterStatusBadge({ examId, slug }: { examId: string; slug: string }) {
  const exam = requireExam(examId);
  const progress = useExamProgress(examId);
  const score = progress.tests[slug];

  if (score) {
    const passed = scorePercent(score) >= passPercentFor(exam);
    return (
      <span
        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
          passed ? "bg-success-soft text-success" : "bg-warning-soft text-warning"
        }`}
      >
        {passed ? "✓ " : ""}
        {score.best}/{score.total}
      </span>
    );
  }
  if (progress.watched[slug]) {
    return (
      <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
        Watched
      </span>
    );
  }
  return null;
}

export function ExamProgressBar({ examId }: { examId: string }) {
  const exam = requireExam(examId);
  const progress = useExamProgress(examId);
  const passedCount = exam.chapters.filter((chapter) => isChapterPassed(exam, progress, chapter.slug)).length;
  const percent = exam.chapters.length > 0 ? Math.round((passedCount / exam.chapters.length) * 100) : 0;
  return (
    <div className="flex items-center gap-2 text-xs text-muted">
      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-surface-muted" aria-hidden>
        <div className="h-full rounded-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
      <span className="tabular-nums">
        {passedCount}/{exam.chapters.length} chapters passed
      </span>
    </div>
  );
}

export function ProgressSummary({ examId }: { examId: string }) {
  const exam = requireExam(examId);
  const progress = useExamProgress(examId);
  const total = exam.chapters.length;
  const watchedCount = exam.chapters.filter((chapter) => progress.watched[chapter.slug]).length;
  const passedCount = exam.chapters.filter((chapter) => isChapterPassed(exam, progress, chapter.slug)).length;
  const percent = total > 0 ? Math.round((passedCount / total) * 100) : 0;
  const hasProgress =
    watchedCount > 0 || Object.keys(progress.tests).length > 0 || progress.mock || Object.keys(progress.practice).length > 0;

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold">Your {exam.code} progress</h2>
        <span className="text-2xl font-semibold tabular-nums">{percent}%</span>
      </div>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-surface-muted"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Chapters passed"
      >
        <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${percent}%` }} />
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <dt className="text-xs text-muted">Watched</dt>
          <dd className="font-semibold tabular-nums">
            {watchedCount}/{total}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Tests passed</dt>
          <dd className="font-semibold tabular-nums">
            {passedCount}/{total}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Best mock</dt>
          <dd className="font-semibold tabular-nums">{progress.mock ? `${progress.mock.bestPercent}%` : "–"}</dd>
        </div>
      </dl>
      {hasProgress ? (
        <button
          type="button"
          onClick={() => {
            if (window.confirm(`Reset all ${exam.code} watched chapters and test scores?`)) resetExamProgress(examId);
          }}
          className="mt-4 text-xs text-muted underline-offset-2 hover:text-danger hover:underline"
        >
          Reset {exam.code} progress
        </button>
      ) : (
        <p className="mt-4 text-xs text-muted">
          Progress is saved in this browser. A chapter counts as done when you score {passPercentFor(exam)}% or more
          in its test.
        </p>
      )}
    </div>
  );
}

export function WatchedToggle({ examId, slug }: { examId: string; slug: string }) {
  const progress = useExamProgress(examId);
  const watched = Boolean(progress.watched[slug]);
  return (
    <button
      type="button"
      onClick={() => setWatched(examId, slug, !watched)}
      aria-pressed={watched}
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
        watched
          ? "border-accent bg-accent-soft text-accent"
          : "border-border bg-surface text-foreground hover:bg-surface-muted"
      }`}
    >
      <span
        aria-hidden
        className={`grid h-4 w-4 place-items-center rounded border text-[10px] ${
          watched ? "border-accent bg-accent text-accent-foreground" : "border-muted"
        }`}
      >
        {watched ? "✓" : ""}
      </span>
      {watched ? "Marked as watched" : "Mark video as watched"}
    </button>
  );
}

export function BestScore({ examId, slug }: { examId: string; slug: string }) {
  const exam = requireExam(examId);
  const progress = useExamProgress(examId);
  const score = progress.tests[slug];
  if (!score) return <p className="text-sm text-muted">Not attempted yet</p>;
  const percent = scorePercent(score);
  const passed = percent >= passPercentFor(exam);
  return (
    <p className="text-sm">
      Best score:{" "}
      <span className={`font-semibold ${passed ? "text-success" : "text-warning"}`}>
        {score.best}/{score.total} ({percent}%)
      </span>
      <span className="text-muted">
        {" "}
        · {score.attempts} attempt{score.attempts === 1 ? "" : "s"}
      </span>
    </p>
  );
}
