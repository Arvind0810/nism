import type { QuizQuestion } from "@/data/types";

export interface TimedTestResult {
  correct: number;
  wrong: number;
  unanswered: number;
  marks: number;
  percent: number;
  passed: boolean;
}

export interface ChapterBreakdown {
  chapterNumber: number;
  correct: number;
  total: number;
}

export function scoreTimedTest(
  questions: QuizQuestion[],
  answers: Record<string, number>,
  negativeMark: number,
  passPercent: number,
): TimedTestResult {
  let correct = 0;
  let wrong = 0;
  for (const question of questions) {
    const chosen = answers[question.id];
    if (chosen === undefined) continue;
    if (chosen === question.answer) correct += 1;
    else wrong += 1;
  }
  const unanswered = questions.length - correct - wrong;
  const marks = Math.max(0, correct - wrong * negativeMark);
  const percent = questions.length > 0 ? Math.round((marks / questions.length) * 1000) / 10 : 0;
  return { correct, wrong, unanswered, marks, percent, passed: percent >= passPercent };
}

export function breakdownByChapter(
  questions: (QuizQuestion & { chapterNumber: number })[],
  answers: Record<string, number>,
): ChapterBreakdown[] {
  const byChapter = new Map<number, ChapterBreakdown>();
  for (const question of questions) {
    const entry = byChapter.get(question.chapterNumber) ?? {
      chapterNumber: question.chapterNumber,
      correct: 0,
      total: 0,
    };
    entry.total += 1;
    if (answers[question.id] === question.answer) entry.correct += 1;
    byChapter.set(question.chapterNumber, entry);
  }
  return [...byChapter.values()].sort(
    (a, b) => a.correct / a.total - b.correct / b.total || a.chapterNumber - b.chapterNumber,
  );
}
