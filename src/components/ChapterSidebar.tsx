"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapterHref, getExam, getModuleChapters } from "@/data/exams";
import { useExamProgress } from "@/lib/progress";
import { isChapterPassed } from "./ProgressWidgets";

export default function ChapterSidebar({ examId }: { examId: string }) {
  const pathname = usePathname();
  const progress = useExamProgress(examId);
  const exam = getExam(examId);
  if (!exam) return null;

  return (
    <nav aria-label={`${exam.code} chapters`} className="flex flex-col gap-5 text-sm">
      {exam.modules.map((courseModule) => (
        <div key={courseModule.number}>
          <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted">
            Module {courseModule.number}
          </p>
          <ul className="mt-1.5 flex flex-col gap-0.5">
            {getModuleChapters(exam, courseModule.number).map((chapter) => {
              const href = chapterHref(exam, chapter);
              const isActive = pathname === href || pathname.startsWith(`${href}/`);
              const passed = isChapterPassed(exam, progress, chapter.slug);
              const watched = progress.watched[chapter.slug];
              return (
                <li key={chapter.slug}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors ${
                      isActive
                        ? "bg-accent-soft font-medium text-accent"
                        : "text-muted hover:bg-surface-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        passed ? "bg-success" : watched ? "bg-accent" : "bg-border"
                      }`}
                    />
                    <span className="truncate">
                      {chapter.number}. {chapter.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
