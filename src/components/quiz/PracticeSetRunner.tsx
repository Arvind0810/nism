"use client";

import { useCallback } from "react";
import { getExam, passPercentFor } from "@/data/exams";
import { getPracticeSet, loadPracticeSet } from "@/data/exams/practice";
import { negativeMarkFor } from "@/lib/mockExam";
import { recordPracticeScore, useExamProgress } from "@/lib/progress";
import { chapterLinksFor } from "./MockExam";
import TimedExam from "./TimedExam";

export default function PracticeSetRunner({ examId, setId }: { examId: string; setId: string }) {
  const exam = getExam(examId);
  const summary = getPracticeSet(examId, setId);
  const progress = useExamProgress(examId);
  const loadQuestions = useCallback(async () => (await loadPracticeSet(examId, setId))?.questions ?? [], [examId, setId]);
  const onFinish = useCallback((percent: number) => recordPracticeScore(examId, setId, percent), [examId, setId]);

  if (!exam || !summary) return <p className="text-muted">This practice set isn&apos;t available.</p>;

  return (
    <TimedExam
      startLabel={`Start ${summary.title}`}
      restartLabel="Retake this set"
      durationMinutes={summary.durationMinutes}
      negativeMark={negativeMarkFor(exam)}
      passPercent={passPercentFor(exam)}
      bestScore={progress.practice[setId]}
      chapterLinks={chapterLinksFor(exam)}
      loadQuestions={loadQuestions}
      onFinish={onFinish}
      rules={
        <li>
          A fixed set of {summary.questionCount} exam-style questions covering the whole syllabus, the same every
          attempt, so you can measure improvement.
        </li>
      }
    />
  );
}
