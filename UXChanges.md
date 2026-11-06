# UX Changes, notes for the brainstorm / architecture session

> A running log of structural / schema ideas that surfaced during the UI design sessions
> but that touch decisions OUTSIDE the UI's authority (content schema, data model,
> execution, architecture). Captured here so they get discussed where they belong,
> instead of being silently baked into the UI.
>
> Format per item: what, why it came up, what it touches, open question.

---

## 1. Cheatsheet as a Markdown file (not a `.cs` file)

- **Idea:** make each section's cheatsheet a **Markdown** document rather than the current `cheatsheet.cs` C# source file.
- **Where it came up:** designing the coding screen. The cheatsheet currently appears as a read-only Monaco tab (`cheatsheet.cs`), rendered as C# source with syntax highlighting.
- **Why it might be better as Markdown:**
  - A cheatsheet is a *reference document*, not runnable code. It can mix prose, headings, tables, and multiple small code snippets, which Markdown handles far better than a single `.cs` comment-heavy file.
  - Richer formatting (bold the gotcha, a 2-column "int vs double" table, the "= means gets" callout) reads better than everything-as-code-comments.
  - It could render as a styled reference panel instead of inside the code editor.
- **What this touches (NOT just UI):**
  - **Content schema** (`tasks/70-architecture.md` §5): the section tree currently lists `cheatsheet.cs`. Would become `cheatsheet.md` (or similar).
  - **The ingester** that parses the section folder.
  - **The coding screen's workspace model** (§8.4): cheatsheet is currently one of the Monaco "models" shown as a read-only tab. If it's Markdown, it may no longer be a Monaco tab at all, it might be a separate rendered reference pane / popover beside the editor.
- **UI has now IMPLEMENTED this in the mockup (ahead of brainstorm ratification):**
  - `design/mockups/coding-screen.html`: the tab is now **`cheatsheet.md`** (labelled "reference", not
    "read only"), and selecting it swaps the code editor for a **rendered markdown panel** (serif heading,
    an int-vs-double table, the "= means gets" callout, syntax-highlighted code blocks).
  - Because a `.md` isn't runnable, **Run/Submit hide** on that tab and the gutter note becomes
    "rendered reference · read only". `starter.cs` still uses the normal code editor.
  - So the cheatsheet is **no longer a Monaco model/tab**, it's a rendered reference view that lives in the
    same tab strip. This is the resolution to the "tab vs panel" question below: it's a *tab that renders a doc*.
- **Still needs brainstorm/architecture to ratify the schema side:**
  - Content tree: `cheatsheet.cs` -> **`cheatsheet.md`** (architecture §5); the ingester parses/serves it as a
    rendered doc, not a workspace code file.
  - §8.4 one-editor model: note that the cheatsheet is now a *rendered panel in the tab strip*, not one of the
    Monaco `files[]` models. Update the wording there.
  - We accept losing the "cheatsheet is just another file in your workspace" realism, the richer reference
    formatting is worth it (decided UI-side; confirm in brainstorm).
  - Minor: a `.md` cheatsheet is language-specific anyway, so no change to the "author once, translate per
    language" economics (that was always about problems, not the cheatsheet).

---

## 2. Course map = generative Voronoi treemap (chosen direction)

- **Decision (UI side):** the course map is a **generative Voronoi treemap**, not a hand-drawn illustration. Chapters are regions (partitions that tile the whole map and share borders); sections are sub-cells within each region. Chosen over hand-authored SVG partitions and over a hex grid.
- **Where it came up:** designing the course map (the signature view). User rejected "dots/pins in blobs" in favor of partitioned territory. Compared generative (Voronoi) vs hand-authored vs hybrid; chose generative (Sample A).
- **Why:**
  - It literally computes the map from the same Course -> Chapter -> Section tree the contents view reads ("one data set, many lenses").
  - It scales: adding a section reshapes the territory, no per-course manual art.
  - It is the only option that gracefully extends to the north-star **nested community territory map** (same algorithm, different data: student -> dept -> uni -> city -> country).
  - Honest tradeoff accepted: generative Voronoi looks more "diagram/angular" than a hand-drawn fantasy map. Can be softened later (curved borders, parchment texture, coastline wobble) without changing the approach.
