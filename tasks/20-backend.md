# Backend

> Two worlds connected by a thin wrapper: **execution** (untrusted code) and **data** (users). Only "code in / output out" text passes between them.

## 1. Data model `(CORE)`
- [ ] 1.1 Mirror the route-map: Course → Chapter → Section → Problem.
- [ ] 1.2 Problem: pre-seeded files, author tests, grading type (stdout-match / unit-tests).
- [ ] 1.3 Quiz items: true/false, multiple choice, fill-in-the-blank.
- [ ] 1.4 Progress: per student, rolled up section → chapter → course (reading done / quiz passed / X of Y problems solved).
- [ ] 1.5 Submissions (student code per problem, pass/fail result).

## 2. Auth / accounts `(CORE)`
> Approach settled in `70-architecture.md` §7b: ASP.NET Core Identity, cookie sessions, accounts in our Postgres.
- [ ] 2.1 Sign up / log in. Everything (progress, community, opt-in visibility) depends on this.
- [ ] 2.2 User profile (home for badges/shield later).
- [ ] 2.3 Social login: Google (`Microsoft.AspNetCore.Authentication.Google`) + GitHub (`AspNet.Security.OAuth.GitHub`).
- [ ] 2.4 Account linking: link an external login to an existing account when the provider reports a **verified** matching email.
- [ ] 2.5 Register OAuth apps (Google Cloud Console, GitHub Developer Settings); manage client ID/secret + callback URLs per environment.

## 3. Execution adapter `(CORE)`
> The vision's key technical idea, the one module in the whole app that knows the code-runner exists.
- [ ] 3.1 Define *our own* internal API: "run this code, here are the files, here's the input → get result."
- [ ] 3.2 Translate that to the runner's API behind the adapter.
- [ ] 3.3 Stick to the core "run code → get result" surface (no vendor-specific extras), so hosted→self-hosted is a **config/URL change**, not a rewrite.

## 4. Judge0 integration `(CORE)`
- [ ] 4.1 Start against the **hosted API** (free tier), fine for building + first students. Confirm actual rate limits at signup.
- [ ] 4.2 Wire C#, Java, C++, Python as language "recipes" (engine shape is identical per language).
- [ ] 4.3 Grading: run author tests against submission → pass/fail back to the student.
- [ ] 4.4 Feed stdin for input-reading programs.

## 5. API `(CORE / NEXT)`
- [ ] 5.1 Serve course/chapter/section/problem content to the frontend.
- [ ] 5.2 Record + return progress.
- [ ] 5.3 Accept submissions → call execution adapter → return result.

## 6. Self-hosting `(NEXT)`
- [ ] 6.1 Build own Judge0 infra in parallel; cut over by changing the adapter's configured URL.
- [ ] 6.2 Run Judge0 on **separate infra** from the DB/app, no credentials, no connection string, no network path to anything sensitive.
- [ ] 6.3 Disable network access inside the sandbox.
- [ ] 6.4 Keep resource limits (time, memory, processes).
