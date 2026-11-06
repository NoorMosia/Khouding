# khouding, Authoring Guide

> Carry this into any authoring session. It is **self-contained**, it restates the decisions you need so a fresh session can author correctly without re-reading everything.
> Canonical sources if you need depth: `VISION.md`, `tasks/70-architecture.md` (§5 content schema), `courses/csharp-basics/ROUTEMAP.md`, and the worked example `courses/csharp-basics/sections/1.3-number-variables/`.

---

## 0. The plan (decided)
- **Author ONE full course before building the platform / writing specs.** Start with **C# Basics** (momentum + a proven section already in it). One complete course validates (a) the content thesis, (b) the authoring format against reality, and (c) the real per-course time cost, without the migration risk of authoring 2–3 courses against an unvalidated format. Courses 2–3 come *after* the platform can ingest/serve/grade course 1. *(If authoring is where your energy is and more keeps you flowing, that's a fair motivational trade, just know the format-migration risk.)*
- **Skeleton first, then flesh** (the "gray map → add color" method). See §4.
- **Build the little authoring CLI before heavy authoring** (see §6), it generates expected outputs by running solutions. Without it, authoring at volume is painful.

---

## 1. The non-negotiable philosophy (why the content is shaped this way)
- **"Learn to code like it's 2016."** Rigorous, you-write-the-code, no hand-holding. External tools (Google, Stack Overflow) are the student's business; the platform is a realistic workbench, not a tutor.
- **Wax on, wax off.** Even trivial skills get drilled to fluency through volume. Variety in *surface* (type, context, values), repetition in *skill*.
- **A landmark on the map is always a place you actually DID something.** Every section is a practice section.
- **Depth is the brand.** One shallow section undermines the whole "university standard" promise. Hold the bar.

---

## 2. The structure (what you're authoring)
```
Course ("C# Basics")                 → one real country's map (working default: Austria)
  Chapter (a REGION; has a title e.g. "The Foundations")
    Section (a LANDMARK; ONE learnable idea)
      · reading.md  , concept + ONE analogy + worked example (short)
      · quiz.yaml   , comprehension gate (T/F · MCQ · fill-blank) + quiz.md human mirror
      · cheatsheet.md, tight, this-section-only reference (renders as a panel, NOT code)
      · problems/   , 5–15 problems, a FAMILY (variations of the one idea, escalating;
                       size follows the idea's depth, floor 5, ceiling ~15)
    Chapter Test (region "boss"), integrative, pooled, drawn from a LARGER bank
  Course Exam (final boss), whole-course integrative, pooled
```

**The section test:** *"In this section you learn to [ONE specific thing], proven by [a quiz] and [a family of problems that are all variations of that one thing]."* If the goal needs the word "and", it's two sections. If you can't imagine at least ~5 problems for it, it's too small (fold it into a neighbor's reading).

**Section size (course-wide rule):** a section has as many problems as its one idea naturally warrants, **floor 5, ceiling ~15**. No forced count. Lighter ideas (recognition/placement, naming) run small; deep ones run full. **Completion lights the section at ~60%** of its own problems (5→3, 6→4, 15→9). The threshold is an authored per-section field (`lights_at`); the count is derived from how many problem folders exist. The old fixed "8/15" is just the shape of a full drill section, not a universal constant. Smaller early sections also make the map fill in faster, early momentum for a new student.

---

## 3. The file format (per section + per problem)

### Section folder
```
<section-id>/            e.g. 1.3-number-variables   (slug = stable ID; don't rename after publish)
  README.md              section spec + problem index (human doc)
  exercises-draft.md     skeleton-pass scratch: the problem family's bones, BEFORE real folders (see §4)
  reading.md             student-facing reading
  quiz.yaml              SOURCE OF TRUTH (machine-graded)
  quiz.md                human mirror (not parsed)
  cheatsheet.md          this-section-only reference document
  problems/
    pNN-slug/            one folder per problem
```
*`exercises-draft.md` is the standard per-section scratch artifact, one per section, all the same shape.
It is NOT parsed and is superseded by the real `problems/` folders once authored; keep it as the family's
design record (copy `courses/csharp-basics/sections/1.1-parts-of-a-program/exercises-draft.md` as the template).*

