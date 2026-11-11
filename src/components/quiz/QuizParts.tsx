"use client";

import type { ReactNode } from "react";
import type { QuizQuestion } from "@/data/types";

const OPTION_LABELS = ["A", "B", "C", "D", "E", "F"] as const;

export function QuestionCard({
  question,
  position,
  total,
  selected,
  onSelect,
}: {
  question: QuizQuestion;
  position: number;
  total: number;
  selected: number | undefined;
  onSelect: (optionIndex: number) => void;
}) {
  return (
    <fieldset className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <legend className="sr-only">
        Question {position} of {total}
      </legend>
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        Question {position} of {total}
      </p>
      <p className="mt-2 text-lg font-medium leading-relaxed">{question.question}</p>
      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex;
          return (
            <label
              key={optionIndex}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                isSelected
                  ? "border-accent bg-accent-soft"
                  : "border-border hover:border-muted hover:bg-surface-muted"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                className="sr-only"
                checked={isSelected}
                onChange={() => onSelect(optionIndex)}
              />
              <span
                aria-hidden
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                  isSelected ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted"
                }`}
              >
                {OPTION_LABELS[optionIndex]}
              </span>
              <span className="leading-relaxed">{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function QuestionPalette({
  questions,
  answers,
  current,
  onJump,
}: {
  questions: QuizQuestion[];
  answers: Record<string, number>;
  current: number;
  onJump: (index: number) => void;
}) {
  return (
    <nav aria-label="Question navigator" className="flex flex-wrap gap-1.5">
      {questions.map((question, index) => {
        const answered = answers[question.id] !== undefined;
        const isCurrent = index === current;
        return (
          <button
            key={question.id}
            type="button"
            onClick={() => onJump(index)}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Question ${index + 1}${answered ? ", answered" : ""}`}
            className={`h-8 w-8 rounded-md text-xs font-semibold tabular-nums transition-colors ${
              isCurrent
                ? "bg-foreground text-background"
                : answered
                  ? "bg-accent-soft text-accent"
                  : "bg-surface-muted text-muted hover:text-foreground"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
}

export function ReviewList<Q extends QuizQuestion>({
  questions,
  answers,
  renderMeta,
}: {
  questions: Q[];
  answers: Record<string, number>;
  renderMeta?: (question: Q) => ReactNode;
}) {
  return (
    <ol className="flex flex-col gap-4">
      {questions.map((question, index) => {
        const chosen = answers[question.id];
        const isCorrect = chosen === question.answer;
        const status = chosen === undefined ? "Skipped" : isCorrect ? "Correct" : "Incorrect";
        return (
          <li key={question.id} className="rounded-2xl border border-border bg-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                Question {index + 1}
                {renderMeta ? <> · {renderMeta(question)}</> : null}
              </p>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  chosen === undefined
                    ? "bg-surface-muted text-muted"
                    : isCorrect
                      ? "bg-success-soft text-success"
                      : "bg-danger-soft text-danger"
                }`}
              >
                {status}
              </span>
            </div>
            <p className="mt-2 font-medium leading-relaxed">{question.question}</p>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm">
              {question.options.map((option, optionIndex) => {
                const isAnswer = optionIndex === question.answer;
                const isWrongChoice = optionIndex === chosen && !isAnswer;
                return (
                  <li
                    key={optionIndex}
                    className={`flex gap-2 rounded-lg px-3 py-2 ${
                      isAnswer ? "bg-success-soft" : isWrongChoice ? "bg-danger-soft" : ""
                    }`}
                  >
                    <span className="font-semibold">{OPTION_LABELS[optionIndex]}.</span>
                    <span className="flex-1">{option}</span>
                    {isAnswer && <span className="text-success">✓ Correct answer</span>}
                    {isWrongChoice && <span className="text-danger">Your answer</span>}
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 whitespace-pre-line rounded-lg bg-surface-muted px-3 py-2 text-sm leading-relaxed text-muted">
              <span className="font-semibold text-foreground">Explanation: </span>
              {question.explanation}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
