import type { Formula } from "@/data/types";

export default function FormulaCard({ formula, compact = false }: { formula: Formula; compact?: boolean }) {
  return (
    <article
      id={formula.id}
      className="flex scroll-mt-28 flex-col gap-3 rounded-xl border border-border bg-surface p-4 break-inside-avoid"
    >
      <header className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{formula.name}</h3>
        <span className="shrink-0 rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[11px] text-muted">
          Ch {formula.section}
        </span>
      </header>
      <p className="rounded-lg bg-accent-soft px-3 py-2 font-mono text-sm leading-relaxed text-foreground">
        {formula.formula}
      </p>
      {formula.excel && (
        <p className="text-xs text-muted">
          <span className="font-semibold text-foreground">Excel: </span>
          <code className="font-mono">{formula.excel}</code>
        </p>
      )}
      <dl className={`flex flex-col gap-2 text-sm ${compact ? "" : "leading-relaxed"}`}>
        <div>
          <dt className="inline font-semibold">Example → </dt>
          <dd className="inline text-muted">{formula.example}</dd>
        </div>
        <div className="rounded-lg border border-warning/30 bg-warning-soft px-3 py-2">
          <dt className="inline font-semibold text-warning">Trap → </dt>
          <dd className="inline">{formula.trap}</dd>
        </div>
        {formula.note && (
          <div className="text-xs text-muted">
            <dt className="inline font-semibold">Update: </dt>
            <dd className="inline">{formula.note}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
