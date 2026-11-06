# khouding UI, design summary

> Handoff from the UI design session. Companion to `00-structure.md` (the page/nav skeleton).
> Everything here was designed against the real C# Basics content (section 1.3) in two fidelities:
> fidelity 1 = greyscale wireframes (lock structure), fidelity 2 = interactive mockups (real theme, type, motion).
> Structural ideas that touch content schema / architecture are logged separately in `../UXChanges.md`.

---

## Identity (locked)

- **Theme:** Indigo. **Dark is the default / home**; light is a first-class alternate (not an afterthought).
  Built on **semantic tokens** (`--bg`, `--surface`, `--surface-2`, `--border`, `--text`, `--text-muted`,
  `--accent`, `--success`, `--danger`, ...) so dark/light is a token swap, never an inversion. These map
  directly to CSS variables for the eventual React build.
  - Dark accent `#8a8bf0`; light accent `#4f4fc4`.
- **Typography (tri-voice):**
  - **Source Serif 4** = the textbook voice (section/course titles, reading headings).
  - **Inter** = the interface voice (all UI chrome).
  - **JetBrains Mono** = the code voice (editor, status, meta, breadcrumbs).
- **Logo / wordmark:** `khouding`, lowercase, **JetBrains Mono**, single color, with a drawn **I-beam text
  cursor replacing the "i"** (variant A spacing: tight gap, medium bar). Cursor is theme-aware indigo
  (bright on dark, deep on light); on a saturated brand fill the whole wordmark goes near-white.
  Favicon / app tile = the bare **`k`**. Real SVGs in `design/brand/`, reproducible via `brand-build/gen.js`.
- **Syntax highlighting** is its OWN palette, deliberately NOT the brand accent (keywords were hard to read
  when they reused the accent on the dark editor). Accent stays reserved for UI (buttons, active states,
  progress, map).
- **Motion:** purposeful, not ambient. ~140-300ms eases. The one "emotional" moment is **earned progress**
  (a section lighting up, a map region filling), a gentle glow, never confetti. Honors `prefers-reduced-motion`.
- **No AI tells (standing rule):** visible theme toggle in the nav, no scroll-prompt furniture, no em dashes,
  real human copy (no generic hero fluff).

---

## Screens (each taken fidelity 1 -> fidelity 2)

### 1. Coding screen, the heart
One screen reached three ways (section problem, chapter test, course exam); only framing copy changes.
- One Monaco editor, **file tabs** (`starter.cs` editable + `cheatsheet.cs` read-only). **No autocomplete /
  IntelliSense**, syntax highlighting only.
- Three zones: **problem panel (left)**, **editor (centre)**, **output pane (bottom)**.
- Problem panel **collapses to a thin hamburger strip** (strip only shows when collapsed; hamburger expands it).
- **Run / Submit** are async (run -> verdict). States: idle, running, passed, failed, compile error.
- **Failing case shown** on failed submit (input / expected / your output), transparency aids learning.
- Output pane **expands** in place (the "popup" = a bigger output pane, never a real terminal).
- **Problem rail** to move across the 15 (step with arrows, jump by clicking); same screen in **test/exam mode**
  (timer + flag-for-review).

### 2. Section view, the learning loop
The ONE template every section reuses.
- Persistent **stage switcher**: Reading -> Quiz -> Problems (encourage order, allow jumping).
- Reading = calm long-form (serif heading, callouts, code block).
- Quiz = **one question at a time**, rationale revealed after answering, pass threshold shown.
- Problems = the 15 as a list with state + difficulty, each links into the coding screen.

### 3. Contents view, the navigation backbone (must be excellent day one)
- Course header + **Contents / Map toggle** (course home default = Contents).
- **Accordion** of chapters -> sections.
- Per-section rollup markers: **R (reading) · Q (quiz) · X/N (problems, N = that section's own count)** + a **lit dot** at the section's `lights_at` (~60%).
- Resume bar ("pick up where you left off"). Region framing kept (badges, "region boss").

### 4. Course map, the signature identity
- **Real-world province map, one country PER COURSE.** **C# Basics = Austria** (9 Bundesländer = chapters;
  Oberösterreich = Ch.1 "The Foundations", lit). Each future course takes a different country's provinces.
