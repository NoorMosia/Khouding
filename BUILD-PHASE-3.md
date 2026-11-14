# khouding — Build Phase 3 Brief

> Paste this into a fresh build session. Read the docs listed below before writing any code.
> Phase 1 (scaffold, frontend, content ingester) and Phase 2 (auth, database, real grading) are complete.
> This brief picks up from there.

---

## Read these first

1. `tasks/70-architecture.md` — source of truth. §6 (data model), §7b (auth decisions), §5 (content schema).
2. `conventions/10-secrets-and-config.md` — CRITICAL. All secrets via .NET User Secrets locally.
3. `BUILD-PHASE-2.md` — what Phase 2 built, for full context.

---

## What is already built (do not rebuild)

### Backend (`backend/`)
- ASP.NET Core minimal API, port 5050
- **Auth**: ASP.NET Core Identity, cookie sessions, email/password + Google/GitHub OAuth (link-by-verified-email)
- **Content endpoints**: `GET /api/courses`, `/api/courses/:id`, `/api/courses/:id/sections/:sectionId`, `/api/courses/:id/sections/:sectionId/problems/:problemId`
- **Progress endpoints**: `GET /api/progress/:courseId`, `POST /api/progress/reading-done`, `POST /api/progress/quiz-passed`, `POST /api/progress/problem-solved`
- **Submission endpoints**: `POST /api/submissions`, `GET /api/submissions/:id` — real grading via Judge0 CE
- **Grading**: `backend/Execution/GradingService.cs` — exact stdout match, CRLF normalised, failing case returned
- **Execution client**: `backend/Execution/ExecutionClient.cs` — calls the execution adapter at `ExecutionService:BaseUrl`

### Execution adapter (`execution/`)
- ASP.NET Core minimal API, port 5051
- `POST /run { language, files[], stdin }` — wired to hosted Judge0 CE (`ce.judge0.com`)
- C# language ID 51 (Mono). Secrets: `Judge0:BaseUrl` via User Secrets.

### Database (Neon hosted Postgres)
- Migrations applied. Tables: `AspNetUsers` (Identity), `Progress`, `Submissions`
- `ConnectionStrings:Postgres` set via .NET User Secrets (pooler endpoint)
- Schema: `backend/Data/AppDbContext.cs`, `backend/Data/DataModels.cs`
- Migrations: `backend/Data/Migrations/`

### Frontend (`frontend/`)
- React + TypeScript + Vite, port 5173
- `src/context/AuthContext.tsx` — `useAuth` hook, session restored on mount via `GET /api/auth/me`
- `src/api/client.ts` — `useFetch`, typed helpers, `progress` API object (`markReadingDone`, `markQuizPassed`, `markProblemSolved`)
- `src/api/mappers.ts` — `apiCourseToNav`, `apiSectionToData` — **progress fields still hardcoded to 0/false** (the main Phase 3 task)
- `src/pages/CodingScreen/CodingScreen.tsx` — fires `markProblemSolved` on passed submit
- `src/pages/SectionView/SectionView.tsx` — fires `markReadingDone` and `markQuizPassed`
- `src/components/StdinFields/` — structured per-line stdin inputs for Run mode

### Content
- `courses/csharp-basics/` — 9 chapters, 47 sections, 536 problems
- `section.yaml` files exist for Ch.1 sections (1.1–1.5); other sections fall back to slug-derived titles

---

## What Phase 3 must build

### Priority order

#### 1. Progress flowing into ContentsNav (highest value)

The progress API exists and fires correctly, but the frontend mapper still hardcodes `solvedProblems: 0`, `readingDone: false`, `quizPassed: false`. The ContentsNav sidebar shows everything as zero.

**What needs to happen:**

In `src/api/mappers.ts`, `apiCourseToNav` currently sets:
```ts
solvedProblems: 0,   // user progress — not yet served by backend
readingDone:    false,
quizPassed:     false,
```

The fix: after fetching the course manifest, also fetch `GET /api/progress/{courseId}` (if logged in), then pass the progress data into `apiCourseToNav` so it can populate real values.

The progress API returns:
```ts
{
  courseId: string,
  sections: Record<string, {
    readingDone:    boolean,
    quizPassed:     boolean,
    solvedProblems: number,
  }>
}
```

The section keys match the section IDs used in the mapper (e.g. `"1.3-number-variables"`).

`apiCourseToNav` signature needs to become:
```ts
apiCourseToNav(course: ApiCourse, sectionProgress?: Record<string, SectionProgress>): CourseNav
```

The `CourseNav.progressPct` field should also be computed from real data: `solvedProblems` across all sections divided by the total `lightsAt` threshold sum.

**Files to change:**
- `src/api/mappers.ts` — accept optional progress param, use it in the mapper
- `src/api/client.ts` — `progress.get` already exists, just needs calling
- Wherever `apiCourseToNav` is called (likely `src/pages/CourseHome/CourseHome.tsx` and `src/components/ContentsNav/ContentsNav.tsx`) — fetch progress alongside the course manifest and pass it in