- **What this touches (NOT just UI), for brainstorm/architecture:**
  - **Stack/dependency decision:** pulls in **D3** (`d3-hierarchy`, `d3-voronoi-treemap`, `d3-weighted-voronoi`, `d3-polygon`) on the frontend. Needs sign-off as a real dependency in `tasks/70-architecture.md` §2 (frontend stack).
  - **Where the layout is computed:** options are (a) at build/ingest time (compute polygons once per course, ship as data), or (b) in the browser at render. Lean (a) build-time: the map layout becomes part of the content manifest, so the client just draws precomputed polygons (fast, deterministic, no heavy client compute). This dovetails with the build-time ingestion model (§4).
  - **Seeded/deterministic layout:** Voronoi needs a seeded PRNG so a course's map is stable between builds (a section shouldn't jump around on every deploy). Prototype used a fixed seed; formalize this.
  - **Place-names:** sections carry evocative names (The Skeleton, Number Hollow, ...) in addition to numbers. This is new authored content per section -> a new field in the content schema (section metadata). Decide where it lives (section `README`/metadata) and that it is authored, not generated.
- **Prototype:** `design/mockups/map-voronoi.html` (generated by `map-build/gen-voronoi.js` against the real C# Basics tree: 4 regions, 25 cells). Progress states (lit / in-progress / none / boss), hover rollup cards, dark (night sea) + light (parchment) themes.
- **Open questions for brainstorm:**
  - Build-time vs client-side polygon generation (lean build-time).
  - Place-name field: where authored, and are they required per section?
  - How "fill in" animates when a region completes (whole region vs cell-by-cell), a motion decision for fidelity-2 polish.

---

## 3. Course map = REAL-WORLD PROVINCES (chosen, supersedes #2's rendering)

- **Decision (UI side, strong):** the course map uses **real administrative province/state boundaries** of a real country as the territory. Provinces = chapters; sections = landmark pins placed inside each province. This SUPERSEDES the pure generative-Voronoi rendering in note #2 (the Voronoi exploration led here; the hierarchy idea stays, the rendering changes to real geodata).
- **Where it came up:** map fidelity-2 refinement. User asked "could you draw it as real country provinces?" Prototyped with Austria's 9 states (Oberösterreich = Ch.1, etc.). User strongly approved ("THIS IS IT").
- **Why it wins:** it looks unmistakably like a real map because it IS one, authentic coastline, real borders, zero "diagram" feel. Far more evocative/screenshot-worthy than Voronoi cells.
- **Accepted tradeoffs:**
  - Sections become **pins inside provinces**, not sub-territories (we lose "partitions all the way down" at the section level, acceptable).
  - The map is tied to a **recognizable real place**, so the country choice must be deliberate and meaningful, not arbitrary.
  - Not auto-generative from the tree; each course gets a country assigned and provinces mapped to chapters (a per-course authoring step).

### 3a. Country choice, lean toward an AFRICAN map, starting at SOUTH AFRICA
> ⚠️ **SUPERSEDED by §7 (and the final decision below).** The "SA as the course map / grow north through Africa" idea was reverted. **Live decision: one real country PER COURSE; C# Basics = AUSTRIA.** Africa is reserved for the *community* map only. Kept below as decision-trail history, do NOT act on it.

- **Idea:** rather than a random European country, grow the world **northward from South Africa up through Africa** as courses/journeys expand. South Africa's 9 provinces = a natural fit for a ~9-region first course (mirrors the Austria prototype's 9).
- **Why it's good (not arbitrary, this is the "deliberate meaning" the decision requires):**
  - Gives the map a real identity and a growth story: start at the southern tip, journey north across the continent as you progress / as more courses ship. "Learn your way up Africa."
  - Africa is underserved by these platforms; a distinctly African world map is on-brand and memorable, and sidesteps the generic-EU-SaaS look.
  - Scales conceptually: SA provinces for course 1; neighboring countries (Namibia, Botswana, Zimbabwe, Mozambique...) become later courses/regions as the journey heads north, a built-in expansion map that doubles as the eventual community-world canvas.
