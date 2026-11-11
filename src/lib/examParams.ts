import { notFound } from "next/navigation";
import { exams, getAvailableExams, getChapter, getExam } from "@/data/exams";
import type { Chapter, Exam } from "@/data/types";

export function allExamParams() {
  return exams.map((exam) => ({ exam: exam.id }));
}

export function availableExamParams() {
  return getAvailableExams().map((exam) => ({ exam: exam.id }));
}

export function chapterParams() {
  return getAvailableExams().flatMap((exam) =>
    exam.chapters.map((chapter) => ({ exam: exam.id, slug: chapter.slug })),
  );
}

export function requireExam(examId: string): Exam {
  const exam = getExam(examId);
  if (!exam) notFound();
  return exam;
}

export function requireAvailableExam(examId: string): Exam {
  const exam = requireExam(examId);
  if (exam.status !== "available") notFound();
  return exam;
}

export function requireChapter(examId: string, slug: string): { exam: Exam; chapter: Chapter } {
  const exam = requireAvailableExam(examId);
  const chapter = getChapter(exam, slug);
  if (!chapter) notFound();
  return { exam, chapter };
}
