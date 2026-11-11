import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FormulaSheetBrowser from "@/components/formulas/FormulaSheetBrowser";
import { chapterHref } from "@/data/exams";
import { examIdsWithFormulaSheets, loadFormulaSheet } from "@/data/exams/formulas";
import { requireAvailableExam } from "@/lib/examParams";

export function generateStaticParams() {
  return examIdsWithFormulaSheets().map((exam) => ({ exam }));
}

export async function generateMetadata(props: PageProps<"/[exam]/formulas">): Promise<Metadata> {
  const exam = requireAvailableExam((await props.params).exam);
  return {
    title: `${exam.code} formula sheet`,
    description: `Every NISM ${exam.code} formula with a worked example, Excel syntax and the exam traps to watch for.`,
  };
}

export default async function FormulaSheetPage(props: PageProps<"/[exam]/formulas">) {
  const exam = requireAvailableExam((await props.params).exam);
  const sheet = await loadFormulaSheet(exam.id);
  if (!sheet) notFound();

  const chapters = exam.chapters
    .filter((chapter) => sheet.formulas.some((formula) => formula.chapterNumber === chapter.number))
    .map((chapter) => ({ chapterNumber: chapter.number, title: chapter.title, href: chapterHref(exam, chapter) }));

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:py-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">{sheet.title}</h1>
        <p className="mt-2 text-muted">
          Every formula with one worked ₹ example, the Excel function to use at the exam workstation, and the trap
          that question-setters use to reword it.
        </p>
        <p className="mt-2 text-xs text-muted">{sheet.source}</p>
      </header>

      <FormulaSheetBrowser formulas={sheet.formulas} chapters={chapters} />

      <section aria-labelledby="excel-functions" className="flex flex-col gap-3 break-inside-avoid">
        <h2 id="excel-functions" className="text-lg font-semibold">
          Excel functions you&apos;ll use in the exam
        </h2>
        <p className="text-sm text-muted">
          The exam workstation provides Excel or OpenOffice Calc. Know each function&apos;s argument order and sign
          convention.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-surface-muted text-xs uppercase tracking-wide text-muted">
              <tr>
                <th scope="col" className="px-4 py-2.5">Function</th>
                <th scope="col" className="px-4 py-2.5">Syntax</th>
                <th scope="col" className="px-4 py-2.5">Typical NISM use</th>
                <th scope="col" className="px-4 py-2.5">Sign convention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sheet.excelFunctions.map((fn) => (
                <tr key={fn.name}>
                  <th scope="row" className="px-4 py-2.5 font-mono font-semibold">{fn.name}</th>
                  <td className="px-4 py-2.5 font-mono text-xs">{fn.syntax}</td>
                  <td className="px-4 py-2.5">{fn.use}</td>
                  <td className="px-4 py-2.5 text-muted">{fn.signConvention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="exam-traps" className="flex flex-col gap-3 break-inside-avoid">
        <h2 id="exam-traps" className="text-lg font-semibold">
          Traps to know before the exam
        </h2>
        <ol className="grid list-decimal gap-2 rounded-xl border border-border bg-surface p-5 pl-10 text-sm md:grid-cols-2 md:gap-x-10">
          {sheet.examTraps.map((trap) => (
            <li key={trap}>{trap}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
