"use client";

import { useDeferredValue, useState } from "react";
import type { Formula } from "@/data/types";
import FormulaCard from "./FormulaCard";

interface ChapterGroup {
  chapterNumber: number;
  title: string;
  href: string;
}

function matches(formula: Formula, query: string): boolean {
  const haystack = [formula.name, formula.formula, formula.excel, formula.example, formula.trap, `ch ${formula.section}`]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term));
}

export default function FormulaSheetBrowser({ formulas, chapters }: { formulas: Formula[]; chapters: ChapterGroup[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim());
  const visible = deferredQuery ? formulas.filter((formula) => matches(formula, deferredQuery)) : formulas;
  const groups = chapters
    .map((chapter) => ({ ...chapter, items: visible.filter((formula) => formula.chapterNumber === chapter.chapterNumber) }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-14 z-10 -mx-4 flex flex-col gap-3 border-b border-border bg-background/95 px-4 py-3 backdrop-blur print:hidden">
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="formula-search" className="sr-only">
            Search formulas
          </label>
          <input
            id="formula-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search formulas: e.g. Sharpe, EMI, duration, 9.5"
            className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium hover:bg-surface-muted"
          >
            Print / save PDF
          </button>
        </div>
        <nav aria-label="Jump to chapter" className="flex gap-1.5 overflow-x-auto text-xs">
          {chapters.map((chapter) => (
            <a
              key={chapter.chapterNumber}
              href={`#chapter-${chapter.chapterNumber}`}
              className="whitespace-nowrap rounded-full border border-border bg-surface px-2.5 py-1 text-muted hover:text-foreground"
            >
              Ch {chapter.chapterNumber}
            </a>
          ))}
        </nav>
      </div>

      <p className="text-sm text-muted print:hidden" aria-live="polite">
        {deferredQuery
          ? `${visible.length} of ${formulas.length} formulas match "${deferredQuery}"`
          : `${formulas.length} formulas across ${chapters.length} chapters`}
      </p>

      {groups.length === 0 && (
        <p className="rounded-xl border border-dashed border-border p-6 text-center text-muted">
          No formulas match that search.
        </p>
      )}

      {groups.map((group) => (
        <section
          key={group.chapterNumber}
          id={`chapter-${group.chapterNumber}`}
          aria-labelledby={`chapter-${group.chapterNumber}-heading`}
          className="flex scroll-mt-40 flex-col gap-3"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id={`chapter-${group.chapterNumber}-heading`} className="text-lg font-semibold">
              <span className="text-accent">Chapter {group.chapterNumber}.</span> {group.title}
            </h2>
            <a href={group.href} className="text-sm text-muted hover:text-foreground print:hidden">
              Open chapter →
            </a>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {group.items.map((formula) => (
              <FormulaCard key={formula.id} formula={formula} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
