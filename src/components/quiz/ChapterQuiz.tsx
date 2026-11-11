"use client";

import Link from "next/link";
import { useState } from "react";
import type { Question } from "@/data/types";
import { shuffle } from "@/lib/shuffle";
import { recordTestScore } from "@/lib/progress";
import { QuestionCard, QuestionPalette, ReviewList } from "./QuizParts";

interface ChapterQuizProps {
  examId: string;
  slug: string;
  questions: Question[];
  passPercent: number;
  chapterHref: string;
  nextChapter?: { href: string; title: string };
}

export default function ChapterQuiz({
  examId,
  slug,
  questions,
  passPercent,
  chapterHref,
  nextChapter,
}: ChapterQuizProps) {
  const [orderedQuestions, setOrderedQuestions] = useState(questions);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const score = orderedQuestions.filter((question) => answers[question.id] === question.answer).length;
  const percent = Math.round((score / orderedQuestions.length) * 100);
  const passed = percent >= passPercent;
  const question = orderedQuestions[current];
  const isLast = current === orderedQuestions.length - 1;

  function submit() {
    const unanswered = orderedQuestions.length - answeredCount;
    if (unanswered > 0 && !window.confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) {
      return;
    }
    const finalScore = orderedQuestions.filter((item) => answers[item.id] === item.answer).length;
    recordTestScore(examId, slug, finalScore, orderedQuestions.length);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retake() {
    setOrderedQuestions(shuffle(questions));
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-6">
        <section
          aria-live="polite"
          className={`rounded-2xl border p-6 ${passed ? "border-success bg-success-soft" : "border-warning bg-warning-soft"}`}
        >
          <p className={`text-sm font-semibold ${passed ? "text-success" : "text-warning"}`}>
            {passed ? "Passed: chapter complete" : `Below ${passPercent}%: review and try again`}
          </p>
          <p className="mt-1 text-4xl font-semibold tabular-nums">
            {score}/{orderedQuestions.length}
            <span className="ml-2 text-xl text-muted">({percent}%)</span>
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={retake}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
            >
              Retake (shuffled)
            </button>
            <Link
              href={chapterHref}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-muted"
            >
              Back to chapter
            </Link>
            {nextChapter && (
              <Link
                href={nextChapter.href}
                className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-muted"
              >
                Next: {nextChapter.title} →
              </Link>
            )}
          </div>
        </section>
        <h2 className="text-lg font-semibold">Review answers</h2>
        <ReviewList questions={orderedQuestions} answers={answers} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            Answered <span className="font-semibold text-foreground tabular-nums">{answeredCount}</span> of{" "}
            {orderedQuestions.length}
          </span>
          <span className="text-muted">Pass mark {passPercent}%</span>
        </div>
        <QuestionPalette questions={orderedQuestions} answers={answers} current={current} onJump={setCurrent} />
      </div>

      <QuestionCard
        question={question}
        position={current + 1}
        total={orderedQuestions.length}
        selected={answers[question.id]}
        onSelect={(optionIndex) => setAnswers((previous) => ({ ...previous, [question.id]: optionIndex }))}
      />

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setCurrent((index) => Math.max(0, index - 1))}
          disabled={current === 0}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-muted disabled:opacity-40"
        >
          ← Previous
        </button>
        {isLast ? (
          <button
            type="button"
            onClick={submit}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
          >
            Submit test
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCurrent((index) => index + 1)}
            className="rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90"
          >
            Next →
          </button>
        )}
      </div>
      {!isLast && answeredCount === orderedQuestions.length && (
        <button
          type="button"
          onClick={submit}
          className="self-end text-sm font-semibold text-accent hover:underline"
        >
          All answered: submit now
        </button>
      )}
    </div>
  );
}
