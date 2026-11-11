import Link from "next/link";
import {
  chapterDurationSeconds,
  chapterHref,
  examHref,
  formatDuration,
  getModuleChapters,
} from "@/data/exams";
import { loadQuestionBank } from "@/data/exams/questions";
import type { Exam } from "@/data/types";
import { ChapterStatusBadge } from "./ProgressWidgets";

export default async function ModuleList({ exam }: { exam: Exam }) {
  const bank = await loadQuestionBank(exam.id);
  return (
    <div className="flex flex-col gap-6">
      {exam.modules.map((courseModule) => {
        const moduleChapters = getModuleChapters(exam, courseModule.number);
        return (
          <section
            key={courseModule.number}
            aria-labelledby={`module-${courseModule.number}`}
            className="overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-5 py-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  Module {courseModule.number}
                </p>
                <h2 id={`module-${courseModule.number}`} className="text-lg font-semibold">
                  {courseModule.title}
                </h2>
              </div>
              <p className="text-sm text-muted">
                {courseModule.marks} marks · {moduleChapters.length} chapters
              </p>
            </header>
            <ol className="divide-y divide-border">
              {moduleChapters.map((chapter) => (
                <li key={chapter.slug}>
                  <Link
                    href={chapterHref(exam, chapter)}
                    className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-surface-muted"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-muted text-sm font-semibold tabular-nums">
                      {chapter.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{chapter.title}</span>
                      <span className="block text-xs text-muted">
                        {chapter.videos.length > 1 ? `${chapter.videos.length} videos · ` : ""}
                        {chapter.videos.length > 0 ? `${formatDuration(chapterDurationSeconds(chapter))} · ` : ""}
                        {(bank[chapter.number] ?? []).length}-question test
                      </span>
                    </span>
                    <ChapterStatusBadge examId={exam.id} slug={chapter.slug} />
                  </Link>
                </li>
              ))}
              {courseModule.caseStudyVideo && (
                <li>
                  <Link
                    href={examHref(exam, `/videos/${courseModule.caseStudyVideo.id}`)}
                    className="flex items-center gap-4 px-5 py-3 transition-colors hover:bg-surface-muted"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-xs font-semibold text-accent">
                      CS
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">Module {courseModule.number} case studies</span>
                      <span className="block text-xs text-muted">
                        {formatDuration(courseModule.caseStudyVideo.durationSeconds)} · worked caselets
                      </span>
                    </span>
                  </Link>
                </li>
              )}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