- Pins (landmarks) = sections in the lit chapter. **dark = night sea / light = parchment**. Inline SVG, zero JS.
- Rendered with **d3-geo + GeoJSON**; generator `map-build/gen-austria.mjs` -> `course-map.html`
  (South Africa kept as a reference country: `gen-za.mjs` -> `course-map-za-reference.html`).
- **Idea (per-province stories):** a short *real* story per province, surfaced on unlock. Optional to mechanics.
- African countries are reserved for the **community world** map (later), not courses. See `UXChanges.md` #7/#7a.

### 5. Surrounding pages
- **Nav pattern (all pages):** logo left; theme toggle + (avatar OR "Log in") right; **nothing in between.**
  ALL navigation lives in the **avatar dropdown menu** (Navigate: My courses, active course · You: Account,
  Login methods, Preferences, Badges-soon, Log out).
- **Landing** (logged-out): serif slogan, the real thesis, Start / Browse, three thesis cards.
- **Catalog / My courses**: clean course cards (no cover thumbnails), progress + Continue.
- **Course home shell**: slim hero (title, progress, resume) + Contents/Map toggle; holds the two built views.
- **Profile**: account fields, the three login methods (email+password, Google, GitHub), reserved
  khommunity badges/shield slot.

### 6. Auth, the gate (public zone)
- **Split layout: form LEFT** (eye lands there first), **decorative panel RIGHT** (simple gradient;
  bottom-right corner reserved for the course map, deferred, see `UXChanges.md` #6).
- One template, three states: **log in / create account / forgot password**.
- **Social-first:** GitHub then Google, then "or with email" + email/password. Per architecture §7b
  (ASP.NET Core Identity, cookie sessions, link-by-verified-email).
- `design/mockups/auth.html`.

---

## File map

| Path | What |
|---|---|
| `design/00-structure.md` | page / nav skeleton (pre-existing) |
| `design/01-ui-summary.md` | this document |
| `design/brand/` | final logo + favicon SVGs (wordmark dark/light/current/on-indigo/mono, mark, tile, favicon) |
| `design/wireframes/` | fidelity 1 trail: coding-screen, section-view, contents-view, surrounding-pages, auth |
| `design/mockups/` | fidelity 2: coding-screen, section-view, contents-view, course-map (real SA), surrounding-pages, auth |
| `brand-build/` | logo generator (`gen.js` + JetBrains Mono font + README) |
| `map-build/` | course-map generator (`gen-za.mjs` + SA geodata + README) |
| `UXChanges.md` | structural decisions for the brainstorm / architecture session |

---

## Open items -> brainstorm / architecture (detailed in `../UXChanges.md`)

1. **Cheatsheet as Markdown** instead of `cheatsheet.cs` (touches content schema + the one-editor model).
2. **Map tech:** settled on **real province geodata** (d3-geo + GeoJSON, lean build-time generation);
   **place-names are new authored content** needing a schema field.
3. **Course map country = South Africa** (9 provinces; journey Cape -> Limpopo).
4. **Community world = the African continent** (north-star canvas; reserved slot, NOT built in Phase 1).
5. **Trophy / crown on the African map**, community-world idea seed (a trophy that travels to the leader,
   or a crown on the region a khommunity holds).

## Not done (by design)
- **Fidelity 3 (real React components)**, not started; the fidelity-2 mockups are the spec for it.
- **Map inside the auth panel**, deferred; the auth right-panel has a reserved corner for it (`UXChanges.md` #6).
- **Community world** and anything in `UXChanges.md`, awaits the brainstorm / architecture session.
