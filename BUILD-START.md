# khouding — Build Start Brief

> Paste this into a fresh build session before writing any code.
> This project has extensive prior thinking. Read the docs listed below BEFORE making any decisions.
> Do not invent architecture — it is already decided. Fill in implementation detail freely; flag contradictions.

---

## Read these first (in this order)

1. `tasks/70-architecture.md` — **the full technical spec.** Stack, deployment shape, every load-bearing decision with its reasoning. This is the source of truth. Do not contradict it without flagging why.
2. `design/01-ui-summary.md` — the UI design handoff. Identity, screens, component decisions.
3. `design/00-structure.md` — page/navigation structure and the two-map distinction.
4. `tasks/20-backend.md` — backend build checklist.
5. `tasks/10-frontend.md` — frontend build checklist.
6. `conventions/10-secrets-and-config.md` — **CRITICAL.** How secrets and config are handled. Read before touching any credentials or environment setup.

**Visual references:** `design/mockups/` (fidelity-2 HTML mockups for every screen).
**Real content:** `courses/csharp-basics/` (a fully authored course — real problems, solutions, expected outputs).
**Content format spec:** `tasks/70-architecture.md` §5 and `courses/AUTHORING-GUIDE.md`.

---

## The stack (decided, do not change)

| Layer | Choice |
|---|---|
| Frontend | React + TypeScript (Vite) |
| Backend / API | ASP.NET Core minimal API (C#) |
| Execution adapter | Separate C# service (the Judge0 adapter) |
| Database | Postgres |
| Code runner | Judge0 — **hosted API for Phase 1** (self-hosted later) |
| Editor | Monaco (code-split, loads only on the coding screen) |

---

## Monorepo layout

```
khouding/
  frontend/          ← React + TS (Vite)      [CREATE]
  backend/           ← ASP.NET Core API        [CREATE]
  execution/         ← C# Judge0 adapter       [CREATE]
  courses/           ← content (already exists, do not restructure)
  design/            ← mockups + brand (already exists, read-only)
  tasks/             ← build checklists (already exists, read-only)
  conventions/       ← standing rules (already exists, read-only)
  docker-compose.yml ← Postgres for local dev  [CREATE]
  .gitignore         ← [CREATE — see secrets rule below]
```

---

## The two security rules that must be in place from commit #1

1. **`.gitignore` before any secrets exist on disk.** Cover: `.env*`, `appsettings.*.local.json`, `*secrets*`, `*.pfx`, `*.p12`. If in doubt, read `conventions/10-secrets-and-config.md`.
2. **Local secrets via .NET User Secrets** (backend + execution), not committed files. Frontend `.env.local` for non-secret config only. Real secrets never reach the browser.

---

## First task: scaffold + local dev baseline

Do these in order. Each one is a prerequisite for the next.

### Step 1 — monorepo scaffold
- Create `frontend/`, `backend/`, `execution/` with the right project templates:
  - `frontend/`: `npm create vite@latest . -- --template react-ts`
  - `backend/`: `dotnet new webapi -minimal`
  - `execution/`: `dotnet new webapi -minimal`
- Create `.gitignore` covering secrets, build artifacts, and `node_modules`.
- Confirm the repo root structure matches the layout above.

### Step 2 — `docker-compose.yml` (Postgres for local dev)
- One Postgres service, a named volume, a `.env` file for the DB credentials (gitignored).
- Confirm `docker compose up` starts cleanly and Postgres is reachable.
- **Do NOT run Judge0 locally.** The execution adapter points at the hosted Judge0 API in Phase 1. No local Judge0 container.

### Step 3 — verify the baseline
- `docker compose up` → Postgres running.
- `dotnet run` in `backend/` → API responds on its port.
- `npm run dev` in `frontend/` → React dev server running.
- The three processes talk to each other (health check endpoint on the backend, frontend can reach it).

**After the baseline is green, move to the first real screen.**

---

## Build order (decided — do not reorder without good reason)

1. **Coding screen** — the heart of the product, highest risk, most novel. Reference: `design/mockups/coding-screen.html`.
2. **Section view** — the learning loop template (reading → quiz → problems). Reference: `design/mockups/section-view.html`.
3. **Contents view** — the navigation backbone (must be excellent day one). Reference: `design/mockups/contents-view.html`.
4. **Course map** — the signature identity (can iterate). Reference: `design/mockups/course-map.html`.
5. **Surrounding pages** — catalog, landing, auth, profile. References: `design/mockups/surrounding-pages.html`, `design/mockups/auth.html`.

---

## Key decisions to carry into every build decision

**Execution:**
- The execution adapter is a **separate deployable** (not a library inside the backend).
- It exposes one internal contract: `run({ language, files[], stdin }) → { stdout, stderr, exitCode, timeMs, status }`.
- It is the **only thing in the whole system that knows Judge0 exists**. The backend calls the adapter; it never calls Judge0 directly.
- Switching from hosted to self-hosted Judge0 = changing a URL in config. Nothing else moves.

**Submission flow:**
- Async, always. Backend accepts a run/submit → returns a submission ID immediately → frontend polls `GET /submissions/{id}` until verdict is ready.
- One code path for both Run (single execution, no grading) and Submit (N test cases + compare to oracle).

**Content:**
- Content lives in **files** (`courses/`), not in the database.
- A **build-time ingest step** parses the `courses/` tree into a manifest the API serves.
- The database holds **user data only** (progress, submissions, accounts). It never holds course content.
- The ingester reads `problem.yaml` (inputs), `expected.json` (oracle outputs — CLI-generated, never hand-authored), `quiz.yaml`, `reading.md`, `cheatsheet.md`, `starter.<lang>`, `solution.<lang>`.

**Auth:**
- ASP.NET Core Identity, cookie sessions (not JWT).
- Email/password + Google + GitHub (social login via Identity external login support).
- Link-by-verified-email: if an external provider's verified email matches an existing account, attach — don't create a duplicate.

**Monaco (coding screen):**
- One editor instance, multiple models (one per file), tabbed.
- Cheatsheet is a **rendered Markdown panel beside the editor** — NOT a Monaco tab.
- Provided scaffolding (read-only files) = real Monaco models with `readOnly: true`.
- No language server, no IntelliSense, no autocomplete. Syntax highlighting only.
- Code-split: Monaco loads only on the coding screen, never in the initial bundle.

**Completion:**
- Section: lights at its own `lights_at` threshold (~60% of its problems). Read from the manifest, not hardcoded.
- Chapter test / course exam: ~60% of the pooled draw. ~24h attempt window. No lockouts.

---

## What to decide freely (implementation detail)
These are genuinely open and you should just pick and move:
- Exact API endpoint paths (e.g. `/api/courses/{id}` vs `/courses/{id}`)
- Exact database column names and table structure (mirror the content tree)
- React component breakdown and file structure within `frontend/`
- CSS approach (Tailwind, CSS modules, plain CSS variables — the mockups use CSS custom properties)
- Exact error message wording
- Logging and monitoring setup

**Rule:** if a decision *contradicts* something in `tasks/70-architecture.md` or the mockups, flag it and explain why. If it's filling in a blank the docs leave open, decide it and keep building.

---

## What NOT to do
- Do not add a language server, IntelliSense, or autocomplete to the editor.
- Do not make the backend call Judge0 directly — always go through the execution adapter.
- Do not store course content (readings, problems, solutions) in the database.
- Do not use JWT for auth — use cookie sessions.
- Do not run Judge0 locally — the adapter points at the hosted API.
- Do not commit secrets — read `conventions/10-secrets-and-config.md` first.
- Do not restructure `courses/` — it is authored content, not build output.

---

## Useful reference: the content file shape (what the ingester reads)

```
courses/<course-id>/
  course.yaml                    ← course metadata (id, title, status, country, chapter mapping)
  sections/
    <section-id>/
      reading.md                 ← student-facing reading (no analogies; every snippet has an output block)
      quiz.yaml                  ← quiz source of truth
      quiz.md                    ← human mirror (not parsed)
      cheatsheet.md              ← rendered as a Markdown panel (not a Monaco tab)
      problems/
        <problem-id>/
          problem.yaml           ← source of truth: grading type, languages, file lists, test inputs+notes
          expected.json          ← GENERATED by authoring CLI; never hand-edit; oracle outputs per case
          starter.<lang>         ← pre-seeded file(s) the student edits
          solution.<lang>        ← reference solution (the oracle)
          design.md              ← human doc (not parsed)
          tests.md               ← human mirror (not parsed)
    <chapter>.T-chapter-test/
      test.yaml                  ← kind, draw, light_at, window_hours, pool (problem IDs)
      cheatsheets/               ← gathered section sheets
      pool/
        <problem-id>/            ← same shape as a section problem
```

**Working example of every file type:** `courses/csharp-basics/sections/4.2-the-if-statement/`
