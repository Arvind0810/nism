import type { Exam, MockConfig, Question, QuestionBank } from "@/data/types";
import { shuffle } from "./shuffle";

const DEFAULT_NEGATIVE_MARKING_PERCENT = 25;

export interface MockQuestion extends Question {
  chapterNumber: number;
}

export function negativeMarkFor(exam: Exam): number {
  return (exam.pattern?.negativeMarkingPercent ?? DEFAULT_NEGATIVE_MARKING_PERCENT) / 100;
}

// Largest-remainder rounding so per-module counts always sum to the mock's question count.
function questionsPerModule(exam: Exam, total: number): Map<number, number> {
  const totalMarks = exam.modules.reduce((sum, courseModule) => sum + courseModule.marks, 0);
  const shares = exam.modules.map((courseModule) => {
    const exact = totalMarks > 0 ? (courseModule.marks / totalMarks) * total : 0;
    return { moduleNumber: courseModule.number, count: Math.floor(exact), remainder: exact % 1 };
  });
  let leftover = total - shares.reduce((sum, share) => sum + share.count, 0);
  [...shares]
    .sort((a, b) => b.remainder - a.remainder)
    .forEach((share) => {
      if (leftover > 0) {
        share.count += 1;
        leftover -= 1;
      }
    });
  return new Map(shares.map((share) => [share.moduleNumber, share.count]));
}

export function buildMockExam(exam: Exam, mock: MockConfig, bank: QuestionBank): MockQuestion[] {
  const counts = questionsPerModule(exam, mock.questionCount);
  const picked = exam.modules.flatMap((courseModule) => {
    const pool = exam.chapters
      .filter((chapter) => chapter.moduleNumber === courseModule.number)
      .flatMap((chapter) =>
        (bank[chapter.number] ?? []).map((question) => ({ ...question, chapterNumber: chapter.number })),
      );
    return shuffle(pool).slice(0, counts.get(courseModule.number) ?? 0);
  });
  return shuffle(picked);
}
