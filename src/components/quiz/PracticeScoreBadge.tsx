"use client";

import { getExam, passPercentFor } from "@/data/exams";
import { useExamProgress } from "@/lib/progress";

export default function PracticeScoreBadge({ examId, setId }: { examId: string; setId: string }) {
  const progress = useExamProgress(examId);
  const exam = getExam(examId);
  const score = progress.practice[setId];
  if (!score || !exam) {
    return <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs text-muted">Not attempted</span>;
  }
  const passed = score.bestPercent >= passPercentFor(exam);
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
        passed ? "bg-success-soft text-success" : "bg-warning-soft text-warning"
      }`}
    >
      Best {score.bestPercent}% · {score.attempts} attempt{score.attempts === 1 ? "" : "s"}
    </span>
  );
}
