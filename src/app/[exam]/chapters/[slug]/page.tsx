import type { Metadata } from "next";
import Link from "next/link";
import ChapterFormulas from "@/components/formulas/ChapterFormulas";
import { BestScore, WatchedToggle } from "@/components/ProgressWidgets";
import VideoEmbed from "@/components/VideoEmbed";
import {
  chapterDurationSeconds,
  chapterHref,
  examHref,
  formatDuration,
  getAdjacentChapters,
  getModule,
  passPercentFor,
} from "@/data/exams";
import { loadChapterQuestions } from "@/data/exams/questions";
import { chapterParams, requireChapter } from "@/lib/examParams";

export function generateStaticParams() {
  return chapterParams();
}

export async function generateMetadata(props: PageProps<"/[exam]/chapters/[slug]">): Promise<Metadata> {
  const params = await props.params;
  const { exam, chapter } = requireChapter(params.exam, params.slug);
  return { title: `${exam.code} Chapter ${chapter.number}: ${chapter.title}`, description: chapter.summary };
}

export default async function ChapterPage(props: PageProps<"/[exam]/chapters/[slug]">) {
  const params = await props.params;
  const { exam, chapter } = requireChapter(params.exam, params.slug);
  const courseModule = getModule(exam, chapter.moduleNumber);
  const { previous, next } = getAdjacentChapters(exam, chapter.slug);
  const questionCount = (await loadChapterQuestions(exam.id, chapter.number)).length;

  return (
    <article className="flex flex-col gap-8">
      <header>
        <p className="text-sm text-muted">
          <Link href={examHref(exam, "/chapters")} className="hover:text-foreground">
            {exam.code} chapters
          </Link>{" "}
          / Module {chapter.moduleNumber}: {courseModule?.title}
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="text-accent">Chapter {chapter.number}.</span> {chapter.title}
        </h1>
        <p className="mt-3 max-w-3xl text-muted">{chapter.summary}</p>
      </header>

      {chapter.videos.length > 0 && (
        <section aria-label="Video lessons" className="flex flex-col gap-6">
          {chapter.videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-2">
              {chapter.videos.length > 1 && (
                <h2 className="text-sm font-semibold">
                  {video.title}{" "}
                  <span className="font-normal text-muted">· {formatDuration(video.durationSeconds)}</span>
                </h2>
              )}
              <VideoEmbed video={video} />
            </div>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Total watch time {formatDuration(chapterDurationSeconds(chapter))} · Hindi audio
            </p>
            <WatchedToggle examId={exam.id} slug={chapter.slug} />
          </div>
        </section>
      )}

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <section aria-labelledby="topics" className="rounded-2xl border border-border bg-surface p-5">
          <h2 id="topics" className="font-semibold">
            Key topics
          </h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {chapter.topics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="chapter-test"
          className="flex flex-col gap-3 rounded-2xl border border-accent/40 bg-accent-soft p-5"
        >
          <h2 id="chapter-test" className="font-semibold">
            Chapter test
          </h2>
          <p className="text-sm text-muted">
            {questionCount} multiple-choice questions with explanations. Score {passPercentFor(exam)}% or more to
            complete this chapter.
          </p>
          <BestScore examId={exam.id} slug={chapter.slug} />
          <Link
            href={chapterHref(exam, chapter, "/test")}
            className="mt-1 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
          >
            Take the test
          </Link>
        </section>
      </div>

      <ChapterFormulas exam={exam} chapter={chapter} />

      <nav aria-label="Chapter navigation" className="grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
        {previous ? (
          <Link href={chapterHref(exam, previous)} className="rounded-xl border border-border bg-surface p-4 hover:bg-surface-muted">
            <span className="text-xs text-muted">← Previous</span>
            <span className="mt-0.5 block font-medium">
              {previous.number}. {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={chapterHref(exam, next)}
            className="rounded-xl border border-border bg-surface p-4 text-right hover:bg-surface-muted"
          >
            <span className="text-xs text-muted">Next →</span>
            <span className="mt-0.5 block font-medium">
              {next.number}. {next.title}
            </span>
          </Link>
        ) : (
          exam.mock && (
            <Link
              href={examHref(exam, "/mock-test")}
              className="rounded-xl border border-border bg-surface p-4 text-right hover:bg-surface-muted"
            >
              <span className="text-xs text-muted">Finished the syllabus →</span>
              <span className="mt-0.5 block font-medium">Take the mock exam</span>
            </Link>
          )
        )}
      </nav>
    </article>
  );
}
