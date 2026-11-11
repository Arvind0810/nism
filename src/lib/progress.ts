"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "nism-prep-progress-v2";
const LEGACY_STORAGE_KEY = "nism-xa-progress-v1";
const LEGACY_EXAM_ID = "xa";

export interface TestScore {
  best: number;
  last: number;
  total: number;
  attempts: number;
  updatedAt: string;
}

export interface MockScore {
  bestPercent: number;
  lastPercent: number;
  attempts: number;
  updatedAt: string;
}

export interface ExamProgress {
  watched: Record<string, boolean>;
  tests: Record<string, TestScore>;
  mock?: MockScore;
  practice: Record<string, MockScore>;
}

interface ProgressStore {
  exams: Record<string, ExamProgress>;
}

const EMPTY_EXAM_PROGRESS: ExamProgress = { watched: {}, tests: {}, practice: {} };
const EMPTY_STORE: ProgressStore = { exams: {} };

const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cachedStore: ProgressStore = EMPTY_STORE;

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function normaliseExamProgress(value: Partial<ExamProgress> | undefined): ExamProgress {
  return { watched: value?.watched ?? {}, tests: value?.tests ?? {}, mock: value?.mock, practice: value?.practice ?? {} };
}

function parseStore(raw: string | null): ProgressStore {
  if (!raw) return EMPTY_STORE;
  try {
    const parsed = JSON.parse(raw) as Partial<ProgressStore>;
    const exams: Record<string, ExamProgress> = {};
    for (const [examId, value] of Object.entries(parsed.exams ?? {})) {
      exams[examId] = normaliseExamProgress(value);
    }
    return { exams };
  } catch {
    return EMPTY_STORE;
  }
}

// Before multi-exam support, X-A progress lived under its own key; fold it into the new store once.
function migrateLegacyProgress(): string | null {
  const legacyRaw = readStorage(LEGACY_STORAGE_KEY);
  if (!legacyRaw) return null;
  try {
    const legacy = normaliseExamProgress(JSON.parse(legacyRaw) as Partial<ExamProgress>);
    const migrated = JSON.stringify({ exams: { [LEGACY_EXAM_ID]: legacy } } satisfies ProgressStore);
    window.localStorage.setItem(STORAGE_KEY, migrated);
    window.localStorage.removeItem(LEGACY_STORAGE_KEY);
    return migrated;
  } catch {
    return null;
  }
}

function getStoreSnapshot(): ProgressStore {
  const raw = readStorage(STORAGE_KEY) ?? migrateLegacyProgress();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedStore = parseStore(raw);
  }
  return cachedStore;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function writeExamProgress(examId: string, update: (current: ExamProgress) => ExamProgress) {
  const store = getStoreSnapshot();
  const next: ProgressStore = {
    exams: { ...store.exams, [examId]: update(store.exams[examId] ?? EMPTY_EXAM_PROGRESS) },
  };
  const serialised = JSON.stringify(next);
  try {
    window.localStorage.setItem(STORAGE_KEY, serialised);
  } catch {
    // Storage can be unavailable (private mode, quota); keep the in-memory copy so the UI still updates.
    cachedRaw = serialised;
    cachedStore = next;
  }
  listeners.forEach((listener) => listener());
}

export function useExamProgress(examId: string): ExamProgress {
  return useSyncExternalStore(
    subscribe,
    () => getStoreSnapshot().exams[examId] ?? EMPTY_EXAM_PROGRESS,
    () => EMPTY_EXAM_PROGRESS,
  );
}

export function setWatched(examId: string, slug: string, watched: boolean) {
  writeExamProgress(examId, (current) => ({
    ...current,
    watched: { ...current.watched, [slug]: watched },
  }));
}

export function recordTestScore(examId: string, slug: string, score: number, total: number) {
  writeExamProgress(examId, (current) => {
    const previous = current.tests[slug];
    // A best score from an older, shorter version of the test isn't comparable, so restart the best on a size change.
    const comparable = previous && previous.total === total;
    return {
      ...current,
      tests: {
        ...current.tests,
        [slug]: {
          best: comparable ? Math.max(previous.best, score) : score,
          last: score,
          total,
          attempts: (previous?.attempts ?? 0) + 1,
          updatedAt: new Date().toISOString(),
        },
      },
    };
  });
}

export function recordMockScore(examId: string, percent: number) {
  writeExamProgress(examId, (current) => ({
    ...current,
    mock: nextMockScore(current.mock, percent),
  }));
}

function nextMockScore(previous: MockScore | undefined, percent: number): MockScore {
  return {
    bestPercent: Math.max(previous?.bestPercent ?? 0, percent),
    lastPercent: percent,
    attempts: (previous?.attempts ?? 0) + 1,
    updatedAt: new Date().toISOString(),
  };
}

export function recordPracticeScore(examId: string, setId: string, percent: number) {
  writeExamProgress(examId, (current) => ({
    ...current,
    practice: { ...current.practice, [setId]: nextMockScore(current.practice[setId], percent) },
  }));
}

export function resetExamProgress(examId: string) {
  writeExamProgress(examId, () => EMPTY_EXAM_PROGRESS);
}

export function scorePercent(score: Pick<TestScore, "best" | "total">): number {
  return score.total > 0 ? Math.round((score.best / score.total) * 100) : 0;
}
