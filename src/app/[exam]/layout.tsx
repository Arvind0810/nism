import ExamTabs from "@/components/ExamTabs";
import { examHref } from "@/data/exams";
import { hasFormulaSheet } from "@/data/exams/formulas";
import { getPracticeSets } from "@/data/exams/practice";
import { allExamParams, requireExam } from "@/lib/examParams";

export function generateStaticParams() {
  return allExamParams();
}

export default async function ExamLayout({ children, params }: LayoutProps<"/[exam]">) {
  const exam = requireExam((await params).exam);
  const isAvailable = exam.status === "available";

  return (
    <>
      <div className="border-b border-border bg-surface print:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">NISM Series {exam.code}</p>
          <p className="font-semibold">{exam.title}</p>
          {isAvailable ? (
            <ExamTabs
              tabs={[
                { href: examHref(exam), label: "Overview" },
                { href: examHref(exam, "/chapters"), label: "Chapters" },
                ...(hasFormulaSheet(exam.id) ? [{ href: examHref(exam, "/formulas"), label: "Formula sheet" }] : []),
                ...(getPracticeSets(exam.id).length > 0
                  ? [{ href: examHref(exam, "/practice"), label: "Practice sets" }]
                  : []),
                { href: examHref(exam, "/mock-test"), label: "Mock test" },
              ]}
            />
          ) : (
            <div className="h-3" />
          )}
        </div>
      </div>
      {children}
      {exam.sourceNote && (
        <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-muted">
          <p>
            {exam.sourceNote} Always check the latest NISM syllabus before your exam.
            {exam.playlistUrl && (
              <>
                {" "}
                <a href={exam.playlistUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  Video lessons on YouTube ↗
                </a>
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
}
