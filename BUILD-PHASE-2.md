# khouding — Build Phase 2 Brief

> Paste this into a fresh build session. Read the docs listed below before writing any code.
> Phase 1 (scaffold, frontend screens, content ingester) is complete. This brief picks up from there.

---

## Read these first

1. `tasks/70-architecture.md` — source of truth. §6 (data model), §7b (auth decisions), §7 (phasing).
2. `conventions/10-secrets-and-config.md` — CRITICAL. All secrets via .NET User Secrets locally.
3. `BUILD-START.md` — the original brief, for full context on the stack and decisions already made.

---

## What is already built (do not rebuild)

### Frontend (`frontend/`)
- Full React + TypeScript + Vite app, all screens built and wired to the real API:
  - Landing, Auth (UI only — no real auth calls yet), Catalog, CourseHome, SectionView, CodingScreen, ContentsNav sidebar, CourseMap (Austria SVG)
  - `src/api/client.ts` — `useFetch` hook + typed fetch helpers
  - `src/api/types.ts` — TypeScript types matching backend manifest shapes
  - `src/api/mappers.ts` — `ApiCourse → CourseNav`, `ApiSection → SectionData`
  - Theme toggle (dark default, light), syntax-highlighted code blocks in reading

### Backend (`backend/`)
- ASP.NET Core minimal API, port 5050
- **Content ingester** (`Content/ContentIngester.cs`) — runs at startup, parses `courses/` tree into an in-memory manifest (9 chapters, 47 sections, 536 problems for C# Basics)
- Content endpoints: `GET /api/courses`, `GET /api/courses/:id`, `GET /api/courses/:id/sections/:sectionId`, `GET /api/courses/:id/sections/:sectionId/problems/:problemId`
- Submission stub: `POST /api/submissions` + `GET /api/submissions/:id` (returns fake verdicts — not wired to Judge0 yet)
- **No auth, no database, no progress** — that is Phase 2

### Execution adapter (`execution/`)
- Scaffolded ASP.NET Core minimal API, port 5051
- `/run` stub endpoint — the Judge0 wiring is not done yet

### Infrastructure
- `docker-compose.yml` — Postgres 16, port 5432, named volume `pgdata`
- `.env` / `.env.example` — DB credentials (gitignored)

### Content
- `courses/csharp-basics/` — fully authored C# Basics course (9 chapters, 45+ sections, 536 problems)
- `courses/csharp-basics/course.yaml` — course-level metadata including Austria province mapping
- `section.yaml` files exist for Ch.1 sections (1.1–1.5); other sections fall back to slug-derived titles

---

## What Phase 2 must build

### Priority order

#### 1. Database schema + migrations
Create the Postgres schema that mirrors the content tree by reference (never stores content):

```sql
-- users (ASP.NET Core Identity manages this table, but confirm shape)
-- AspNetUsers, AspNetRoles, etc. (Identity standard tables)

-- progress: per user, per content ID
CREATE TABLE progress (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     text NOT NULL REFERENCES "AspNetUsers"("Id"),
  course_id   text NOT NULL,   -- e.g. "csharp-basics"
  section_id  text,            -- e.g. "csharp-basics/1.3-number-variables" (nullable = course-level)
  problem_id  text,            -- e.g. "csharp-basics/1.3-number-variables/p07-sum-two-ints"
  kind        text NOT NULL,   -- "reading_done" | "quiz_passed" | "problem_solved"
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- submissions: per user, per problem
CREATE TABLE submissions (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     text NOT NULL REFERENCES "AspNetUsers"("Id"),
  problem_id  text NOT NULL,
  course_id   text NOT NULL,
  section_id  text NOT NULL,
  language    text NOT NULL,
  code        text NOT NULL,
  kind        text NOT NULL,   -- "run" | "submit"
  status      text NOT NULL,   -- "passed" | "failed" | "compile_error" | "error"
  result_json text,            -- full verdict JSON
  created_at  timestamptz NOT NULL DEFAULT now()
);
```

Use EF Core with migrations OR raw SQL — the architecture leaves this open. EF Core is the natural fit for Identity.

#### 2. ASP.NET Core Identity + cookie sessions
Per `tasks/70-architecture.md` §7b:
- `AddIdentity<IdentityUser, IdentityRole>()` with Postgres via EF Core (`Npgsql.EntityFrameworkCore.PostgreSQL`)
- Cookie-based sessions (NOT JWT) — `app.UseAuthentication()` + `app.UseAuthorization()`
- Email/password registration + login endpoints
- Google OAuth (`Microsoft.AspNetCore.Authentication.Google`)
- GitHub OAuth (`AspNet.Security.OAuth.GitHub`)
- **Link-by-verified-email**: if social provider's verified email matches an existing account, attach — don't create a duplicate
- Secrets via .NET User Secrets (see `conventions/10-secrets-and-config.md`):
  - `ConnectionStrings:Postgres`
  - `Authentication:Google:ClientId` + `ClientSecret`
  - `Authentication:GitHub:ClientId` + `ClientSecret`

Endpoints needed:
```
POST /api/auth/register        { email, password }
POST /api/auth/login           { email, password }
POST /api/auth/logout
GET  /api/auth/me              → { id, email, displayName } or 401
GET  /api/auth/providers       → available OAuth providers
GET  /api/auth/login/google    → redirect to Google
GET  /api/auth/callback/google → handle callback
GET  /api/auth/login/github    → redirect to GitHub
GET  /api/auth/callback/github → handle callback
```

#### 3. Progress API
Once a user exists, track their progress:

```
GET  /api/progress/:courseId                → course-level rollup
POST /api/progress/reading-done             { courseId, sectionId }
POST /api/progress/quiz-passed              { courseId, sectionId }
POST /api/progress/problem-solved           { courseId, sectionId, problemId }
```

The frontend needs this to populate `solvedProblems`, `readingDone`, `quizPassed` on `SectionNav` (currently all zero/false). The mapper in `src/api/mappers.ts` already has the right shape — it just needs real data.

#### 4. Real submission grading (execution adapter → Judge0)
Wire `execution/Program.cs` to hosted Judge0:

The contract (architecture §3):
```
POST /run  { language, files[], stdin } → { stdout, stderr, exitCode, timeMs, memKb, status }
```

Judge0 language ID for C#: `51` (C# Mono) or `86` (C# .NET) — check current hosted API.

Judge0 API shape:
```
POST https://judge0-ce.p.rapidapi.com/submissions?wait=false
  → { token }
GET  https://judge0-ce.p.rapidapi.com/submissions/{token}
  → { stdout, stderr, status: { id, description }, time, memory }
```

Secrets needed: `Judge0:BaseUrl` + `Judge0:ApiKey` via .NET User Secrets in `execution/`.

The backend's `POST /api/submissions` currently uses a stub. Once the execution adapter is wired, replace the stub with:
1. Build the files + stdin payload from the manifest (real test cases from `expected.json`)
2. POST to `execution/run`
3. For `submit`: run all N test cases, compare stdout to `expected`, apply grading semantics (CRLF→LF normalise, then exact match)
4. Return first failing case with input + expected + actual

#### 5. Frontend auth wiring
The auth UI (`src/pages/Auth/Auth.tsx`) is built but calls no real endpoints. Wire it:
- Login form → `POST /api/auth/login`
- Register form → `POST /api/auth/register`
- Forgot password → stub is fine for now (email sending is later)
- Social buttons → redirect to `/api/auth/login/google` and `/api/auth/login/github`

The Nav (`src/components/Nav/Nav.tsx`) has `USE_MOCK_AUTH = false` hardcoded. Replace with a real `useAuth` hook that calls `GET /api/auth/me` on mount — if it returns a user, show avatar + menu; if 401, show "Log in".

The progress API calls need to be added to SectionView (mark reading done when user clicks "Got it → Quiz") and CodingScreen (mark problem solved on passed submit).

---

## Key decisions already made (do not revisit)

- **Cookie sessions, not JWT** — frontend and backend are one app, no cross-service token sharing needed
- **Link-by-verified-email** — one account, many login methods
- **No HTTPS redirect in local dev** — HTTP only via `dotnet run`
- **ContentRoot = `../courses`** in `appsettings.Development.json` — the ingester path is already set
- **Postgres in Docker Compose** — `docker compose up` starts it; connection string via User Secrets
- **Judge0 stays hosted** in Phase 1 — no local Judge0 container

---

## Local dev startup sequence

```powershell
# 1. Postgres
docker compose up -d

# 2. Backend (stop any running instance first)
cd backend
dotnet run

# 3. Execution adapter (only needed once Judge0 is wired)
cd execution
dotnet run

# 4. Frontend
cd frontend
pnpm dev
```

Backend listens on `http://localhost:5050`. Frontend on `http://localhost:5173` (Vite proxies `/api/*` to `:5050`).

---

## NuGet packages to add to `backend/`

```
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.AspNetCore.Authentication.Google
dotnet add package AspNet.Security.OAuth.GitHub
```

---

## Files to know before touching auth

| File | Why |
|---|---|
| `backend/Program.cs` | All routes and service registration live here |
| `backend/Content/ContentIngester.cs` | Runs at startup — do not break this |
| `backend/appsettings.Development.json` | Has `ContentRoot = ../courses` |
| `backend/appsettings.Example.json` | Add new secret key names here (never values) |
| `conventions/10-secrets-and-config.md` | How to add secrets correctly |
| `frontend/src/components/Nav/Nav.tsx` | Has `USE_MOCK_AUTH = false` — replace with real hook |
| `frontend/src/pages/Auth/Auth.tsx` | Auth UI is built, needs real fetch calls |
| `frontend/src/api/client.ts` | The fetch wrapper — add auth calls here or alongside |
| `frontend/src/api/mappers.ts` | `apiCourseToNav` sets `solvedProblems: 0` — replace with real progress |

---

## What NOT to do

- Do not use JWT — cookie sessions only
- Do not store course content in the database — the ingester manifest is the source
- Do not commit secrets — User Secrets locally, env vars in prod
- Do not break the content ingester — it runs at startup and the whole API depends on it
- Do not run Judge0 locally — the execution adapter points at the hosted API