#### 2. In-progress code saving (architecture §8.4)

Architecture §8.4 says: "In-progress edits saved server-side (per user, per problem) as part of the foundation."

Currently the editor starts fresh from the manifest starter code every time. If a student partially solves a problem and navigates away, their work is lost.

**Backend:**
Add two endpoints:
```
GET  /api/drafts/:courseId/:sectionId/:problemId   → { code } or 404
PUT  /api/drafts/:courseId/:sectionId/:problemId   { code }  → 204
```

Add a `Drafts` table to the database:
```sql
CREATE TABLE drafts (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     text NOT NULL REFERENCES "AspNetUsers"("Id"),
  problem_id  text NOT NULL,
  language    text NOT NULL DEFAULT 'csharp',
  code        text NOT NULL,
  updated_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, problem_id, language)
);
```

Add an EF Core migration for the new table.

**Frontend:**
In `CodingScreen.tsx`:
- On mount (after problem loads): `GET /api/drafts/:courseId/:sectionId/:problemId` — if 200, use that code instead of the starter
- On code change (debounced ~1s): `PUT /api/drafts/...` with current code — fire and forget, only if logged in

#### 3. OAuth credentials

Google and GitHub OAuth buttons exist in the UI but the client IDs are not set — clicking them will error. Register OAuth apps and add the secrets:

```powershell
# Google
dotnet user-secrets set "Authentication:Google:ClientId" "..." --project backend
dotnet user-secrets set "Authentication:Google:ClientSecret" "..." --project backend

# GitHub
dotnet user-secrets set "Authentication:GitHub:ClientId" "..." --project backend
dotnet user-secrets set "Authentication:GitHub:ClientSecret" "..." --project backend
```

Callback URLs for local dev:
- Google: `http://localhost:5050/api/auth/callback/google`
- GitHub: `http://localhost:5050/api/auth/callback/github`

This is a manual step (OAuth app registration), not a code task.

#### 4. Section titles for chapters 2–9

Only Ch.1 sections have `section.yaml` files — chapters 2–9 fall back to slug-derived titles (e.g. `"2.1-variables-and-types"` becomes `"Variables And Types"`). The titles are readable but not polished.

This is a content authoring task, not a code task. Add `section.yaml` files for each section following the Ch.1 pattern:
```yaml
title: "Human-readable title"
subtitle: "One-line subtitle"
map_name: "Map pin label"
lights_at: 9
```

---

## Key decisions already made (do not revisit)

- **Cookie sessions, not JWT**
- **Link-by-verified-email** for OAuth
- **Progress is fire-and-forget** — if the user is not logged in, progress calls silently skip (401 returns void in `apiPost`)
- **Submissions table exists** but is not yet written to — the in-memory `ConcurrentDictionary` in `Program.cs` handles active submissions; persisting them to Neon is a future task
- **Judge0 stays hosted** — `ce.judge0.com` for dev, switch to RapidAPI when moving toward prod

---

## Local dev startup sequence

```powershell
# 1. Execution adapter
cd execution
dotnet run

# 2. Backend
cd backend
dotnet run

# 3. Frontend
cd frontend
pnpm dev
```

Backend: `http://localhost:5050`. Execution adapter: `http://localhost:5051`. Frontend: `http://localhost:5173` (Vite proxies `/api/*` to `:5050`).

---

## Files to know before touching anything

| File | Why |
|---|---|
| `backend/Program.cs` | All routes and service registration |
| `backend/Data/AppDbContext.cs` | EF Core context — add new DbSets here |
| `backend/Data/DataModels.cs` | Entity classes |
| `backend/Data/Migrations/` | EF Core migrations — add new ones with `dotnet ef migrations add` |
| `backend/Execution/GradingService.cs` | Grading logic |
| `backend/Progress/ProgressEndpoints.cs` | Progress API endpoints |
| `backend/Auth/AuthEndpoints.cs` | Auth endpoints |
| `frontend/src/api/mappers.ts` | `apiCourseToNav` — main target for task 1 |
| `frontend/src/api/client.ts` | `progress.get` already here, `drafts` API to be added |
| `frontend/src/context/AuthContext.tsx` | `useAuth` hook |
| `frontend/src/pages/CodingScreen/CodingScreen.tsx` | Editor — target for draft save/restore |
| `frontend/src/components/ContentsNav/ContentsNav.tsx` | Sidebar — consumes `CourseNav` |
| `frontend/src/pages/CourseHome/CourseHome.tsx` | Calls `apiCourseToNav` |

---

## What NOT to do

- Do not use JWT — cookie sessions only
- Do not store course content in the database
- Do not commit secrets
- Do not run `db.Database.Migrate()` on startup — migrations are run manually with `dotnet ef database update`
- Do not break the content ingester
- Do not run Judge0 locally
