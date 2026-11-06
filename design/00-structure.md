# khouding, page / navigation structure

> The **skeleton** for the UI/UX work. This maps zones, pages, the learning hierarchy, and reserved north-star space. The *flesh* (what each page/component looks like and does) happens in the dedicated UI chat, this is the reference it builds against.
>
> Companions: `VISION.md` (why), `tasks/70-architecture.md` (how it runs), `tasks/10-frontend.md` (frontend tasks), `conventions/` (standing rules).

---

## Guiding principles for the structure
- **A small number of well-designed templates, not dozens of unique pages.** This is what makes it buildable solo.
- **The coding screen is ONE screen reached three ways** (section problem · chapter test · course exam). Design it once, superbly.
- **The section loop is ONE template** every section reuses (reading → quiz → problems).
- **North-stars get reserved SPACE, not built rooms.** The structure must *accommodate* community/territory later without a retrofit; it must not *build* them now.
- **One data set, two lenses** (the progress principle) shows up again in the course home: Contents view + Map view of the same structure.

---

## Two zones

### Public / marketing zone (logged-out)
Job: communicate the thesis and convert to sign-up. Wide, designed landing layout.
- **Landing page**, the slogan ("Learn to code like it's 2016"), the thesis, CTA to sign up / browse.
- *(later: about / pricing)*

### App zone (logged-in)
Job: the actual learning. Focused, consistent workspace with persistent nav.

**Primary nav (Phase 1, deliberately lean, calm not busy):**
- **Courses** (catalog / my courses), home base
- **(active course)**, reachable while inside a course
- **Profile / account**
- **[reserved: Community]**, empty slot, north-star

### The gate
- **Auth**, sign up / log in / social (Google, GitHub). Cookie sessions. (See architecture §7b.)

---

## Page hierarchy (Phase 1, the real build)

```
PUBLIC
  Landing
  Auth (sign up / log in / social)

APP
  Course catalog / "My courses"
    └─ Course home  ───────────────────────────────────────────────
         TWO VIEWS of the same structure + progress (one toggle apart):
           • CONTENTS view  (DEFAULT, the backbone)
               clean textbook TOC: chapters → sections, each with
               progress (reading done / quiz passed / X of Y / lit).
               Efficient, scannable, scales to big courses. MUST be excellent.
           • MAP view  (the companion, prominent, one click away)
               GoT territory: chapters = regions, sections = landmarks,
               fills in with progress; click region/landmark to jump.
               The emotional / identity / motivation lens. Free to be
               gorgeous because it is NOT burdened with being the index.
           (default to Contents; remember a student's preferred view;
            BOTH read identical progress, they can never disagree.)
         │
         ├─ Chapter view (a region / a TOC group)
         │    └─ SECTION view  ◄── THE ATOMIC UNIT, the learning loop
         │         loop = ENCOURAGE ORDER, ALLOW JUMPING (self-paced, no locks):
         │           1. Reading   (concept + ONE analogy + worked example)
         │           2. Quiz      (comprehension gate: T/F · MCQ · fill-blank;
         │                         from quiz.yaml; rationale shown after answering)
         │           3. Problems  (list of 5–15; section lights at ~60% of its own count)
         │                └─ CODING SCREEN (per problem)  ◄── THE HEART
         │                     • Monaco, ONE editor, tabbed models
         │                       (starter files + READ-ONLY cheatsheet tab)
         │                     • problem statement
         │                     • Run / Submit (async: submit → poll verdict)
         │                     • output pane  (+ "popup" = bigger output pane;
         │                       rendered text only, never executed)
         │                     • failure feedback: show failing case
         │                       (input / expected / actual), transparency aids
         │                       learning; gaming is pointless here
         │
         ├─ Chapter Test  (region "boss", SAME coding screen; pooled, integrative;
         │                  ~60% of the drawn set lights the chapter; ~24h window; fresh draw on retry)
         └─ Course Exam   (final boss, SAME coding screen; whole-course pool)

  Profile / account
    settings · login methods · (later: badges / shield)
```

---

## The two maps, DO NOT blur them
| | **Course map** (Phase 1) | **Community world** (north-star) |
|---|---|---|
| About | my journey through THIS course | where GROUPS stand vs each other |
| Scope | personal | collective / social |
| Lives | the Map *view* inside a course home | a separate top-level destination (reserved Community slot) |
| UI chat designs it? | **YES** (the companion view) | **No**, reserved slot only |

The UI chat designs only the **course map**. The community world is a marked slot.

---

## Reserved north-star space (slots exist, rooms unbuilt, DO NOT build now)
- **Community world**, the collective territory map (separate top-level, the reserved Community nav slot).
- **Group / khommunity pages**, a group's home, members, standing.
- **Helper status / frontline**, opt-in presence & finisher toggles.
- **The stuck-problem share**, launches from the CODING SCREEN (one-click snapshot of problem + current code). Its *entry point* lives on a Phase-1 screen, so leave conceptual room for a "share / ask for help" affordance there even though the destination is unbuilt.
- **Bootcamp / 1-1 tutoring** surfaces.
- **Profile** is the eventual home for badges / community shield, build the profile shell now, decorations later.

*Rule: the structure leaves these doors framed; Phase 1 does not walk through them.*

---

## Settled structural decisions
- **Course home = Contents (default backbone) + Map (companion), one toggle apart, identical progress, remembered preference.** The map is *freed* to be purely motivating because contents owns navigation. De-risks the map and scales to large courses / many courses.
- **Section loop = encourage order, allow jumping.** Presented reading → quiz → problems; UI nudges that order; a confident student may jump to problems. Matches "self-paced, nothing locked."
- **One coding screen** serves problems, chapter tests, course exams.
- **Contents view must be excellent from day one; the map can be iterated.** (Re-prioritizes build order, see below.)

---

## Suggested UI-chat build order (risk + identity first)
1. **Coding screen**, the heart, hardest, most novel.
2. **Section view**, the learning-loop template.
3. **Contents view**, the navigation backbone (must be solid day one).
4. **Course map**, the signature identity (can iterate).
5. Surrounding pages, catalog, course home shell, landing, profile shell.
