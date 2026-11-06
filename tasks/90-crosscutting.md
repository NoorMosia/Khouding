# Cross-cutting / don't-forget

> Items that span areas and are easy to drop off a to-do list.

## 1. Auth `(CORE)`
- [ ] 1.1 Foundational, everything (progress, community, opt-in visibility) assumes login. Tracked in `20-backend.md` §2; noted here so it isn't forgotten.

## 2. Content safety `(NEXT)`
- [ ] 2.1 Output is untrusted, render shared code/output safely. Spans frontend (`10` §5) + backend. Not automatic.

## 3. The 2016 / AI stance `(ongoing principle)`
- [ ] 3.1 NO in-platform AI tutor/hint-bot. The platform is a realistic workbench. External tools (ChatGPT, Stack Overflow) are the student's own business.
- [ ] 3.2 Don't police cheating, make it pointless via framing + volume + real grading. Give trust to everyone.

## 4. Copyright `(ongoing principle)`
- [ ] 4.1 Original words/problems/examples only; build the TOC from the language's logic, not a book's contents page.
- [ ] 4.2 Consult a real IP lawyer before money's involved.

## 5. Prototyping `(NEXT)`
- [ ] 5.1 Lightweight mockups of the three risk screens (coding platform, section flow, personal map) with placeholder content.
- [ ] 5.2 Don't let pretty screens substitute for the route-map actually existing.

## 6. Architecture `(RESOLVED → see 70-architecture.md)`
- [x] 6.1 Framework/stack choices, data store, deployment shape, settled in `70-architecture.md`.
  - Stack: React+TS frontend · ASP.NET Core (C#) API · separate C# execution adapter · Postgres (user data only) · content-as-files in `courses/`.
  - Content pipeline: build-time ingestion (Model A); DB references stable content IDs.
  - One open item carried forward: the per-problem `problem.yaml` metadata format (`70-architecture.md` §8.1).
