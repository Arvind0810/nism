import type { Metadata } from "next";
import ModuleList from "@/components/ModuleList";
import { passPercentFor } from "@/data/exams";
import { availableExamParams, requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return availableExamParams();
}

export async function generateMetadata(props: PageProps<"/[exam]/chapters">): Promise<Metadata> {
  const exam = requireAvailableExam((await props.params).exam);
  return { title: `${exam.code} chapters` };
}

export default async function ChaptersPage(props: PageProps<"/[exam]/chapters">) {
  const exam = requireAvailableExam((await props.params).exam);
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-8 sm:py-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">All {exam.code} chapters</h1>
        <p className="mt-2 text-muted">
          Watch each lesson, then take its test. Score {passPercentFor(exam)}% or more to complete a chapter.
        </p>
      </div>
      <ModuleList exam={exam} />
    </div>
  );
}
