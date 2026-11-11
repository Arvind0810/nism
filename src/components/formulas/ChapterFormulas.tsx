import Link from "next/link";
import { examHref } from "@/data/exams";
import { loadChapterFormulas } from "@/data/exams/formulas";
import type { Chapter, Exam } from "@/data/types";
import FormulaCard from "./FormulaCard";

export default async function ChapterFormulas({ exam, chapter }: { exam: Exam; chapter: Chapter }) {
  const formulas = await loadChapterFormulas(exam.id, chapter.number);
  if (formulas.length === 0) return null;

  return (
    <section aria-labelledby="chapter-formulas" className="flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="chapter-formulas" className="text-lg font-semibold">
          Formulas in this chapter{" "}
          <span className="text-sm font-normal text-muted">({formulas.length})</span>
        </h2>
        <Link
          href={examHref(exam, `/formulas#chapter-${chapter.number}`)}
          className="text-sm font-medium text-accent hover:underline"
        >
          Full formula sheet →
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {formulas.map((formula) => (
          <FormulaCard key={formula.id} formula={formula} compact />
        ))}
      </div>
    </section>
  );
}