### Problem folder
```
pNN-slug/
  problem.yaml           SOURCE OF TRUTH: idea, grading type, languages, starter/solution file lists,
                         test-case INPUTS + a required `note` each. NO expected outputs.
  design.md              language-independent human doc: statement, I/O contract, why the cases
  starter.<lang>         pre-seeded file(s) the student edits
  solution.<lang>        reference solution = the ORACLE
  tests.md               human mirror of the cases (not parsed)
```

### Chapter-test / exam folder (a TEST is POOLED, different from a section)
A region boss (chapter test) or final boss (course exam) draws a test-sized set from a **larger pool**, so
it is non-memorizable. Its folder differs from a section:
```
<chapter>.T-chapter-test/          e.g. 1.T-chapter-test   (exam: <course>.E-course-exam)
  README.md              boss spec + pool index (human doc)
  exercises-draft.md     skeleton-pass scratch (the pool design)
  test.yaml              SOURCE OF TRUTH: kind, draw size, light threshold, window, the pool (problem IDs)
  cheatsheets/           the gathered section cheatsheets for scope (chapter test = this chapter's sheets;
                         exam = course-wide library), "the cheatsheet library", scope scales up
  pool/
    pNN-slug/            one folder per pool problem, SAME shape as a section problem (problem.yaml /
                         design.md / starter.<lang> / solution.<lang>); expecteds via the CLI, unchanged
```
`test.yaml` carries completion as **draw + light threshold**, not a problem count:
```yaml
id: <course>/<chapter>.T
kind: chapter-test        # or: course-exam
draw: 10                  # problems served per attempt
light_at: 6               # ~60% of the draw lights the region
window_hours: 24          # generous; miss it → doesn't light, retry gets a fresh draw; no lockouts
shuffle: true
pool: [ p01-..., ... ]    # ordered pool IDs (bank is bigger than the draw)
```
- **Pool >> draw** (e.g. ~20 pool / draw 10) so a fresh draw each attempt resists memorization.
- **Anti-hardcoding for no-input bosses = the pool itself:** author each scenario family as several
  **value-varied variants** (different baked-in literals) so a memorized output fails on the next draw.
- **The oracle CLI needs NO change**, `pool/pNN-*/` are ordinary problem folders; `node kh.mjs gen <…>/pool`
  generates their expecteds (verified: discovery walks any dir containing a `problem.yaml`, incl. empty stdin).
- Worked example: `courses/csharp-basics/sections/1.T-chapter-test/exercises-draft.md`.

### `problem.yaml` shape (copy this)
```yaml
id: pNN-slug
title: Short title
difficulty: 1            # 1 ●  2 ●●  3 ●●●
grading: stdout-match    # (unit-tests later, for "implement a class")
languages: [csharp]
starter:  { csharp: [starter.cs] }
solution: { csharp: [solution.cs] }
cases:                   # INPUTS ONLY, expecteds are generated by running the solution
  - { stdin: "3\n4",   note: normal }
  - { stdin: "0\n0",   note: edge - zeros }
  - { stdin: "-5\n2",  note: edge - negative }
```

### `quiz.yaml` shape (copy this)
```yaml
section: <course>/<section-id>
pass: 5                  # how many of N to clear the gate
shuffle: true
questions:
  - { id: q1, type: mcq, prompt: "...", options: [{id:a,text:"..."},{id:b,text:"..."}], answer: b, rationale: "..." }
  - { id: q2, type: truefalse, prompt: "...", answer: false, rationale: "..." }
  - { id: q3, type: fillblank, prompt: "... ____ ...", accept: ["int"], rationale: "..." }
```

---

## 4. The method: skeleton first, then flesh ("gray map → add color")

**Pass 1, lay the skeleton (structure + bones, no flesh):**
- Create every chapter/section folder for the whole course.
- **Per section, write `exercises-draft.md` first**, the problem family's bones as a human doc: the one-idea, size + `lights_at`, the grading approach, the anti-hardcoding note, and a table + one-line intent per problem. This is the cheapest place to get the family's *shape* right (escalation, coverage, what each problem proves) before any folders exist. Template: `1.1-parts-of-a-program/exercises-draft.md`.
- Then, in each `problem.yaml` stub, fill the **load-bearing bones immediately**: the **one-idea** (title), **difficulty**, and the **test-case inputs + notes** (what edge cases must this resist?). These are the *design*; capture them now so the family stays coherent and anti-hardcoding holds. Leave solution/reading/expecteds empty.
- Result: you can SEE the whole course, spot gaps, rebalance, cheaply, before sinking effort into prose.

