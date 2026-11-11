import type { Metadata } from "next";
import Link from "next/link";
import ChapterQuiz from "@/components/quiz/ChapterQuiz";
import { chapterHref, getAdjacentChapters, passPercentFor } from "@/data/exams";
import { loadChapterQuestions } from "@/data/exams/questions";
import { chapterParams, requireChapter } from "@/lib/examParams";

export function generateStaticParams() {
  return chapterParams();
}

export async function generateMetadata(props: PageProps<"/[exam]/chapters/[slug]/test">): Promise<Metadata> {
  const params = await props.params;
  const { exam, chapter } = requireChapter(params.exam, params.slug);
  return { title: `${exam.code} Chapter ${chapter.number} test` };
}

export default async function ChapterTestPage(props: PageProps<"/[exam]/chapters/[slug]/test">) {
  const params = await props.params;
  const { exam, chapter } = requireChapter(params.exam, params.slug);
  const questions = await loadChapterQuestions(exam.id, chapter.number);
  const { next } = getAdjacentChapters(exam, chapter.slug);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-sm text-muted">
          <Link href={chapterHref(exam, chapter)} className="hover:text-foreground">
            ← Chapter {chapter.number}: {chapter.title}
          </Link>
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight">Chapter {chapter.number} test</h1>
      </header>
      <ChapterQuiz
        examId={exam.id}
        slug={chapter.slug}
        questions={questions}
        passPercent={passPercentFor(exam)}
        chapterHref={chapterHref(exam, chapter)}
        nextChapter={next ? { href: chapterHref(exam, next), title: next.title } : undefined}
      />
    </div>
  );
}
