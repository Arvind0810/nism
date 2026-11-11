import type { PracticeSet, PracticeSetSummary } from "@/data/types";
import { loadXaPracticeSet, xaPracticeSets } from "./xa/practice";

interface PracticeCatalog {
  sets: PracticeSetSummary[];
  load: (setId: string) => Promise<PracticeSet | undefined>;
}

const catalogs: Record<string, PracticeCatalog> = {
  xa: { sets: xaPracticeSets, load: loadXaPracticeSet },
};

export function getPracticeSets(examId: string): PracticeSetSummary[] {
  return catalogs[examId]?.sets ?? [];
}

export function getPracticeSet(examId: string, setId: string): PracticeSetSummary | undefined {
  return getPracticeSets(examId).find((set) => set.id === setId);
}

export function examIdsWithPracticeSets(): string[] {
  return Object.keys(catalogs);
}

export async function loadPracticeSet(examId: string, setId: string): Promise<PracticeSet | undefined> {
  return catalogs[examId]?.load(setId);
}
