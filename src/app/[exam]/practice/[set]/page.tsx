import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PracticeSetRunner from "@/components/quiz/PracticeSetRunner";
import { examHref } from "@/data/exams";
import { examIdsWithPracticeSets, getPracticeSet, getPracticeSets } from "@/data/exams/practice";
import { requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return examIdsWithPracticeSets().flatMap((exam) => getPracticeSets(exam).map((set) => ({ exam, set: set.id })));
}

export async function generateMetadata(props: PageProps<"/[exam]/practice/[set]">): Promise<Metadata> {
  const params = await props.params;
  const exam = requireAvailableExam(params.exam);
  const set = getPracticeSet(exam.id, params.set);
  return set ? { title: `${exam.code} ${set.title}` } : {};
}

export default async function PracticeSetPage(props: PageProps<"/[exam]/practice/[set]">) {
  const params = await props.params;
  const exam = requireAvailableExam(params.exam);
  const set = getPracticeSet(exam.id, params.set);
  if (!set) notFound();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:py-10">
      <div>
        <p className="text-sm text-muted">
          <Link href={examHref(exam, "/practice")} className="hover:text-foreground">
            ← All practice sets
          </Link>
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {exam.code} {set.title}
        </h1>
      </div>
      <PracticeSetRunner examId={exam.id} setId={set.id} />
    </div>
  );
}
