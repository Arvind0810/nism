export type OptionIndex = 0 | 1 | 2 | 3;

export interface Question {
  id: string;
  question: string;
  options: [string, string, string, string];
  answer: OptionIndex;
  explanation: string;
}

export type QuestionBank = Record<number, Question[]>;

export interface Video {
  id: string;
  title: string;
  durationSeconds: number;
  embeddable?: false;
}

export interface Chapter {
  number: number;
  slug: string;
  title: string;
  moduleNumber: number;
  summary: string;
  topics: string[];
  videos: Video[];
}

export interface Module {
  number: number;
  title: string;
  marks: number;
  caseStudyVideo?: Video;
}

export interface ExamPattern {
  mcqCount: number;
  caseletCount: number;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  passPercent: number;
  negativeMarkingPercent: number;
}

export interface MockConfig {
  questionCount: number;
  durationMinutes: number;
}

export type ExamStatus = "available" | "coming-soon";

export interface Exam {
  id: string;
  code: string;
  title: string;
  tagline: string;
  status: ExamStatus;
  playlistUrl?: string;
  sourceNote?: string;
  pattern?: ExamPattern;
  mock?: MockConfig;
  modules: Module[];
  chapters: Chapter[];
  introVideo?: Video;
  practiceVideos: Video[];
}

export interface Formula {
  id: string;
  chapterNumber: number;
  section: string;
  name: string;
  formula: string;
  excel?: string;
  example: string;
  trap: string;
  note?: string;
}

export interface ExcelFunctionRef {
  name: string;
  syntax: string;
  use: string;
  signConvention: string;
}

export interface FormulaSheet {
  title: string;
  source: string;
  formulas: Formula[];
  excelFunctions: ExcelFunctionRef[];
  examTraps: string[];
}

// Shape the quiz UI needs; chapter-test Questions (exactly 4 options) and practice-set questions both satisfy it.
export interface QuizQuestion {
  id: string;
  question: string;
  options: readonly string[];
  answer: number;
  explanation: string;
}

export interface PracticeQuestion extends QuizQuestion {
  chapterNumber: number;
  options: string[];
}

export interface PracticeSet {
  id: string;
  title: string;
  durationMinutes: number;
  questions: PracticeQuestion[];
}

export interface PracticeSetSummary {
  id: string;
  title: string;
  questionCount: number;
  durationMinutes: number;
}
