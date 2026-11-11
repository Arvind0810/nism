import type { Chapter, Exam, Module, Video } from "@/data/types";
import { xaExam } from "./xa/course";
import { xbExam } from "./xb/course";

export const exams: Exam[] = [xaExam, xbExam];

export const DEFAULT_PASS_PERCENT = 60;

export function getExam(examId: string): Exam | undefined {
  return exams.find((exam) => exam.id === examId);
}

export function getAvailableExams(): Exam[] {
  return exams.filter((exam) => exam.status === "available");
}

export function passPercentFor(exam: Exam): number {
  return exam.pattern?.passPercent ?? DEFAULT_PASS_PERCENT;
}

export function examHref(exam: Pick<Exam, "id">, path = ""): string {
  return `/${exam.id}${path}`;
}

export function chapterHref(exam: Pick<Exam, "id">, chapter: Pick<Chapter, "slug">, suffix = ""): string {
  return `/${exam.id}/chapters/${chapter.slug}${suffix}`;
}

export function getChapter(exam: Exam, slug: string): Chapter | undefined {
  return exam.chapters.find((chapter) => chapter.slug === slug);
}

export function getModule(exam: Exam, moduleNumber: number): Module | undefined {
  return exam.modules.find((courseModule) => courseModule.number === moduleNumber);
}

export function getModuleChapters(exam: Exam, moduleNumber: number): Chapter[] {
  return exam.chapters.filter((chapter) => chapter.moduleNumber === moduleNumber);
}

export function getAdjacentChapters(exam: Exam, slug: string) {
  const index = exam.chapters.findIndex((chapter) => chapter.slug === slug);
  return {
    previous: index > 0 ? exam.chapters[index - 1] : undefined,
    next: index >= 0 && index < exam.chapters.length - 1 ? exam.chapters[index + 1] : undefined,
  };
}

export function getStandaloneVideos(exam: Exam): Video[] {
  const caseStudies = exam.modules.flatMap((courseModule) =>
    courseModule.caseStudyVideo ? [courseModule.caseStudyVideo] : [],
  );
  return [...(exam.introVideo ? [exam.introVideo] : []), ...exam.practiceVideos, ...caseStudies];
}

export function getStandaloneVideo(exam: Exam, id: string): Video | undefined {
  return getStandaloneVideos(exam).find((video) => video.id === id);
}

export function chapterDurationSeconds(chapter: Chapter): number {
  return chapter.videos.reduce((total, video) => total + video.durationSeconds, 0);
}

export function formatDuration(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.round((totalSeconds % 3600) / 60);
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes} min`;
}
