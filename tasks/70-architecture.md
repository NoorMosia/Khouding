# Architecture

> The stack, deployment shape, and the content↔code contract for khouding.com.
> Companion to `VISION.md` (why/what) and the task files (what-to-do). This is the *how-it-runs*.
> Resolves `90-crosscutting.md` §6.

---

## 0. The forces that drove every choice

- **Solo developer.** Optimize for "one person holding it all in their head," not for team scale. Few moving parts, boring tech, minimal ops.
- **Languages on hand: JS and C#.** The stack uses exactly these two, nothing to learn.
- **"Two worlds" security model (VISION §6).** Execution (untrusted code) and data (users) never share a network path. The architecture must keep that honest, especially once Judge0 is self-hosted.
- **Depth is the brand.** Course content is reviewed like code → content lives in version control, not a database.
- **The real scaling pressure is code execution, not the API.** Everything else is thin.

---

## 1. The shape, three deployable units

```
                    ┌─────────────────────────┐
                    │   Frontend (React+TS)    │
                    │   Monaco · section flow  │
                    │   personal course map    │
                    └───────────┬─────────────┘
                                │ HTTPS (our own API)
                                ▼
         WORLD B (data)  ┌──────────────────────────┐
         ─────────────   │   Backend / API          │
                         │   (ASP.NET Core, C#)      │
                         │   auth · content · progress │
                         │   submissions             │
                         └───┬───────────────┬──────┘
                             │               │
                   reads     │               │  our internal
                  content    │               │  "run code" contract
                  (files)    ▼               ▼
              ┌──────────────────┐   ┌─────────────────────────┐
              │  courses/ tree    │   │  Execution service       │
              │  (source of truth,│   │  = Judge0 ADAPTER (C#)    │  WORLD A
              │   ingested at     │   │  the ONLY thing that      │  (untrusted
              │   build time)     │   │  knows Judge0 exists      │   code)
              └──────────────────┘   └───────────┬─────────────┘
                                                  │ Judge0 HTTP JSON API
                          ┌───────────┐  Postgres │ (config/URL = hosted → self-hosted)
          user data ◄────►│ Postgres  │           ▼
          only            │ (World B) │   ┌─────────────────────┐
                          └───────────┘   │ Judge0              │
                                          │ Phase 1: hosted API │
                                          │ Phase 2: self-hosted│
                                          │ on SEPARATE infra   │
                                          └─────────────────────┘
```

Three units because the vision's security model demands physical separation between the thing that runs untrusted code and the thing that holds user data. Keeping the execution service a **separate deployable** (not a library inside the backend) is what makes the Phase 1 → Phase 2 cutover a config change rather than a rewrite.

---

## 2. The stack

