"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { QuizQuestion } from "@/data/types";
import type { MockScore } from "@/lib/progress";
import { breakdownByChapter, scoreTimedTest } from "@/lib/scoring";
import { QuestionCard, QuestionPalette, ReviewList } from "./QuizParts";

type Phase = "intro" | "running" | "finished";

export type TimedQuestion = QuizQuestion & { chapterNumber: number };

export interface ChapterLink {
  title: string;
  href: string;
}

interface TimedExamProps {
  startLabel: string;
  restartLabel: string;
  durationMinutes: number;
  negativeMark: number;
  passPercent: number;
  rules: ReactNode;
  bestScore?: MockScore;
  chapterLinks: Record<number, ChapterLink>;
  loadQuestions: () => Promise<TimedQuestion[]>;
  onFinish: (percent: number) => void;
}

const MS_PER_SECOND = 1000;
const LOW_TIME_SECONDS = 5 * 60;
const WEAK_CHAPTER_PERCENT = 60;

function formatClock(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function TimedExam({
  startLabel,
  restartLabel,
  durationMinutes,
  negativeMark,
  passPercent,
  rules,
  bestScore,
  chapterLinks,
  loadQuestions,
  onFinish,
}: TimedExamProps) {
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<TimedQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(durationMinutes * 60);

  const finish = useCallback(
    (finalAnswers: Record<string, number>, finalQuestions: TimedQuestion[]) => {
      const result = scoreTimedTest(finalQuestions, finalAnswers, negativeMark, passPercent);
      onFinish(result.percent);
      setPhase("finished");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [negativeMark, passPercent, onFinish],
  );

  useEffect(() => {
    if (phase !== "running") return;
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.round((deadline - Date.now()) / MS_PER_SECOND));
      setSecondsLeft(remaining);
      if (remaining === 0) {
        window.clearInterval(timer);
        finish(answers, questions);
      }
    }, MS_PER_SECOND);
    return () => window.clearInterval(timer);
  }, [phase, deadline, answers, questions, finish]);

  async function start() {
    setLoading(true);
    const loaded = await loadQuestions();
    setLoading(false);
    setQuestions(loaded);
    setAnswers({});
    setCurrent(0);
    setDeadline(Date.now() + durationMinutes * 60 * MS_PER_SECOND);
    setSecondsLeft(durationMinutes * 60);
    setPhase("running");
  }

  function submit() {
    const unanswered = questions.length - Object.keys(answers).length;
    const prompt =
      unanswered > 0
        ? `${unanswered} question(s) unanswered. Unanswered questions carry no penalty. Submit now?`
        : "Submit your answers?";
    if (window.confirm(prompt)) finish(answers, questions);
  }

  if (phase === "intro") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold">Rules</h2>
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted">
          {rules}
          <li>{durationMinutes} minutes. The test submits itself when time runs out.</li>
          <li>
            +1 for a correct answer, −{negativeMark} for a wrong answer, 0 for unanswered ({negativeMark * 100}%
            negative marking, as in NISM exams).
          </li>
          <li>Pass mark: {passPercent}%.</li>
        </ul>
        {bestScore && (
          <p className="mt-4 text-sm">
            Best so far: <span className="font-semibold">{bestScore.bestPercent}%</span>
            <span className="text-muted">
              {" "}
              · last {bestScore.lastPercent}% · {bestScore.attempts} attempt{bestScore.attempts === 1 ? "" : "s"}
            </span>
          </p>
        )}
        <button
          type="button"
          onClick={start}
          disabled={loading}
          className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-strong disabled:opacity-60"
        >
          {loading ? "Preparing questions…" : startLabel}
        </button>
      </div>
    );
  }

  if (phase === "finished") {
    const result = scoreTimedTest(questions, answers, negativeMark, passPercent);
    const chapters = breakdownByChapter(questions, answers);
    return (
      <div className="flex flex-col gap-6">
        <section
          aria-live="polite"
          className={`rounded-2xl border p-6 ${
            result.passed ? "border-success bg-success-soft" : "border-danger bg-danger-soft"
          }`}
        >
          <p className={`text-sm font-semibold ${result.passed ? "text-success" : "text-danger"}`}>
            {result.passed ? "Pass" : "Fail"}: pass mark is {passPercent}%
          </p>
          <p className="mt-1 text-4xl font-semibold tabular-nums">
            {result.percent}%
            <span className="ml-2 text-xl text-muted">
              ({result.marks} / {questions.length} marks)
            </span>
          </p>
          <dl className="mt-4 grid max-w-md grid-cols-3 gap-3 text-sm">
            <div>
              <dt className="text-muted">Correct</dt>
              <dd className="font-semibold text-success tabular-nums">{result.correct}</dd>
            </div>
            <div>
              <dt className="text-muted">Wrong</dt>
              <dd className="font-semibold text-danger tabular-nums">
                {result.wrong} <span className="font-normal text-muted">(−{result.wrong * negativeMark})</span>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Skipped</dt>
              <dd className="font-semibold tabular-nums">{result.unanswered}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={start}
            disabled={loading}
            className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
          >
            {restartLabel}
          </button>
        </section>

        <section aria-labelledby="chapter-breakdown" className="rounded-2xl border border-border bg-surface p-5">
          <h2 id="chapter-breakdown" className="font-semibold">
            Score by chapter
          </h2>
          <p className="mt-1 text-sm text-muted">Weakest first. Revise chapters below {WEAK_CHAPTER_PERCENT}%.</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {chapters.map((entry) => {
              const percent = Math.round((entry.correct / entry.total) * 100);
              const weak = percent < WEAK_CHAPTER_PERCENT;
              const link = chapterLinks[entry.chapterNumber];
              return (
                <li key={entry.chapterNumber} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 text-sm">
                  {link ? (
                    <Link href={link.href} className="truncate hover:underline">
                      {entry.chapterNumber}. {link.title}
                    </Link>
                  ) : (
                    <span>Chapter {entry.chapterNumber}</span>
                  )}
                  <span className={`tabular-nums ${weak ? "font-semibold text-danger" : "text-muted"}`}>
                    {entry.correct}/{entry.total}
                  </span>
                  <div className="col-span-2 h-1.5 overflow-hidden rounded-full bg-surface-muted" aria-hidden>
                    <div
                      className={`h-full rounded-full ${weak ? "bg-danger" : "bg-success"}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <h2 className="text-lg font-semibold">Review answers</h2>
        <ReviewList
          questions={questions}
          answers={answers}
          renderMeta={(question) => `Chapter ${question.chapterNumber}`}
        />
      </div>
    );
  }

  const question = questions[current];
  const isLowTime = secondsLeft <= LOW_TIME_SECONDS;

  return (
    <div className="flex flex-col gap-5">
      <div className="sticky top-14 z-10 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted">
            Answered{" "}
            <span className="font-semibold text-foreground tabular-nums">{Object.keys(answers).length}</span> of{" "}
            {questions.length}
          </span>
          <span
            role="timer"
            aria-label="Time remaining"
            className={`rounded-md px-2 py-1 font-mono text-sm font-semibold tabular-nums ${
              isLowTime ? "bg-danger-soft text-danger" : "bg-surface-muted"
            }`}
          >
            {formatClock(secondsLeft)}
          </span>
        </div>
        <QuestionPalette questions={questions} answers={answers} current={current} onJump={setCurrent} />
      </div>

      <QuestionCard
        question={question}
        position={current + 1}
        total={questions.length}
        selected={answers[question.id]}
        onSelect={(optionIndex) => setAnswers((previous) => ({ ...previous, [question.id]: optionIndex }))}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setCurrent((index) => Math.max(0, index - 1))}
            disabled={current === 0}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-surface-muted disabled:opacity-40"
          >
            ← Previous
          </button>
          {answers[question.id] !== undefined && (
            <button
              type="button"
              onClick={() =>
                setAnswers((previous) => {
                  const next = { ...previous };
                  delete next[question.id];
                  return next;
                })
              }
              className="rounded-lg px-3 py-2 text-sm text-muted hover:text-foreground"
            >
              Clear answer
            </button>
          )}
        </div>
        <div className="flex gap-2">
          {current < questions.length - 1 && (
            <button
              type="button"
              onClick={() => setCurrent((index) => index + 1)}
              className="rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90"
            >
              Next →
            </button>
          )}
          <button
            type="button"
            onClick={submit}
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent-strong"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
