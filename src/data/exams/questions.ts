import type { Question, QuestionBank } from "@/data/types";

// Dynamic imports keep each exam's question bank in its own chunk, so client pages load only what they need.
const questionBankLoaders: Record<string, () => Promise<QuestionBank>> = {
  xa: () => import("./xa/questions").then((bank) => bank.questionsByChapter),
};

export async function loadQuestionBank(examId: string): Promise<QuestionBank> {
  const loader = questionBankLoaders[examId];
  return loader ? loader() : {};
}

export async function loadChapterQuestions(examId: string, chapterNumber: number): Promise<Question[]> {
  const bank = await loadQuestionBank(examId);
  return bank[chapterNumber] ?? [];
}
