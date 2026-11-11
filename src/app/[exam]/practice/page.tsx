import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeScoreBadge from "@/components/quiz/PracticeScoreBadge";
import { examHref, passPercentFor } from "@/data/exams";
import { examIdsWithPracticeSets, getPracticeSets } from "@/data/exams/practice";
import { requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return examIdsWithPracticeSets().map((exam) => ({ exam }));
}

export async function generateMetadata(props: PageProps<"/[exam]/practice">): Promise<Metadata> {
  const exam = requireAvailableExam((await props.params).exam);
  return { title: `${exam.code} practice sets` };
}

export default async function PracticeSetsPage(props: PageProps<"/[exam]/practice">) {
  const exam = requireAvailableExam((await props.params).exam);
  const sets = getPracticeSets(exam.id);
  if (sets.length === 0) notFound();

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8 sm:py-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{exam.code} practice sets</h1>
        <p className="mt-2 max-w-2xl text-muted">
          {sets.length} fixed, timed papers with NISM-style negative marking. Unlike the mock exam, each set stays the
          same, so retaking one shows how much you&apos;ve improved. Pass mark {passPercentFor(exam)}%.
        </p>
      </div>
      <ol className="grid gap-3 sm:grid-cols-2">
        {sets.map((set) => (
          <li key={set.id}>
            <Link
              href={examHref(exam, `/practice/${set.id}`)}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:bg-surface-muted"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold">{set.title}</h2>
                <PracticeScoreBadge examId={exam.id} setId={set.id} />
              </div>
              <p className="text-sm text-muted">
                {set.questionCount} questions · {set.durationMinutes} minutes · all chapters
              </p>
              <span className="mt-auto text-sm font-semibold text-accent">Start →</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