| Layer | Choice | Why |
|---|---|---|
| **Frontend** | **React + TypeScript** (Vite) | Monaco is a first-class citizen; TS keeps a solo dev honest; the JS half of the toolkit. |
| **Map geodata** | **d3-geo + GeoJSON, a BUILD-TIME dependency** (resolves UXChanges #2) | Province paths are projected + simplified from GeoJSON into inline SVG **at build/ingest time** (into the manifest), not in the browser. Proven: ~12 KB inline SVG, **zero runtime JS**. So d3-geo lives in the generator/ingester, and the runtime frontend may ship **no d3 at all**, it just renders precomputed SVG. Dovetails with build-time ingestion (§4). Needs a seeded/deterministic projection so a course's map is stable between builds. |
| **Backend / API** | **ASP.NET Core minimal API (C#)** | Fast, one language shared with the course domain, excellent Postgres story. |
| **Execution service** | **Separate C# service**, the Judge0 adapter | Same language, *separate deployable*, so it can be physically isolated later. |
| **Database** | **Postgres** | Relational tree + user data. Holds **user data only**, never content. |
| **Content** | **Files in `courses/`** | Version-controlled, diffable, AI-draftable, reviewed like code. |
| **Code runner** | **Judge0** | Hosted API first (Phase 1) → self-hosted on separate infra (Phase 2). |

### Frontend performance, load time & the language-feature staircase
- **React itself is not the cost.** Lean React app ≈ a couple hundred KB gzipped; interactive in well under a second. The cost is total JS to download+parse+run.
- **Monaco is heavy** (~2–5 MB, it's the VS Code editor engine, an order of magnitude bigger than the whole React app). **Decision: code-split Monaco** so it loads *only* on the problem-solving screen. Landing, catalog, map, readings stay lean and fast. A brief load when opening the editor is expected and acceptable (like opening an IDE). This is the main frontend perf decision, and it's easy.
- **The language-feature staircase is steep and non-linear:**
  - *Language server (the foundation for IntelliSense)* = the BIG jump. For C# it runs **server-side** (needs the compiler/type brain), **per-student-session**, **stateful**, **live while typing**, i.e. a whole new live backend service with ongoing cost, structurally like the persistent-container model we rejected early for cost. Not a frontend tweak.
  - *IntelliSense* (squiggles, hover types) = cheap on top of the server; cost is keeping round-trips fast.
  - *Autocomplete* = chattiest (fires ~per keystroke); cost is per-keystroke latency + server load.
- **Phase 1 sidesteps the entire staircase** (no language server), this is both an ethos choice (you write the code) **and** a major cost avoidance that keeps the backend in its clean thin+stateless shape.
- **Cheatsheets are the intended substitute for what autocomplete gives a learner.** Autocomplete hands you the method name instantly (you never learn it); the per-section cheatsheet makes you glance over and type it yourself (you build the memory), "wax on, wax off" for editing. It scopes to *this section's* skill and thins out as fluency grows, so the support fades exactly as it should, the opposite of autocomplete's permanent dependency. A pedagogically better design, not a consolation.
- *(Lighter middle grounds exist if ever needed, client-side word-based completion / snippets, no language server. Noted, not planned; against the ethos.)*

### Does C# on the backend deter scaling? No.
- Modern ASP.NET Core is cross-platform, runs in Linux containers, and is among the fastest mainstream web runtimes (consistently near the top of TechEmpower benchmarks). *(Content rephrased from general benchmark knowledge; verify against current TechEmpower rounds if it ever matters.)*
- More importantly, **the backend does almost no heavy lifting**: serve content (files, cached in memory), read/write progress rows, forward submissions. It's a thin, stateless layer that scales horizontally the normal way (more instances behind a load balancer).
- The genuine scaling problem, classroom-sized bursts of "run", lives entirely in **World A (Judge0)**, which scales independently. The backend language is irrelevant to it.
- **Conclusion:** the C#/TS split is clean, not a liability. One caveat worth noting: it rules out sharing hot-path code (validation, types) between client and server, which we don't do anyway (content is files, the API surface is small), so it costs nothing.

---

## 3. The execution adapter, the one piece to get exactly right

This is VISION §5's key technical idea. Rules:

1. **Define our OWN internal contract**, not Judge0's:
   ```
   run({ language, files[], stdin }) → { stdout, stderr, exitCode, timeMs, memKb, status }
   ```
2. The adapter translates that to the Judge0 HTTP JSON API and back. It is the **single module in the whole system that knows Judge0 exists.**
3. **Stick to the core "run code → get result" surface.** No vendor-specific extras. Hosted and self-hosted Judge0 speak the same API, so cutover = changing a configured URL.
4. Languages are **recipes** inside the adapter (`csharp`, `java`, `cpp`, `python`), the engine shape is identical; only the toolchain id changes.
5. **Grading lives above the adapter**, in the backend: the backend knows a problem's grading type (stdout-match / unit-tests), assembles the files + inputs, calls `run(...)` per test case, compares against the oracle, returns pass/fail. The adapter stays dumb, it just runs code.

### Security boundary (keeps VISION §6 honest)
- Phase 1 (hosted): untrusted code runs on Judge0's servers, nowhere near our data. Free security win.
- Phase 2 (self-hosted): Judge0 on **separate infra**, no DB credentials, no connection string, no network route to World B. Network disabled inside the sandbox. Resource limits (time/memory/processes) on. If code escapes, it lands in an empty room with no doors.
- **Output is untrusted text.** Grading compares it; the frontend renders shared code/output safely (see `10-frontend.md` §5). The adapter never interprets output as anything but bytes.

---

## 4. Content pipeline, build-time ingestion (Model A)

**Decision: build-time ingestion (recommended and adopted).** At deploy, a step parses the `courses/` tree into a structured manifest (JSON) + the content the API serves. The database stores only **stable references**, never content.

```
courses/  ──(build-time ingest)──►  content manifest (JSON)  ──►  served by API
   │                                        ▲
   │ source of truth (git)                  │ stable IDs
   ▼                                        │
 reviewed like code             DB rows reference these IDs
                                (progress, submissions)
```

Why A over runtime-read:
- Content ships *with* the app as a validated artifact, a broken problem folder fails the build, not a student's request.
- The running API isn't coupled to the on-disk file layout.
- Clean separation: **content = files + manifest; DB = user data only.**
- Not a lock-in: the file format is identical to the runtime-read approach, so this is a pipeline choice, not a content-format choice.

**The ingest step validates** every problem folder against the schema below and fails loudly on anything missing or malformed.

### The three separated concerns (DECIDED, "B+C blend")

The oracle rule means expecteds must come from *running* the solution. Rather than couple that to the build (which would make CI/`docker compose up` need a toolchain or burn Judge0 quota on thousands of calls per build), we split three concerns cleanly:

| Concern | Where / when | Needs a toolchain? | What it does |
|---|---|---|---|
| **Authoring** | your machine, a small **CLI** you run when writing/editing a problem | **Yes** (local `dotnet`, later `javac`/`python`/`g++`) | runs `solution.<lang>` against each case's `stdin`, generates `expected` outputs, writes them into a **committed** generated file next to the content |
| **Building** (ingest) | CI + deploy | **No** | the **ingester is a pure parser**: reads `problem.yaml` + folder, validates shape, assigns IDs, trusts the committed expecteds, emits the manifest. Fast, offline, dependency-free. |
| **Verifying** (drift guard) | CI, a *separate job* | **Yes** (SDKs) | re-runs generation and asserts committed expecteds haven't drifted (same pattern as committed codegen / lockfiles). Catches "edited a solution, forgot to regenerate." |

**Why committed, generated expecteds:** they show up in **git diffs**, if a solution edit silently changes outputs, the diff screams. That's a real safety net for "depth is the brand." And the ingester stays a parser, not a parser-plus-runner, so the app build has zero toolchain/Judge0 dependency.

**Expecteds are generated with the native local toolchain** (the exact mechanism we used by hand to verify p05, `dotnet run` against piped stdin), NOT via Judge0 at build time. Assumes deterministic output (true for basics content); the future `compare:` field (§5) handles the non-deterministic exceptions.

---

## 5. The content schema, the real contract between content and code

Derived from the existing `courses/csharp-basics/` tree and `ROUTEMAP.md`. This is the stable interface the ingester parses and the data model mirrors. **Changing this is changing an API.**

### Tree
```
courses/<course-id>/
  ROUTEMAP.md                         ← master structure (human doc; not ingested as content)
  sections/
    <section-id>/                     ← e.g. 1.3-number-variables
      README.md                       ← section spec + index (human doc)
      reading.md                      ← student-facing reading
      quiz.yaml                       ← quiz SOURCE OF TRUTH (machine-readable; §5 "Quiz format")
      quiz.md                         ← human mirror of the quiz (not parsed)
      cheatsheet.md                   ← this-section-only reference DOCUMENT (Markdown; see note)
      problems/
        <problem-id>/                 ← e.g. p05-sum-two-ints
          problem.yaml                ← problem SOURCE OF TRUTH (machine-readable; §5 "problem.yaml")
          design.md                   ← language-independent human doc: statement, I/O contract, why
          starter.<lang>              ← pre-seeded file(s) the student edits
          solution.<lang>             ← reference solution (the ORACLE)
          expected.json               ← GENERATED by the authoring CLI; the committed oracle outputs
                                         (NOT hand-authored; never edit directly; regenerate with the CLI)
          tests.md                    ← human mirror of the test cases (not parsed)
```
**Chapter tests `<chapter>.T` and the course exam are POOLED, defined extension (no longer deferred).** A test draws a test-sized set from a **larger pool** so it is non-memorizable. Its folder is a sibling shape to a section:
```
<chapter>.T-chapter-test/        (exam: <course>.E-course-exam)
  test.yaml                      ← SOURCE OF TRUTH: kind, draw, light_at, window, pool (ordered problem IDs)
  cheatsheets/                   ← gathered section sheets (chapter test = this chapter; exam = course-wide)
  pool/
    pNN-slug/                    ← ordinary problem folders (problem.yaml/design.md/starter/solution), same
                                   contract as a section problem; expecteds generated by the authoring CLI
  README.md  exercises-draft.md  ← human docs
```
- `test.yaml` fields: `kind` (`chapter-test`|`course-exam`), `draw` (problems per attempt), `light_at` (~60% of the draw), `window_hours` (~24; miss → doesn't light, fresh draw on retry, no lockouts), `shuffle`, `pool` (ordered IDs). **Completion is draw-based**, distinct from a section's `lights_at`+derived-count; the backend enforces from the manifest.
- **Pool >> draw** (e.g. ~20 pool / draw 10). **Anti-hardcoding for no-input bosses = the pool**: several value-varied variants per scenario family, so a memorized output fails the next draw.
- **The ingester** parses `test.yaml` + walks `pool/` the same way it walks a section's `problems/`. **The authoring CLI is unchanged** (pool problems are ordinary problem folders, verified). Worked example: `courses/csharp-basics/sections/1.T-chapter-test/exercises-draft.md`.
- **Difficulty-balanced draw** (pull a mix, not 10 random) is a backend/ingest concern; the pool is authored with enough easy warm-ups to make a balanced draw possible.

**Cheatsheet is Markdown, rendered as a reference PANEL (not a Monaco tab), DECIDED (resolves UXChanges #1).** A cheatsheet is a reference *document* (prose, the int-vs-double table, the "= means gets" callout, small snippets), Markdown fits far better than comment-soup in a `.cs` file. On the coding screen it renders as a distinct **reference panel beside the editor**, NOT as an editable/runnable Monaco model. This cleanly separates "files you work in" (Monaco) from "help you glance at" (the panel). Trade-off accepted: it's no longer "just another workspace file." Cheatsheets are inherently per-language (fine, they always were). Supersedes the §8.4 line that listed the cheatsheet as a read-only Monaco tab.

### Stable IDs (what the DB references)
```
course:   csharp-basics
section:  csharp-basics/1.3-number-variables
problem:  csharp-basics/1.3-number-variables/p05-sum-two-ints
```
Folder slugs ARE the IDs. They must be stable once published (renaming a folder = migrating references).

### What the ingester must extract per problem
- **Grading type:** `stdout-match` or `unit-tests` (from problem metadata, see open item below).
- **Pre-seeded workspace:** the set of `starter.<lang>` files (a problem can have several, header/impl/main for later "classes" topics).
- **Oracle:** `solution.<lang>`, expected outputs are produced by *running this*, never hand-written.
- **Test cases:** parsed from **`expected.json`** (generated by the authoring CLI; never hand-authored). `tests.md` is the human mirror only.
- **Student-facing statement:** from `design.md`.

### Grading semantics (DECIDED), the contract at the moment of judgment

**Output matching: STRICT, like a real school/judge system.**
- Exact match. **Trailing whitespace is significant**, a stray space fails. (Producing output to spec is itself a learned skill: precision + careful spec-reading.)
- Case-sensitive, blank lines significant.
- **One carve-out:** normalize line endings (`\r\n` → `\n`) before comparing. That's an OS artifact (Windows vs Linux sandbox), not a student skill, a learner must never fail for a platform accident. Everything else stays byte-exact.

**Failure feedback: SHOW the failing case.** On a failed submit, the student sees the failing input + expected + actual (not just "3/5 passed").
- Rationale: there's no credential, so gaming a visible test only cheats yourself, the map is a map of your *own* ability. So lean into transparency: the failing case is the single most useful **learning** signal ("oh, it breaks on negatives"). Trivial gaming was always pointless here.

**Grading is not only stdout.** Some problems also assert **structural** facts about the source (e.g. "a numeric variable is declared and assigned"), a second, independent anti-hardcoding defense that checks the problem's *actual objective*, not just its printed result. So `Console.WriteLine(7)` can fail both on varied inputs AND on "you didn't declare/assign a variable as asked."
- Implication for the format: `problem.yaml` must be able to carry an optional **source check** alongside `cases`. Full design deferred (Phase-1 content is output-driven), but the model acknowledges stdout is not the only signal. *(Future field, e.g. `checks:`.)*

### Quiz format (DECIDED), `quiz.yaml`, parallel to `problem.yaml`
Each section's quiz has a machine-readable **`quiz.yaml`** (source of truth; `quiz.md` is the human mirror). Types: `truefalse`, `mcq` (options + correct id), `fillblank` (accepted answers, case-insensitive/trimmed). Each question carries a `rationale` shown *after* answering (learning feedback, same transparency principle). Quiz has a `pass` threshold (comprehension gate) and optional `shuffle`. See `courses/csharp-basics/sections/1.3-number-variables/quiz.yaml`.

### Map metadata (DECIDED, resolves UXChanges #3 as reverted by #7)

The course map uses **real province/state geodata** (rendering decision, UXChanges #3/#5, still live). The **country choice reverted to AUSTRIA**: the model is **one real country per course** (finish a course = you explored that country; the next course is a different country, its own world). **C# Basics = Austria** (9 Bundesländer; Oberösterreich = Ch.1 "The Foundations", lit). African geography is reserved for the **community-world** map only (north-star), NOT course maps.

This adds **authored** content fields (never generated):
- **Course metadata** (course-level): `country` (e.g. `austria`), the chapter→province mapping, and, for the exam reveal (UXChanges #7a, deferred), a `flag` + `country name` + one `fact`.
- **Chapter metadata:** a **region title** (e.g. "The Foundations"), the evocative name shown on the map region.
- **Section metadata:** a **`map_name`** (e.g. the landmark/pin label) and a **`lights_at`** threshold (how many solved problems light the section, authored, ≈60% of the section's own problem count), authored per section.

**Province-count vs chapter-count mismatch is a per-course AUTHORING step, not auto-generation** (SA has 9, Austria has 9, but courses vary). For now: a course is assigned a country and its chapters mapped to provinces/regions by the author; the mismatch rule (merge/split/overflow, or pick a fitting country) is settled per course. Acknowledged as authored, deferred as a final rule.

**Country assignment is DOWNSTREAM of authoring (decided).** You can't sensibly pick a course's country until its content exists (country/province mapping depends on chapter count + shape; test-flavor depends on scenarios being written). So **"Austria" for C# Basics is a working default from the prototype, not a locked commitment**, the final country is confirmed once the course is authored. Treat country as a late, authoring-informed decision per course.

**Country flavor in content (decided, learning first):**
- **Drill problems (the per-section 15 reps): GENERIC, no country flavor.** Avoids info overload AND protects the author-once/translate-per-language reuse economics (generic design = reusable across languages).
- **Chapter tests + course exam: MAY carry light country flavor** as texture (the "puzzle/place" feel), because those are bespoke + integrative anyway. Optional, never required.
- **Governing rule: prioritize learning code.** Flavor is always subordinate and optional; a course must work with fully generic contexts. **Real-world detail stays flavor TEXT, never the graded value** (don't encode a real statistic as the expected answer, that's a brittle geography quiz; keep computed values abstract/given-in-problem).
- **Exam reveal (flag + name + one fact) stays the climax regardless**, it costs ~nothing and doesn't touch problem content. Asset lives in course metadata.

*(Province path generation happens build-time via d3-geo into the manifest, see §2 stack row. The runtime just draws precomputed SVG.)*

### `course.yaml`, course-level metadata (home established now; fields filled later)
Parallel to `problem.yaml` / `quiz.yaml`: a **`course.yaml`** at each course root is the home for course-level metadata. Established now so the pattern is consistent and fields have a home; **most fields are authored/confirmed later** (after content + country decision).
- `id`, `title`
- `status`: `published` | `planned` (catalog shows both; `planned` renders as a placeholder card — title, fog map, "coming soon" label, optional "notify me" on click; no content served)
- `country` *(working default for C# Basics = `austria`; confirmed post-authoring)*
- chapter → province mapping *(authored per course)*
- exam reveal: `flag`, `country_name`, `fact` *(for the §7a reveal; deferred)*
- **Deferred until the MAP-SCREEN spec (tagged, not forgotten):** the manifest shape for precomputed province SVG paths (path strings, viewBox, projection, province→chapter map), and the actual C# Basics → Austria province mapping. **None of this blocks the coding / section / contents screens**, only the map screen.

### Completion rules (from ROUTEMAP, enforced by the backend, not stored in content)
- **Section size follows the idea (course-wide): floor 5, ceiling ~15 problems.** No fixed count.
- **Section lights up at its own `lights_at` threshold (~60% of its problems),** not a universal "8 of 15". The backend still *enforces* completion; it reads the threshold from the manifest instead of a hardcoded number. The **problem count is derived** at ingest (how many problem folders exist); **`lights_at` is the one authored knob**, living in section metadata (alongside `map_name`). This keeps "backend enforces, content declares the policy input" honest. ("8/15" is now just the shape of a full drill section, the authored 1.3 is a legitimate 15-problem/lights-at-9 section.)
- Chapter lights up when its test is passed (~60% of the pooled draw, ~24h window, fresh draw on retry, no lockouts).
- Rollup: section → chapter → course (reading done / quiz passed / X of Y problems solved).

### The per-problem contract, `problem.yaml` (DECIDED, resolves §8.1)

Each problem folder carries a **`problem.yaml`**, the machine-readable **source of truth** the ingester parses. `design.md` / `tests.md` stay as the **human-readable mirror** (for authoring + review); they are NOT parsed.

**The oracle rule, enforced by construction: a human never types an expected output.** The author writes everything *except* the answers. Expecteds are *generated* by running the reference solution (see Content pipeline §4).

**Author writes in `problem.yaml`:**
- `id`, `title`, `difficulty`
- `grading`: `stdout-match` (Phase 1) or `unit-tests` (later)
- `languages`: which are available (`csharp` now; `java`/`python`/`cpp` later)
- `starter`: the pre-seeded files the student edits (per language)
- `solution`: the reference solution file(s), the ORACLE (per language)
- `cases`: **inputs only**, each with a required `note` saying *why it exists* (normal / zero / negative / large / boundary). No expected outputs.

**Generated (never hand-committed by a human as prose):**
- `expected` per case, produced by compiling + running `solution.<lang>` against the case's `stdin`.

Example (`p05-sum-two-ints`):
```yaml
id: p05-sum-two-ints
title: Sum two ints
difficulty: 2
grading: stdout-match
languages: [csharp]
starter:   { csharp: [starter.cs] }
solution:  { csharp: [solution.cs] }
cases:
  - { stdin: "3\n4",     note: normal }
  - { stdin: "10\n25",   note: different values (kills WriteLine(7) hardcode) }
  - { stdin: "0\n0",     note: edge - zeros }
  - { stdin: "-5\n2",    note: edge - negative }
  - { stdin: "100\n250", note: larger }
# NO expected: values. Generated by running solution.cs.
```

**Why this shape:**
- `cases` (inputs + why) are **language-independent** → authored ONCE. Adding Java = add `java` solution + language; the *same inputs* run through the Java oracle to make Java's expecteds. The expensive thinking (edge cases that resist hardcoding) is written exactly once, this is the "author once, translate per language" economic win, made concrete.
- `note` required on every case = cheap discipline forcing the anti-hardcoding mindset; reviewers/stress-testers read notes to spot a missing edge case.
- `stdin` is a single string with `\n` (matches exactly what's piped to the program).
- `unit-tests` grading (later): author supplies a test harness file; the "oracle" check is "the reference solution passes its own tests." Same principle, different shape. `grading:` as a discriminator leaves room for it now.

**Future schema extension (noted, not now):** a `compare:` field (`exact | numeric-epsilon | ...`) for problems whose output isn't deterministic/exact (floats, etc.). Phase-1 basics content is deterministic exact-string, don't pretend that's universal forever.

---

## 6. Data model (World B, Postgres, user data only)

Mirrors the content tree by *reference*, stores no content:

- **users**, account, profile (home for badges/shield later).
- **progress**, per user, keyed by section/chapter/course ID; reading-done, quiz-passed, problems-solved count. Rolled up on read.
- **submissions**, per user, per problem ID: the student's code, the pass/fail result, timestamp.
- **(later)** groups/territories/helper-status, all the community world, keyed off the same user + content IDs.

Content (courses, sections, problems, tests) is **not** in Postgres. The manifest is the source for that; the DB only points at it via stable IDs.

---

## 7. Phasing

**Phase 1, prove the thesis (one C# course, runs + grades):**
- React+TS frontend (the three risk screens).
- ASP.NET Core API + Postgres (auth, content serving, progress, submissions).
- Execution adapter → **hosted** Judge0.
- Build-time ingester for the `courses/` tree + the `problem.yaml` metadata decision.

**Phase 2, make it ours:**
- Self-hosted Judge0 on separate infra; cut over by config/URL.
- Harden the World A / World B separation.

**Later (north-star):** community world, territories, bootcamp, 1-1 tutoring, all hang off Phase 1 existing and being good.

---

## 7b. Decided now, the four "shape the first code" choices

### Submission flow, one async path for both Run and Submit
- Backend accepts a Run/Submit, returns a **submission ID immediately**; frontend polls `GET /submissions/{id}` until the verdict is ready.
- **Why:** Judge0's API is async by nature (submit → token → poll). Presenting a fake-sync API means our backend holds an HTTP request open through 5–15 test-case runs, the worst failure mode (timeouts, queued behind others on the hosted free tier). Leaning into async removes it.
- One uniform code path for Run (single execution, no grading) and Submit (N test cases + compare to oracle) keeps it simple.

### Auth, ASP.NET Core Identity, cookie sessions, email/password + Google + GitHub
- **Identity owns the accounts in our Postgres** (World B stays self-contained, no third party in the auth path). First-party to the C# stack, free, no per-user cost.
- **Cookie-based sessions**, not JWT: frontend + backend are our own single app, so we don't have the cross-service token-sharing problem JWTs solve, and cookies dodge browser token-storage footguns.
- **Social login layered on top** (this is what Identity's external-login support + the `AspNetUserLogins` table are for):
  - **Google**, first-party `Microsoft.AspNetCore.Authentication.Google`.
  - **GitHub**, `AspNet.Security.OAuth.GitHub` (aspnet-contrib) or the generic OAuth handler. On-brand: the target audience (uni CS students) already has GitHub.
- **Account-linking policy: link by verified email.** If an external provider reports a **verified** email matching an existing account, attach the external login to that account (one person, one account, many login methods). Google and GitHub both signal email-verified. Avoids messy duplicate-account merges later.
- **Side benefit:** social-login users skip password hashing + verification/reset emails entirely, cutting the email-sending burden.
- **Carries a config cost:** each provider needs an OAuth app registered (client ID + secret), with separate callback URLs for local vs prod. Feeds the config/secrets item.

### Repo layout, monorepo
```
khouding/
  courses/          ← content (source of truth, exists)
  frontend/         ← React + TS (Vite)
  backend/          ← ASP.NET Core API
  execution/        ← C# Judge0 adapter service
  tasks/  VISION.md  ← existing docs
  docker-compose.yml
```
Solo dev, content-as-files, three units deploying together → one repo, one history, atomic content↔code commits. Split repos only earn their keep with separate teams or release cadences; we have neither.

### Local dev, Compose for backing services, bare processes for what we edit, hosted Judge0
- **Postgres in Docker Compose**, `docker compose up`, no native install, trivial reset.
- **Frontend + backend as bare processes** (`npm run dev`, `dotnet run`) for hot reload and a fast loop. Dockerfiles get written at deploy time, not now.
- **Judge0 stays hosted in Phase 1**, adapter points at the hosted URL; nothing to run locally. (Self-hosted Judge0 is a heavy multi-container setup, deferred to Phase 2.)
- Day-to-day: `docker compose up` + `dotnet run` + `npm run dev`, adapter aimed at hosted Judge0.

---

## 7c. Scaling beyond compiled/interpreted languages, web, frameworks, backend `(VERY LATER, north-star, not Phase 1/2)`

> Captured here (not in `60-monetization.md`) because it's an **execution-architecture** question, not a
> revenue one. It does NOT authorize building any of this now. The point: know the escape hatch exists so
> Phase-1 choices don't paint us into a corner.

The Phase-1 model (VISION §5) is **one-shot, stateless: compile → run → capture stdout → tear down.** That
answers "does this function return the right value." Web/framework/backend content breaks one or both of those
assumptions (no stdout; or a long-running stateful server). The **escape hatch is already in the design**: the
execution adapter (§3) defines *our own* contract, and Judge0 is just one backend behind it. New course families
become **new execution backends plugged in behind the same `run(...)`-style interface**, not a rewrite.

Three tiers of difficulty, easiest first:

### Tier 1, HTML / CSS / vanilla JS (hardest part is "what's the output?")
- **Problem:** there is no stdout; the "output" is a **rendered DOM / visual result**.
- **Grading shape:** either (a) run the student's JS as **unit tests** (closest to the current model, JS functions in, assertions out), or (b) render in a **headless browser** (Playwright/Puppeteer-style) and assert on the **DOM / computed styles**. Possibly a screenshot/visual diff later (fragile, treat with care).
- **Infra:** a headless-browser runner is a *new execution recipe* (a browser, not a compiler). Still one-shot-able and sandboxable. Judge0 does not do this, it's a **second execution backend behind the adapter.**
- **New grading type** alongside `stdout-match` / `unit-tests`: something like `dom-assert` / `browser-test`. Fits the `grading:` discriminator already in the schema (§5).

### Tier 2, Frameworks (React, etc.), adds a build step
- **Problem:** before anything renders you need a **bundler + dependencies** (`node_modules`). Heavier, slower, dependency-managed sandbox.
- **Grading shape:** same as Tier 1 (component unit tests via a test runner, or headless-browser DOM assertions), just after a build.
- **Infra:** fatter sandbox (install + build + run), longer runs, dependency caching matters. Still ultimately one-shot (build → test → verdict → tear down). Same adapter contract; a heavier recipe inside the browser-test backend.

### Tier 3, Backend code, the one that bends the stateless model
- **Problem:** a backend is a **long-running stateful server** you make requests against, the *opposite* of one-shot stateless. This is exactly what VISION §5 chose statelessness to dodge.
- **Grading shape:** **boot the server → fire HTTP requests at endpoints → assert on responses → tear down.** Still bounded and scriptable, but the sandbox must hold a process **alive** for the duration of a test run (seconds, not a persistent session) and probe it over a local port.
- **Infra:** an **ephemeral-container-with-HTTP-probe** runner, spin a container, start the server, run a request/response test suite against `localhost`, collect results, destroy it. More like an integration-test harness than a code judge. Clearly a **third execution backend behind the adapter**; Judge0 is the wrong tool here.
- **Honest note:** this is the biggest departure, it stretches "stateless" to "stateful *but short-lived and torn down per run*." Keep the World A / World B separation absolute (§3 security): these servers run with **no network route to World B**, no credentials, destroyed after each run.

### Two design levers that keep this cheap and sellable

**Micro-chunks, keep the learning unit as small as possible.** The smaller the unit (one JS
function, one DOM assertion, one tiny component), the more web/framework content stays on the **light**
side of the execution staircase (Tier 1 unit-tests / simple DOM assert) and **out** of the heavy Tier-3
"boot a real server" machinery. Small chunks are the cheapest way to teach a lot of web before you're
forced into the expensive runner. Fits the existing grain, the section is already the atomic unit with
many small problems (VISION §3). **Principle: shrink the unit to dodge the heavy tier.**

**The "no-setup" value prop, the real payoff, and a bridge to the monetized layer.** The single biggest
friction in teaching web/node is **getting the environment running on a student's machine** (install node,
npm, version/path hell), a bootcamp can lose days to it. If khouding runs the chunks in-browser / in-sandbox,
a bootcamp or institution can get students *doing* HTML/CSS/JS/node basics **before anyone installs anything
locally.** That removes their worst onboarding pain and is a concrete reason to adopt khouding for web content
specifically. Note the convergence: **a good "run web without local setup" solve is itself a product that
merges with the monetized layer** (`60-monetization.md`), the no-setup sandbox is exactly the value a paid
cohort/bootcamp gets. So this scaling work and monetization are not separate tracks; the execution environment
*is* part of what institutions adopt khouding for.

### What this means for today
- **Keep the adapter contract honest (§3).** As long as the backend only ever asks its *own* execution service "run this, here are the files, here's the check, give me a verdict," new backends (headless browser, container-probe) slot in without touching the app. The adapter is the whole reason this stays additive.
- **The `grading:` field is the extension point**, new families add new grading types, not new app architecture.
- **Cost/ops grows with each tier** (browser > compiler; container-probe > browser). That's a Phase-N infra decision, not a Phase-1 one.
- **Do NOT build any of this now.** C#-basics (compiled, stdout/unit-test) is the thesis. This note only guarantees the door is left open.

---

## 8. Open items this doc surfaces
- [x] 8.1 **`problem.yaml` metadata format**, RESOLVED (§5): author writes inputs+notes, never expecteds; yaml is the parsed source of truth; `design.md`/`tests.md` are the human mirror.
- [x] 8.7 **Ingester / oracle coupling**, RESOLVED (§4, "B+C blend"): expecteds generated locally by an authoring CLI and **committed**; the ingester is a **pure parser** (build needs no toolchain); a separate CI job guards against drift. Future `compare:` field for non-deterministic output.
- [x] 8.2 **Auth**, resolved in §7b: ASP.NET Core Identity, cookie sessions, email/password + Google + GitHub, link-by-verified-email.
- [~] 8.3 **Hosting targets**, DEFERRED to deploy time (nothing in Phase-1 dev depends on it; low-stakes, reversible). **Lean documented in `tasks/40-infra.md` §1:** consolidate on one solo-dev PaaS (research **Render** / **Railway**) hosting all three units + **managed Postgres always**; **Azure excluded**. Decide after verifying current pricing/free-tiers live.
- [x] 8.4 **Monaco ↔ multi-file workspace**, RESOLVED. One Monaco editor instance; a **manifest-driven list of models** shown as **tabs** (one model = one file `{path, contents, language, editable}`, from the problem's `starter` files). Provided scaffolding (e.g. a given header for "classes" problems) appears as **read-only tabs** (`editable:false`). **The cheatsheet is NOT a Monaco tab**, it's a separate rendered Markdown reference panel beside the editor (see §5 cheatsheet note, resolves UXChanges #1). On Run/Submit, collect the text of **all** models into the adapter's `files[]` shape (same currency Monaco → backend → adapter → Judge0). **No language server / IntelliSense / autocomplete**, standalone syntax highlighting only (lighter, and on-ethos: you write the code). In-progress edits **saved server-side** (per user, per problem) as part of the foundation; browser-local persistence is an optional extra on top. Output pane (incl. the "popup") is rendered text only, never executed (§5 untrusted-output rule).
- [x] 8.5 **Config/secrets management**, RESOLVED and promoted to a standing convention: **`conventions/10-secrets-and-config.md`** (CRITICAL). Summary: .NET User Secrets local / env vars prod (same code reads both); frontend `.env.local` holds non-secrets only; commit template/key-names only, never values; separate OAuth apps per env; `.gitignore` from commit #1 + optional CI secret-scan guard.
- [x] 8.6 **Submission flow**, resolved in §7b: one async submit-then-poll path for both Run and Submit.