- **Open questions for brainstorm:**
  - Is the country/continent choice a BRAND decision (needs sign-off), given it ties identity to a place?
  - Per-course country assignment: where authored? (course metadata -> country + province->chapter mapping.)
  - Province count rarely equals chapter count exactly, rule for mismatch (merge/split provinces, or pick a country whose province count fits, or allow empty/overflow provinces).
  - Geodata source + license (prototype used public Statistik Austria data via ginseng666; for SA use a public-domain/open source e.g. Natural Earth admin-1).
  - Still a **stack decision**: d3-geo + GeoJSON/TopoJSON on the frontend, computed build-time into the manifest (lean build-time, per note #2).

- **Prototypes:** `design/mockups/map-provinces.html` (Austria stand-in, the approved look) · earlier `design/mockups/map-voronoi.html` (superseded rendering, kept for reference). Generators in `map-build/`.

---

## 4. Community world (north-star) = the AFRICAN CONTINENT as its canvas

- **Decision (direction, north-star, NOT built in Phase 1):** the **community world map** (VISION §9b, the collective/social territory where khommunities hold ground) uses the **whole African continent** as its canvas. Real countries + provinces are the territory groups hold and compete over.
- **Keep the two maps separate (per design/00-structure.md):**
  - **Course map** (Phase 1, built): ONE country's provinces = one student's journey through one course. ~~South Africa's 9 provinces for C# Basics~~ → **SUPERSEDED: C# Basics = AUSTRIA, one real country per course (see §7).** Personal. *(The Africa-as-community-canvas direction in this note #4 still stands.)*
  - **Community world** (north-star, reserved slot only): the whole of Africa, groups/khommunities holding real regions, growing as communities form. Collective.
- **Why it's coherent:** same visual language (real geodata, provinces, indigo night / parchment), two different data sets and zoom levels. The personal course map is literally a zoomed-in piece of the same world the community inhabits, the "one data set, many lenses" principle made geographic.
- **Why Africa fits the community model:** the nested fractal (student -> department -> university -> city -> country, VISION §9b) maps onto real African geography; "the map grows as communities form" maps onto the continent filling in country by country.
- **Scope guard:** the UI session designs the COURSE map only. The community world stays a reserved slot (per structure doc). This note records the chosen *direction/canvas* so that when it IS built, it's consistent with the course map, it does NOT authorize building it now.
- **For brainstorm:** confirm Africa-as-canvas as a brand/north-star decision; defer all community-world build to its phase.

### 4a. Community-world idea seed, a moving trophy / crown on the African map (brainstorm, not designed)

> Raw thought to explore in the brainstorm session, NOT a UI decision and NOT to build. Lives with the community-world north-star (note #4).

- **The seed:** on the African continent map (the community world), make "who's winning" a visible, physical thing on the map itself:
  - a **trophy that moves around the map** to sit with the current leader, or
  - the **khommunity that owns / wins the challenges tied to a region gets a crown** placed on that part of the map (the region they hold).
- **Why it's interesting:** it turns abstract standings into something you can *see on the territory*, the map literally shows who holds what. Fits the vision's "territory IS the community" framing and the opt-in, event-shaped competition (VISION §9b/§10): a crown/trophy is an honor marker, not an ambient leaderboard.
- **Ties to existing vision pieces to reconcile during brainstorm:**
  - The four independent axes (headcount / score / tenure / frontline), is the crown a *score* win (intensity), a *tenure* honor (pioneer), or a campaign/event prize? Keep them separate per §9b.
  - "Honour that is sticky but earned" (§9b tenure refinement), a crown that must be defended to keep fits this well.
  - Challenges "mapped to a part of the map" implies region-based campaigns (university-vs-university territory campaigns, §10 competition).
- **Status:** pure idea seed. Decide in brainstorm whether/how it fits before any design. No action now.

---

## 5. RESOLVED STATUS of the map (reconciles notes #2 and #3)

> ⚠️ **PARTIALLY SUPERSEDED by §7.** The "REAL-WORLD PROVINCES" rendering decision here is still live.
> The **country choice is NOT**, it reverted from South Africa back to **AUSTRIA** (one real country per
> course). Read §7 as the live country decision; this note's rendering/performance findings still hold.

- **Final course-map decision: REAL-WORLD PROVINCES.** Voronoi (#2) is **abandoned as a rendering**;
  its hierarchy insight carried into the province approach. Province geodata is the way. *(STILL LIVE.)*
- ~~**Country = South Africa, built for real.**~~ **SUPERSEDED (§7): country = AUSTRIA.** C# Basics renders
  the 9 Austrian Bundesländer with **Oberösterreich lit (Chapter 1, "The Foundations")**. The SA artifact is
  kept only as an alternate-country reference.
- **Built artifact:** `design/mockups/course-map.html` (generated by `map-build/gen-za.mjs` from real
  SA GeoJSON; ~12 KB inline SVG, zero JS). Reproducible per `map-build/README.md`.
- **Performance (answered):** source GeoJSON is ~18 MB, but simplified + rounded it ships as ~12 KB of
  inline SVG with no runtime JS. It does **not** slow the site. (The only heavy frontend cost remains
  Monaco on the coding screen, already code-split.)
- **Still for brainstorm/architecture (unchanged from #3/#3a):** move province-path generation into the
  build/ingest step and the manifest; confirm d3-geo as a dependency; confirm SA/African canvas as a
  brand decision; place-names as authored section metadata; province-vs-chapter count mismatch rule.

---

## 6. Auth page, the gate (built; map deferred on it)

- **Built:** `design/mockups/auth.html`, split layout, **form on the LEFT** (eye lands there first),
  a **simple decorative panel on the RIGHT** (text top-left, a reserved corner bottom-right). States:
  log in / create account / forgot-password, all one template. Social-first (GitHub, then Google) +
  email/password, per the locked auth decisions (architecture §7b).
- **Map deferred here:** we tried the real SA map in the right panel; it fought the panel background
  (invisible fog provinces + a stray box) and was costing iteration, so the auth panel uses a simple
  gradient for now with the bottom-right **reserved for the course map later**. The map itself is fine
  on the course-map screen; only its placement *inside the auth panel* is deferred.
- **For later:** drop the real province SVG into the auth panel's reserved bottom-right corner, with a
  fog-fill/stroke tuned to read on that panel (not the course-map sea background).

---

## 7. CORRECTED map model, one country PER COURSE; Africa is for the community map (supersedes #3a's "SA as the course map")

> This corrects an earlier conflation. #3a/#5 tentatively made South Africa *the course map* and Africa
> *the community canvas*. The real model is cleaner:

- **Course maps = a REAL COUNTRY PER COURSE.** Each course gets its own country's provinces as its map.
  Finishing a course means you explored that country; the next course is a different country, its own world.
  - **C# Basics = AUSTRIA** (9 Bundesländer; Oberösterreich = Ch.1 "The Foundations", lit). This is the
    decided map for C# Basics. Built: `design/mockups/course-map.html`
    (generator `map-build/gen-austria.mjs`, data `austria-states.json`).
  - South Africa (`design/mockups/course-map-za-reference.html` / `gen-za.mjs`) is now just **another
    country option / reference**, NOT the C# Basics map. Kept on disk.
- **African countries are reserved for the KHOMMUNITIES (community world) map, much later.** Do NOT use
  African geography for course maps. The whole continent is the community canvas (per note #4), built in
  its own phase.

### 7a. Per-province STORIES as HINTS -> a reveal on EXAM success (sharpened idea)

> Evolved from "stories as flavor" into something stronger: the province stories are **hints/clues**
> that build a throughline across the course; the **payoff is revealed when you pass the exam** (a
> "side flag" that unfurls on success). The stories become a reason to *read* the map, and the exam
> becomes a real narrative climax, not just a gate.

- **The mechanism (now concrete):**
  1. **Hints are woven into the PROBLEM/TEST CONTENT itself, not written as separate stories.** Problems and
     chapter-test scenarios are flavored with the mapped country's **real** details: city names, footballers,
     a public holiday, real places/people used as the *data* in the coding problems. (e.g. a sum problem =
     "match attendance in Graz"; a string problem uses real Austrian city names.)
  2. So while learning to code, the student **painlessly absorbs real facts about the country**, facts that
     don't consume brainspace because they're just the texture of the problem. It *feels like a story* /
     a place you're moving through (fits the GoT theme) rather than a geography quiz.
  3. **The reveal on course-exam success = the country's FLAG + its NAME + one final FACT.** You've journeyed
     the territory; passing the exam names and "claims" it. Real payoff, not invented lore.
- **Why it's good:**
  - Gives the map a *reason to exist* beyond progress, you're travelling a real place.
  - Makes the **course exam a climax** (it unveils the flag/name/fact), reinforcing "the exam means something".
  - **Near-zero extra authoring cost:** authors already must write problem contexts; they just reach for the
    country's real cities/names/holidays instead of generic ones. The only genuinely new asset is the
    end reveal (a flag SVG + name + one fact per course), trivial.
  - Reward is curiosity + a real flag, not XP/confetti, on-brand calm-but-rigorous; fully opt-in to absorb.
- **Scope (from the discussion):** chapter tests *can* use these hint-scenarios but it's **not required** per
  test; the guaranteed beat is the **course-exam reveal** (flag + name + final fact). Laddering via chapter
  tests is allowed, not mandatory.
- **Open questions for brainstorm:**
  - Authoring guidance: how heavily to lean on real-country flavor in problems (every problem? some?) without
    making it gimmicky; keep it OPTIONAL to mechanics (course works with generic contexts too).
  - Province-count-vs-chapter rule still applies (see #3a).
  - The end reveal asset per course: flag SVG + country name + one curated fact, where authored (course metadata).
- **What it touches:** problem/test authoring style + the exam reward model + content schema (per-course
  country, and the flag/name/fact reveal). Firmly a brainstorm item, do NOT design now.
- **Status:** concept now concrete and cheap to author; needs brainstorm to set authoring guidance + the
  reveal asset's schema home before any design.

---

### 7b. Shareable map image / "free certificate" (architectural idea)

> A natural artifact of the map + flag system: let students export a branded image of their map state to
> share. Two moments, same render pipeline at different map states.

- **The mental model (user's framing): "complete a puzzle, then FRAME it."** The finished map = the completed
  puzzle (every province lit, the country whole); the certificate is the frame you hang on the wall. This
  drives two hard requirements: it must be **genuinely good-looking** (poster-quality, a celebration not a
  form) and **printable**.
- **The idea (two assets, ONE parchment look so they're a family):**
  - **Milestone share** (mid-journey): **square 1:1 Instagram / social card**, parchment/cert style.
    "I unlocked [city]" + the **half-lit map** with a marker on the just-unlocked region + "X of 9 regions lit".
  - **Completion certificate** (passed the course exam): **portrait A-series parchment sheet**, printable/
    frameable. The **full-lit map (the completed puzzle) is the hero**, course name centered like a classic
    certificate, a double frame line, "completed by [name]", a seal, and "a milestone, not a credential".
- **DECIDED, certificate shows the MAP ONLY (no flag, no country name):**
  - Two reasons: (1) the flag + name **cluttered** the clean composition and competed with the map hero;
    (2) they **spoil the reveal** for people who haven't finished (the unveiled country is the course's payoff).
  - So the country stays **implicit**, recognisable to someone who did the course, unspoiled for everyone else.
  - (The flag + name + final fact still belong to the in-app **exam reveal** per #7a, just not on the shareable cert.)
- **Requirements from "complete a puzzle, then frame it":**
  - **Poster/print quality:** vector output (SVG or PDF), NOT a low-res PNG; render at high resolution.
  - **Printable proportions:** certificate = portrait A-series (frameable); milestone = square (social).
  - **Print mode = the LIGHT / parchment theme.** People print on white; the dark night-map burns ink and
    muddies. Both share assets default to parchment.
- **Mockups built (for feel):** `design/mockups/cert-milestone.html` (IG square) + `design/mockups/cert-complete.html`
  (map-only portrait cert). Generated by `map-build/gen-certs.mjs` from the real Austria geometry.
- **Why it fits:**
  - It's just *snapshotting what the UI already renders* (lit map, flag reveal), the visual identity IS the
    share asset. Little new to invent.
  - The docs already call the personal map "the kind of thing people screenshot and share", this makes it
    first-class (a clean branded export, not a raw screenshot).
  - **Honest to "no credential" (VISION §10b):** frame it as a **personal celebration/trophy** ("I did this"),
    NOT an accredited diploma. Celebrates without claiming authority, the right line for a learn-for-yourself
    platform. Also opt-in (student chooses to share), matching "opt-in everything".
  - Organic marketing: a gorgeous lit-up map + khouding wordmark posted by a proud student is the best ad.
- **Cautions:**
  - **Celebration, not credential.** Wording/visual must read "milestone", never "This certifies that…".
    The moment it looks like official accreditation it clashes with the trust/no-credential ethos.
  - **Genuinely architectural (Phase 2-ish), not a UI mockup now.** Needs a server-side image-render endpoint
    (consistent output, Open Graph meta for social unfurling, resistant to trivially forging a higher claim),
    and a share page. Backend + infra work.
  - **Untrusted input on a public surface.** The student's name is rendered into a shareable image/page, so
    it's user-supplied text on a public asset → apply the "treat user input as untrusted" rule (no injection
    via a crafted display-name into the render/OG tags). Cheap to note now, annoying to retrofit.
- **What it touches:** backend (image/PDF generation endpoint, share page + OG tags), progress/exam state as
  the data source, brand assets (map + wordmark + flag), and the brand/positioning call. Positioning now
  decided: **celebration, and therefore it must be good-looking + printable (vector, light/parchment).**
- **Status:** strong idea, defer to its phase. Log only, do NOT build now. Revisit when the map + flag reveal
  are real and backend exists. Decided constraints: celebration (not credential), poster-quality, printable
  (vector/PDF, light theme), frameable proportions.

---

## Note, UI design summary + housekeeping

- A full UI design handoff summary lives at **`design/01-ui-summary.md`** (next to `design/00-structure.md`).
- **Screens (all fidelity 2):** coding, section, contents, course map, the four surrounding pages, and
  **auth** (the gate).
- **Map status (see #7):** C# Basics course map = **Austria** (`course-map.html`). South Africa
  (`course-map-za-reference.html`) kept as an alternate country reference. Africa reserved for the community map (later).
- **Deliverables on disk:** `design/brand/` (logo SVGs), `design/wireframes/` (fidelity 1 trail),
  `design/mockups/` (fidelity 2), `brand-build/` + `map-build/` (reproducible generators, each with a README).

---

## 8. Local contests (lab-style, ephemeral), "a problem-set + a window + a group"

> Surfaced in a brainstorm about whether khouding could host quick, local, "capture-the-flag"-style
> competitions for a class / department. **Flavor A chosen** (speed/score race over normal coding
> problems), NOT literal security CTF (hidden-flag/exploit grading, a different grading mode, off the
> "learn the craft" spine; parked as a maybe-later "fun mode"). Log only, do NOT build in Phase 1.

- **The motivating real-world model (the user's context):** a CS association runs a **yearly contest on
  HackerRank**. Everyone competes **from the same lab, at the same time**. **Nothing persists** on the
  platform, the reward is a **physical, real-life prize** handed out by the association. khouding would be
  the *arena + scoreboard*, not the prize-giver.
- **Why this model is the cleanest possible competition for us (it dodges our hard parts):**
  - **Ephemeral by design.** "Nothing persists" is a feature. A contest does **NOT** need to touch
    persistent progress, the personal course map, or the north-star community-world territory. It's a
    **bolt-on surface**, kept well away from the core data model.
  - **Co-located + synchronous.** One lab, shared start, shared clock → no cross-timezone fairness problem,
    no distributed anti-cheat problem. A shared start time + a live scoreboard (projectable on a wall) is
    the whole UX. Far simpler than an async distributed competition.
  - **The prize lives OUTSIDE the system** → sidesteps the "no credential, ever" tension (VISION §10b, and
    `60-monetization.md` §6.9). khouding is just the arena; the association hands out the trophy. Nothing
    on-platform claims authority. On-brand.
  - Mental model: **"HackerRank contest mode, but on MY engine and MY C# problems"**, a recombination of
    pieces we already plan, not a new product.
- **The recombination (nothing new to invent for Flavor A):** a contest = **problem-set + start-time +
  duration + group**, all three of which are things we already have or already plan:
  - **Problems**, exist (`problem.yaml`, oracle solution, hidden varied/edge test cases, stdout-match).
    A contest reuses the **exact same execution + oracle grading**; no new grading mode for Flavor A.
  - **A "problem-set"**, a new thin, first-class concept: an **ordered list of existing problem IDs**
    (a manifest). Decoupled from the section tree so a contest can pull problems from anywhere.
  - **A "group"**, reuse the planned **group entity** (VISION §9b: don't hard-code "university", model a
    group with *types*; a **class** is just the smallest group type). The contest's roster.
  - **A time window**, reuse the already-decided principle that **timing is a mechanic, never a gate**
    (VISION §10b): the window decides what counts for the **scoreboard**; it NEVER blocks anyone from
    finishing/learning the problem afterward.
- **Scoring (Flavor A, HackerRank-shaped):** rank by **problems solved**, tie-break by **time** (and/or
  penalty for wrong submits, ICPC-style). An **event scoreboard**, explicitly bounded: shows live during
  the window, **freezes to a result** at the end, then becomes a one-time artifact. NOT an ambient/permanent
  leaderboard (VISION §10 is explicit that ambient leaderboards demoralize, a contest is an *event*, not a
  standing ranking).
- **Brand caveats to honour (so a contest doesn't contradict the ethos):**
  1. Keep it a **game**, never a **gradebook**, an instructor running a Friday contest must read as *fun /
     rivalry*, not "the teacher is grading us" (would clash with VISION §10b "no graded/proctored
     assessment, ever").
  2. **Event-shaped, not ambient**, bounded start/end/result, then done.
  3. **Prize is external**, khouding never issues the reward; it's the arena + scoreboard only.
  4. Literal security-CTF (hidden flags / exploits) is a **different grading mode** → parked as an optional
     later "fun mode", not the default.
- **Why it's a great SEEDING WEDGE (strategic upside):** one instructor running a lab contest for ~30
  students = ~30 real accounts **clustered around one course at one institution**, exactly the "density
  beats breadth" seeding strategy (VISION §10). The contest is a Trojan horse for the community growth loop.
- **What it touches (for the brainstorm / later phases, NOT now):**
  - **Content schema / data model:** a new **problem-set manifest** concept (ordered problem-ID list),
    independent of the section tree (`70-architecture.md` §5). A **contest record** (problem-set + group +
    start + duration + scoring rule) and ephemeral **contest-submission / scoreboard** state in World B
    (`70-architecture.md` §6), kept SEPARATE from persistent `progress` so a contest never pollutes a
    student's real map.
  - **Group entity:** confirms the "model a group with types; class = smallest group" decision (VISION §9b)
   , a contest is the first concrete consumer of the group entity, and the simplest one.
  - **Execution:** **reuses the adapter + oracle grading unchanged** for Flavor A. No new execution work.
  - **Frontend:** a contest lobby + a live scoreboard view (projectable). Reuses the existing **coding
    screen** verbatim for solving. A genuinely new (but small + self-contained) surface.
  - **Untrusted-input rule applies:** a public/projected scoreboard renders student-supplied display names →
    treat as untrusted text (same guard as the shareable cert, §7b).
- **Recommendation (the governing call):** **do NOT build this in Phase 1.** Build the core first
  (authoring CLI → C# course → coding screen → personal map), per `tasks/00-INDEX.md` "the one rule." But
  while designing the **group entity** and the **timing mechanic**, keep the "problem-set + window + group =
  contest" recombination in mind so the door is **framed, not walled off** (same pattern as the reserved
  community-world slot in `design/00-structure.md`). When there's a real class + a willing instructor, a
  contest should be ~a weekend of work because the primitives already exist.
- **Status:** logged idea / seeding wedge. Flavor A decided; security-CTF parked. Needs brainstorm to ratify
  the problem-set + contest-record schema and the group-entity-as-contest-roster model before any design.
  Do NOT act on it now.


---

## 9. Coding screen needs a stdin INPUT BOX (surfaced by Chapter 2)

- **What:** the coding screen must expose a **stdin input box** (a text area whose contents are piped to the
  program as stdin on Run). Chapter 1 was almost entirely no-input, so the box could be hidden/empty there.
  **From section 2.1 on, every problem reads input**, so the box becomes essential.
- **Why it came up:** scaffolding Chapter 2 (Input & Interaction). Students must be able to test
  input-reading programs: type sample input into the box, hit Run, see output, iterate.
- **How it fits the model (no new execution concept):** this is the SAME `stdin` the `problem.yaml` cases
  already use and the oracle CLI already pipes. Authoring side pipes the case's `stdin`; the student's Run
  pipes the input-box contents. Same pipe, different source. One-shot, non-interactive execution is
  unchanged (VISION §5).
- **Run vs Submit (testing story):** Run uses the student's own input-box text; Submit runs the hidden
  cases and grades. On a failed Submit, the failing case (input/expected/actual) is revealed, so even hidden
  inputs become testable on Run afterward.
  - **Reveal must include stderr (see 9c):** when a student's code crashes on a hidden case, "actual" is the
    truncated stdout PLUS the stderr and non-zero exit. The reveal has to surface stderr, not just the stdout
    diff; otherwise a crash looks like "expected two lines, got two lines" with no clue why it failed.
- **What this touches:** the coding-screen UI only (an input field + wiring its contents to the run call).
  No backend/execution change. Not built yet (no UI is); logged so the coding screen includes it when built.

## 9a. Later polish, echo supplied stdin inline in the output pane (make piped runs LOOK interactive)

- **What:** a display-only trick in the output pane: when the program consumes a line of stdin, **echo that
  line inline** at the point it is read, so a prompt + input renders like a real session
  (`Enter name: Ada`) even though the input was piped, not typed live.
- **Why:** with piped, non-echoing stdin, an inline prompt (`Write("Name: ")`) otherwise runs together with
  later output. Chapter 2 sidesteps this by teaching **prompt-on-its-own-line**, which reads correctly today
  with zero platform work. This polish would additionally make piped runs *feel* interactive.
- **Crucially NOT a live terminal:** no bidirectional session, no PTY, no persistent process, no World-A/
  World-B change. It is purely a rendering of already-supplied input in the output pane. Far cheaper than a
  real interactive terminal (which the vision deliberately rejected, VISION §5) and carries none of its
  security cost.
- **Status:** Phase-2 UI nicety. Content does not need it (prompt-on-its-own-line is the authored pattern).
  Logged so it is considered when the coding screen is polished.
## 9b. DECISION, animated playback of supplied stdin (chosen target for the "feels live" terminal)

- **Decision:** the coding screen targets **option 3, animated playback, rendered inline (Path B)**. The input
  box (item 9) stays the visible, honest source of input. On Run, the output pane renders the session and
  **animates each consumed input line keystroke by keystroke, drawn on the same line as its prompt**, so a
  prompt plus its input appears to be typed live (`Enter a number: ` then `5` typed out on that line, then the
  result). Builds directly on 9a's inline echo; the additions are per-character timing and same-line layout.
  The authored content does NOT change (it stays prompt-on-its-own-line); "inline" is a renderer layout choice
  only.
- **Input source:** the separate input box, always. The student types sample input into the box, hits Run,
  and the animation plays back **that box text**. Nobody types into the terminal. It is playback, not capture.
- **Execution model is unchanged:** still ONE-SHOT piped stdin (VISION §5). The program has already run to
  completion; the animation is a pure front-end rendering of known inputs and known output. No PTY, no
  persistent process, no bidirectional session, no backend change.
- **Inline rendering (the chosen look, Path B):** the authored program output stays **prompt-on-its-own-line**
  (unchanged, self-legible on every surface). The animated player then **draws the prompt and the input it
  consumes on the SAME line** (`Enter a number: 10`), so the session reads as inline even though the program
  printed the prompt and the input arrived on separate lines. "Inline" is purely a layout decision in the
  renderer; it does NOT change what the program prints or what the oracle captures. This gives the inline
  animated feel with zero content change and no coupling: expected.json, tests.md, and failing-case diffs stay
  clean and prompt-on-its-own-line. (We explicitly rejected switching the content to inline `Write` prompts,
  which would bake run-together, input-less strings into every expected and make the content legible only
  inside the player.)
- **Interleaving rule (how the animation knows placement):**
  - **First pass (cheap, good enough for current content):** assume one input line is consumed per prompt and
    draw it on that prompt's line. Every authored Chapter 2 problem is prompt-on-its-own-line and reads exactly
    one line per prompt, so this is correct for everything shipped so far.
  - **Accurate (only if later content needs it):** have the runner emit a tiny read-marker so the front end
    gets the true read-to-output interleaving. This is a runner change, so it is deferred until an authored
    problem has an irregular read pattern that the heuristic cannot place.
- **Honest caveat:** because execution is one-shot, there is no true back-and-forth (type, see next prompt,
  type again). The animation reconstructs that rhythm from the already-supplied box text and the captured
  output. It looks live; it is scripted playback. The visible input box keeps the model honest: supply input,
  then run.
- **Run vs Submit:** unchanged from item 9. Run animates the student's box text; Submit runs the hidden cases
  and grades. On a failed Submit, the revealed failing case can be dropped into the box and replayed on Run.
- **Status:** chosen Phase-2 UI direction. Content needs none of it (prompt-on-its-own-line is the authored
  pattern and reads correctly with zero animation). Logged as the decided target for when the coding screen is
  built and polished.
## 9c. DECISION, mid-session error rendering contract (how the player handles an error between prompts)

- **Context:** under one-shot piped stdin, a program that throws between prompts (e.g. a parse failure on the
  second read) has ALREADY run to completion before the player animates anything. The player replays known
  streams; it does not discover the error live. Ground truth for a two-prompt program whose second read throws:
  - **stdout:** `Enter the first number:\nEnter the second number:\n` (both prompts printed, nothing after)
  - **stderr:** the real exception text (e.g. `System.FormatException: The input string 'abc' was not in a
    correct format.`) plus stack trace
  - **exit:** non-zero
- **Where it is reachable:** only on the student's own **Run** (free-form input box), where they can type bad
  input. Graded content never triggers it: the oracle runner fails on non-zero exit, and the authored invariant
  is name-don't-handle (hidden cases feed valid input only), so no shipped solution throws. See VISION §5.
- **Rendering rules (the contract):**
  1. **stdout only is animated.** stderr is rendered as a separate, visually distinct (error-styled) trailing
     block, never interleaved as if it were normal program output.
  2. **Animation stops at the read that threw.** No later prompts are drawn, because nothing later ran. The
     break is the honest signal that the program crashed here.
  3. **Same-line (Path B) crash handling:** the throwing read is mid-line (prompt already on screen, bad input
     animating after it). Finish drawing the consumed input (`abc`), break to a new line, THEN render the error
     block. The bad input sits directly before the error it caused.
  4. **Non-zero exit is shown** (a small "exited with code N" footer) so a crash is never silently
     indistinguishable from a clean run.
  5. **Never fake recovery.** The player must NOT skip the bad read and continue to the next prompt. The
     animation replays exactly what the program did; it never rewrites the run to look graceful. Replaying truth
     attractively is the whole job of the layer; diverging from the real run is the one failure mode it must not
     have.
- **Status:** chosen renderer-behavior contract, Phase-2 UI. Authored sections are unaffected (valid-input-only
  by construction) and need no change. Logged alongside 9b.
