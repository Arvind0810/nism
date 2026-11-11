import type { Metadata } from "next";
import MockExam from "@/components/quiz/MockExam";
import { availableExamParams, requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return availableExamParams();
}

export async function generateMetadata(props: PageProps<"/[exam]/mock-test">): Promise<Metadata> {
  const exam = requireAvailableExam((await props.params).exam);
  return {
    title: `${exam.code} mock exam`,
    description: `A timed NISM ${exam.code} mock exam with negative marking, drawn from all chapters.`,
  };
}

export default async function MockTestPage(props: PageProps<"/[exam]/mock-test">) {
  const exam = requireAvailableExam((await props.params).exam);
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:py-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{exam.code} mock exam</h1>
        <p className="mt-2 text-muted">Practise under exam conditions. Each attempt draws a fresh set of questions.</p>
      </div>
      <MockExam examId={exam.id} />
    </div>
  );
}
