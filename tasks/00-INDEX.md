# khouding, Tasks

Lightweight point/sub-point to-do. Companion to `VISION.md` (the *why/what*); this is the *what-to-do*.
Not a project-management tool, no dates, no estimates. Points, sub-points, a status box.

**Status key:** `[ ]` todo · `[~]` in progress · `[x]` done · `[-]` dropped
**Priority tags:** `(CORE)` = needed to prove the thesis · `(NEXT)` = soon after · `(LATER)` = north-star, don't build first

---

## The one rule
The thing that proves khouding is real is unglamorous: **one C# course, university standard, problems that actually run and grade.** Everything shiny (community world, territories, frontlines) hangs off that core existing and being good. Keep `(LATER)` later.

## Suggested path through the mountain
1. **Content**, the C# route-map first, before any code (`30-content.md`). It's the spine everything else mirrors.
2. **Backend foundation**, data model + auth + execution adapter + Judge0 (`20-backend.md`).
3. **Frontend core**, the coding platform screen, the section flow, the personal course map (`10-frontend.md`).
4. **Infra**, where it runs; minimal at first (`40-infra.md`).
5. **Community + monetization**, mostly `(LATER)` (`50-community.md`, `60-monetization.md`).

## Files
- `10-frontend.md`, general pages, course map, coding platform, shared-content rendering
- `20-backend.md`, data model, user data + API, execution adapter, Judge0, auth
- `30-content.md`, route-map, authoring format/workflow
- `40-infra.md`, hosting, where Judge0 lives
- `50-community.md`, community features + the community world map (mostly LATER)
- `60-monetization.md`, bootcamp, 1-1 tutoring (LATER)
- `90-crosscutting.md`, don't-forget items that span areas (auth, content-safety, prototyping)

## Prototyping note
UI prototyping is a good *next* move, but prototype the **shapes and flows**, with placeholder content, of the three screens that carry the risk: the coding platform, the section flow, the personal course map. Do **not** prototype the community world yet. A pretty mockup is not a substitute for the route-map actually existing.
