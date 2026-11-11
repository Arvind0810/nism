import type { Metadata } from "next";
import Link from "next/link";
import ModuleList from "@/components/ModuleList";
import { ProgressSummary } from "@/components/ProgressWidgets";
import { chapterHref, examHref, formatDuration, getAvailableExams } from "@/data/exams";
import { hasFormulaSheet } from "@/data/exams/formulas";
import { loadChapterQuestions } from "@/data/exams/questions";
import type { Exam } from "@/data/types";
import { allExamParams, requireExam } from "@/lib/examParams";

export function generateStaticParams() {
  return allExamParams();
}

export async function generateMetadata(props: PageProps<"/[exam]">): Promise<Metadata> {
  const exam = requireExam((await props.params).exam);
  return { title: `NISM ${exam.code} ${exam.title}`, description: exam.tagline };
}

export default async function ExamHomePage(props: PageProps<"/[exam]">) {
  const exam = requireExam((await props.params).exam);
  return exam.status === "available" ? <ExamOverview exam={exam} /> : <ComingSoon exam={exam} />;
}

async function ExamOverview({ exam }: { exam: Exam }) {
  const firstChapter = exam.chapters[0];
  const questionsPerChapter = firstChapter ? (await loadChapterQuestions(exam.id, firstChapter.number)).length : 0;
  const pattern = exam.pattern;
  const examFacts = pattern
    ? [
        { label: "Questions", value: `${pattern.mcqCount} MCQs + ${pattern.caseletCount} caselets` },
        { label: "Total marks", value: String(pattern.totalMarks) },
        { label: "Duration", value: `${pattern.durationMinutes / 60} hours` },
        { label: "Pass mark", value: `${pattern.passPercent}%` },
        { label: "Negative marking", value: `${pattern.negativeMarkingPercent}% per wrong answer` },
      ]
    : [];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-8 sm:py-10">
      <section className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Prepare chapter by chapter, then test yourself.
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            {exam.chapters.length} chapters across {exam.modules.length} modules, each with a video lesson and a{" "}
            {questionsPerChapter}-question practice test with explanations. Finish with a timed mock exam that uses
            NISM&apos;s negative marking.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {firstChapter && (
              <Link
                href={chapterHref(exam, firstChapter)}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
              >
                Start Chapter 1
              </Link>
            )}
            {exam.introVideo && (
              <Link
                href={examHref(exam, `/videos/${exam.introVideo.id}`)}
                className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-muted"
              >
                ▶ About the exam ({formatDuration(exam.introVideo.durationSeconds)})
              </Link>
            )}
            {hasFormulaSheet(exam.id) && (
              <Link
                href={examHref(exam, "/formulas")}
                className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-muted"
              >
                Formula sheet
              </Link>
            )}
            {exam.mock && (
              <Link
                href={examHref(exam, "/mock-test")}
                className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:bg-surface-muted"
              >
                Take a mock test
              </Link>
            )}
          </div>
        </div>
        <ProgressSummary examId={exam.id} />
      </section>

      {examFacts.length > 0 && (
        <section aria-labelledby="exam-pattern">
          <h2 id="exam-pattern" className="sr-only">
            Exam pattern
          </h2>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {examFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-border bg-surface px-4 py-3">
                <dt className="text-xs text-muted">{fact.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section aria-labelledby="syllabus" className="flex flex-col gap-4">
        <h2 id="syllabus" className="text-xl font-semibold">
          Syllabus
        </h2>
        <ModuleList exam={exam} />
      </section>

      {exam.practiceVideos.length > 0 && (
        <section aria-labelledby="practice" className="flex flex-col gap-4">
          <h2 id="practice" className="text-xl font-semibold">
            Final revision videos
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {exam.practiceVideos.map((video) => (
              <Link
                key={video.id}
                href={examHref(exam, `/videos/${video.id}`)}
                className="rounded-xl border border-border bg-surface p-4 transition-colors hover:bg-surface-muted"
              >
                <p className="font-medium">{video.title}</p>
                <p className="mt-1 text-xs text-muted">▶ {formatDuration(video.durationSeconds)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ComingSoon({ exam }: { exam: Exam }) {
  const available = getAvailableExams();
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-20 text-center">
      <span className="rounded-full bg-warning-soft px-3 py-1 text-xs font-semibold text-warning">Coming soon</span>
      <h1 className="text-3xl font-semibold tracking-tight">
        NISM {exam.code}: {exam.title}
      </h1>
      <p className="text-muted">{exam.tagline}</p>
      <p className="text-muted">
        Chapter videos, practice tests and a mock exam for {exam.code} are being prepared. Meanwhile, keep going with
        the other certifications.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {available.map((other) => (
          <Link
            key={other.id}
            href={examHref(other)}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
          >
            Continue {other.code} →
          </Link>
        ))}
      </div>
    </div>
  );
}
