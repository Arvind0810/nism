# NISM Prep

Study app for the NISM Investment Adviser certifications: Series X-A (Level 1) and Series X-B (Level 2). Each exam has chapter-by-chapter video lessons, a practice test per chapter with explanations, and a timed mock exam with NISM-style negative marking. Progress is saved in the browser, separately for each exam.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Routes

| Route | Page |
|---|---|
| `/` | All certifications |
| `/[exam]` | Exam overview: progress, exam pattern, syllabus (e.g. `/xa`) |
| `/[exam]/chapters` | All chapters of an exam |
| `/[exam]/chapters/[slug]` | Chapter videos and key topics |
| `/[exam]/chapters/[slug]/test` | Chapter test |
| `/[exam]/formulas` | Formula sheet (searchable, printable) |
| `/[exam]/practice` | Fixed, timed practice sets |
| `/[exam]/practice/[set]` | One practice set |
| `/[exam]/mock-test` | Timed mock exam (random questions each attempt) |
| `/[exam]/videos/[id]` | Standalone videos (intro, case studies, revision) |

Old single-exam URLs (`/chapters/...`, `/mock-test`, `/videos/...`) redirect to `/xa/...` (see `next.config.ts`).

## Data layout

```
src/data/
├── types.ts              # Exam, Module, Chapter, Video, Question types
└── exams/
    ├── index.ts          # exam registry + helpers (metadata only, safe for client components)
    ├── questions.ts      # lazy per-exam question-bank loaders
    ├── formulas.ts       # lazy per-exam formula-sheet loaders
    ├── practice.ts       # per-exam practice-set catalogues
    ├── xa/
    │   ├── course.ts     # X-A modules, chapters, videos, exam pattern
    │   ├── questions/    # chapter-01.ts … chapter-20.ts + index.ts
    │   ├── formulas.ts   # formula sheet
    │   └── practice/     # set-1.ts … set-6.ts + index.ts (catalogue)
    └── xb/
        └── course.ts     # placeholder (status: "coming-soon")
```

## Adding an exam (e.g. filling in X-B)

1. **Course data:** in `src/data/exams/xb/course.ts`, fill in `modules` (number, title, marks), `chapters` (slug, title, summary, topics, videos), `pattern` (question count, marks, duration, pass %, negative marking) and `mock` (question count, minutes). Add `playlistUrl`, `introVideo`, `practiceVideos` and `sourceNote` if you have them.
2. **Questions:** create `src/data/exams/xb/questions/chapter-NN.ts` files exporting `chapterNNQuestions: Question[]`, plus an `index.ts` exporting `questionsByChapter: QuestionBank` (copy the X-A layout).
3. **Register the bank:** add `xb: () => import("./xb/questions").then((bank) => bank.questionsByChapter)` to `questionBankLoaders` in `src/data/exams/questions.ts`.
4. **Go live:** set `status: "available"`. The overview, chapter, test, mock and video routes are generated automatically, and the exam appears in the header and on the home page.

A brand-new exam follows the same steps, plus adding its object to the `exams` array in `src/data/exams/index.ts`.

## Content sources

X-A questions are based on the NISM Series X-A workbook (February 2025), updated for later SEBI/RBI changes up to November 2026. Where a rule changed after the workbook, the explanation includes a note saying what the workbook said.
