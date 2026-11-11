import type { PracticeSet, PracticeSetSummary } from "@/data/types";

const SET_DURATION_MINUTES = 60;
const SET_QUESTION_COUNT = 50;

export const xaPracticeSets: PracticeSetSummary[] = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: `set-${n}`,
  title: `Practice Set ${n}`,
  questionCount: SET_QUESTION_COUNT,
  durationMinutes: SET_DURATION_MINUTES,
}));

const loaders: Record<string, () => Promise<PracticeSet>> = {
  "set-1": () => import("./set-1").then((m) => m.practiceSet1),
  "set-2": () => import("./set-2").then((m) => m.practiceSet2),
  "set-3": () => import("./set-3").then((m) => m.practiceSet3),
  "set-4": () => import("./set-4").then((m) => m.practiceSet4),
  "set-5": () => import("./set-5").then((m) => m.practiceSet5),
  "set-6": () => import("./set-6").then((m) => m.practiceSet6),
};

export async function loadXaPracticeSet(setId: string): Promise<PracticeSet | undefined> {
  const loader = loaders[setId];
  return loader ? loader() : undefined;
}