**Pass 2+, add color, batched by content type (more efficient + consistent voice):**
- All readings in one pass · all drill problems in another · all tests/exam last.
- For each problem: write `starter`, write `solution`, run the CLI to generate expecteds, sanity-check.

Why: structure is cheap to fix at skeleton stage, expensive after 200 problems are fleshed into the wrong shape. And an overwhelming blank page becomes a checklist of labeled empty slots.

---

## 5. The hard rules (do not break these)

### Anti-hardcoding (the grading must be real)
- **Every problem graded by MULTIPLE hidden test cases with VARIED inputs incl. edge cases** (zero, negative, large). A program printing a single literal must fail. *(Proven: `WriteLine(7)` scored 1/5 on p05.)*
- **Oracle, not opinion:** you NEVER type an expected output. Write the `solution`, the **CLI runs it** to produce expecteds. (A human can't typo a value they don't type.)
- Each case carries a required **`note`** (why it exists), forces the edge-case mindset; a reviewer/friend reads notes to spot a gap.

### Problem families (keeps authoring sane AND pedagogy right)
- The 5–15 problems in a section are **variations of ONE idea**, escalating difficulty, varied surface (type / context / values). Author as a family, not N unrelated things, repetitive-by-design = cheap to produce + builds fluency.

### Grading semantics (match the platform contract)
- **Strict match**: trailing whitespace significant, case-sensitive, blank lines significant. **One carve-out:** line endings normalized (`\r\n`→`\n`).
- **Failing case is shown** to the student (input/expected/actual), transparency aids learning; gaming is pointless (no credential).

