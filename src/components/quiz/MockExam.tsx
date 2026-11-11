"use client";

import { useCallback } from "react";
import { chapterHref, getExam, passPercentFor } from "@/data/exams";
import { loadQuestionBank } from "@/data/exams/questions";
import type { Exam, MockConfig } from "@/data/types";
import { buildMockExam, negativeMarkFor } from "@/lib/mockExam";
import { recordMockScore, useExamProgress } from "@/lib/progress";
import TimedExam, { type ChapterLink } from "./TimedExam";

export function chapterLinksFor(exam: Exam): Record<number, ChapterLink> {
  return Object.fromEntries(
    exam.chapters.map((chapter) => [chapter.number, { title: chapter.title, href: chapterHref(exam, chapter) }]),
  );
}

export default function MockExam({ examId }: { examId: string }) {
  const exam = getExam(examId);
  if (!exam?.mock) return <p className="text-muted">A mock exam isn&apos;t available for this certification yet.</p>;
  return <MockExamRunner exam={exam} mock={exam.mock} />;
}

function MockExamRunner({ exam, mock }: { exam: Exam; mock: MockConfig }) {
  const progress = useExamProgress(exam.id);
  const loadQuestions = useCallback(
    async () => buildMockExam(exam, mock, await loadQuestionBank(exam.id)),
    [exam, mock],
  );
  const onFinish = useCallback((percent: number) => recordMockScore(exam.id, percent), [exam.id]);

  return (
    <TimedExam
      startLabel="Start mock exam"
      restartLabel="Take a new mock exam"
      durationMinutes={mock.durationMinutes}
      negativeMark={negativeMarkFor(exam)}
      passPercent={passPercentFor(exam)}
      bestScore={progress.mock}
      chapterLinks={chapterLinksFor(exam)}
      loadQuestions={loadQuestions}
      onFinish={onFinish}
      rules={
        <>
          <li>
            {mock.questionCount} questions drawn at random from all {exam.chapters.length} chapters, weighted by each
            module&apos;s marks in the real exam. Each attempt is a fresh set.
          </li>
          {exam.pattern && exam.pattern.caseletCount > 0 && (
            <li>
              The real exam also has case-based questions ({exam.pattern.caseletCount} caselets). Watch the module
              case study videos to practise those.
            </li>
          )}
        </>
      }
    />
  );
}
