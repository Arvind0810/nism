import type { Formula, FormulaSheet } from "@/data/types";

const formulaSheetLoaders: Record<string, () => Promise<FormulaSheet>> = {
  xa: () => import("./xa/formulas").then((sheet) => sheet.xaFormulaSheet),
};

export function hasFormulaSheet(examId: string): boolean {
  return examId in formulaSheetLoaders;
}

export function examIdsWithFormulaSheets(): string[] {
  return Object.keys(formulaSheetLoaders);
}

export async function loadFormulaSheet(examId: string): Promise<FormulaSheet | undefined> {
  const loader = formulaSheetLoaders[examId];
  return loader ? loader() : undefined;
}

export async function loadChapterFormulas(examId: string, chapterNumber: number): Promise<Formula[]> {
  const sheet = await loadFormulaSheet(examId);
  return sheet?.formulas.filter((formula) => formula.chapterNumber === chapterNumber) ?? [];
}