### Reading style
- **No analogies (course-wide rule).** State concepts plainly and directly. Analogies ("a variable is a jar", "a program is a letter") talk down to the student and make them feel they are getting a simplified stand-in rather than the real thing, which fights the university-standard, you-are-a-real-developer tone. Say what the thing *is*, in plain language. Anchor on something the student can observe (e.g. output), not on a metaphor.
- Concept → worked example. Short. One idea's worth.
- *(The brand motto "wax on, wax off" is house voice, not a teaching analogy; it may appear as framing. The ban is on explanatory metaphors that stand in for a concept.)*
- **Structure as a few clearly-marked major parts.** A reading is a short sequence of landmark sections, each a distinct beat (e.g. 1.1: *Your first program → The frame, part by part → Where your code goes → When it does not compile → What you'll practise*). Rendered, each major heading is a clear landmark (weight + space above + a divider) so the reading scans as parts, not a flat scroll. Keep the hierarchy light: landmark headings for the major beats, plain prose within them. Do NOT box ordinary content. Reference render: `design/mockups/section-view-1.1.html`.
- **Every code snippet is followed by its output (course-wide rule).** Never show runnable code in a reading without showing what it prints, right after it, in its own `Output:` block. The student should never see code without its effect (fits "anchor on something observable"). Do NOT fake output as inline `// comment` annotations; use a real output block. (The exception is a non-runnable fragment, e.g. a single declaration with nothing to print.)
- **The error beat uses grouped units, not a loose run:** the general "how to read an error" skill sits in one grouped block; each specific error is its own small card pairing the rendered error line with its explanation. (This is what keeps the densest part of the reading legible.)

### Error literacy (course-wide standard): every reading ends with it, every cheatsheet carries it
A beginner's biggest pain is a compiler error they can't parse. So reading errors is a taught skill, not hand-holding (it is exactly the 2016 "figure it out from the message" craft).
- **Every reading ends with a brief error-literacy beat.** Keep it short.
  - **1.1 teaches the general skill ONCE** (what a compiler error is; read the FIRST error; it names a file + line; the fix is usually near there). Slightly fuller because it is the first time.
  - **Every later section just lists ITS likely errors**, two or three lines, assuming the 1.1 skill. Do NOT re-teach the basics each time (that is what makes it repetitive).
  - **Show the REAL error line, then explain it in prose. NO table in the reading.** For *each* error, render the actual compiler output (e.g. `s.cs(9,46): error CS1002: ; expected`) the way the student truly sees it, with the `(line,col)` location visible, then a short sentence or two: what it means and how to fix it. Every error gets this same walked-through treatment (do NOT collapse them into a lookup table, that belongs in the cheatsheet). Seeing the literal message is the point, that is what they face in the editor. (Errors quoted must be ones you have actually produced by compiling, never invented, same oracle discipline as expecteds.)
- **Every cheatsheet carries a tight "common errors here" block near the end**, as a compact **table**: columns **Message / Usually means / Fix**. This is the quick-glance reference you reach for *while* coding, mid-error. So: **reading = each error rendered + explained in prose (no table); cheatsheet = the terse table.** Same errors, two formats, two purposes.
- **Scope rule (keeps it from bloating into an error encyclopedia):** a section lists ONLY errors its own problems can actually produce. Grounded in real problems the student will hit, never generic C#.
- *(Later, if the same errors recur across many sections, consolidate into one global errors glossary. Not now.)*

### Punctuation (course-wide, non-negotiable)
- **No em dashes. Ever.** Not in readings, problems, quizzes, cheatsheets, or UI copy. Rewrite the sentence, or use a comma, a colon, parentheses, or two sentences. (A quick grep for the em-dash character before committing content catches strays.)

### Problem-statement style (course-wide rule), TERSE, not text-heavy
- **Problem statements use the minimum words to state the task unambiguously.** Prose is a cost, not a feature, the *reading* does the teaching; the problem just says what's wanted so the student spends effort *doing*, not reading. (Fits the "realistic workbench, not a tutor" ethos.)
- **Let the target output do the talking.** For output problems, prefer *"print exactly this:"* + the literal expected block over a sentence describing it. That is simultaneously the tersest *and* the most precise form.
- **The ONE carve-out is precision the strict grader requires**, e.g. "no trailing newline", "a tab, not spaces", "exactly two spaces". That's the spec, not padding; omitting it turns the problem into a guessing game. Include exactly that, nothing more.
- **Capstones may use more words, only as needed** for genuine setup. Still no padding.

### Country flavor (learning FIRST)
- **Drill problems: GENERIC, no country flavor** (avoids overload + preserves author-once/translate-per-language reuse).
- **Chapter tests + exam: MAY carry light country flavor** as texture. Optional, never required.
- **Real-world detail is FLAVOR TEXT, never the graded value** (don't make the answer depend on knowing a real statistic).
- **Exam reveal** (flag + name + one fact) is the climax, an authored asset in `course.yaml`, gathered at authoring time (see §7), NOT fetched at runtime.

### Copyright
- Original words / problems / examples only. Build the TOC from the language's logic, not a book's contents page. (A real IP lawyer before money's involved.)

---

## 6. The authoring CLI (build this BEFORE heavy authoring)
The one practical gap. A tiny tool that, given a `problem.yaml` + `solution.<lang>`:
1. compiles + runs the solution against each case's `stdin` (locally, native toolchain, e.g. `dotnet`),
2. generates the **expected outputs**, writes them into the committed generated file / manifest,
3. (optionally) regenerates `tests.md` as the human mirror.
Also useful: a `--check` mode that re-generates and asserts no drift (the CI guard). This is the B+C blend from architecture §4. Make it your first Kiro session, then author.

---

## 7. Country facts (for the exam reveal, DEFERRED, authoring-time only)
- Free source: **REST Countries** (restcountries.com, no key) → capital, population, flag (SVG), name, borders. World Bank API for real stats; Wikidata for prose.
- **Use at AUTHORING time to gather the flag/name/fact; bake the chosen values into `course.yaml`. NEVER call it at runtime** (keeps the reveal deterministic, offline, curated, outage-proof).
- Check flag-asset licensing/attribution.
- This is deferred (the reveal is a later feature), only touch it when authoring the reveal asset.

---

## 8. Definition of done (per section)
- [ ] `reading.md`: one analogy, concept, worked example, reads well, holds the bar.
- [ ] `quiz.yaml` + `quiz.md`: comprehension gate, rationale on each, pass threshold set.
- [ ] `cheatsheet.md`: tight, this-section-only.
- [ ] 5–15 problems (size follows the idea; `lights_at` ≈ 60% set), each: `problem.yaml` (idea + cases + notes), `starter`, `solution`, expecteds generated by the CLI, `design.md`, `tests.md`.
- [ ] Problems form a coherent escalating family of the ONE idea.
- [ ] Every problem resists hardcoding (varied + edge-case inputs).
- [ ] (A friend/you tried to break the grader and couldn't.)
