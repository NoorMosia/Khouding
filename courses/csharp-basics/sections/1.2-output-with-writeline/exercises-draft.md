# Exercises draft, 1.2 Output with `Console.WriteLine`

> **What this file is (the standard per-section skeleton-pass artifact).**
> Rough design of the problem family, written BEFORE any `problem.yaml` folders exist
> (the "gray map → add color" skeleton pass, AUTHORING-GUIDE §4). Captures the one-idea, the
> family's escalation, and each problem's intent + grading hook. Not parsed; superseded by the
> real `problems/pNN-*/` folders once authored. (Template: 1.1's `exercises-draft.md`.)

---

## Section one-idea
*How do I control what gets displayed?*, the student already knows they **can** print (1.1, Hello World);
1.2 is about **shaping** the output. We've moved from *that* we display to **how we display, visually**:
`WriteLine` vs `Write`, line structure, blank lines, and escape sequences (`\n`, `\"`, `\\`, `\t`).

## Size & completion
- **15 problems**, lights at **9** (~60%). A **full drill section**, output is foundational enough to
  earn real wax-on/wax-off volume (lots of easy reps before any new mechanic).

## Grading approach (this section)
- **Pure `stdout-match`**, no input (input is Chapter 2 / §2.1). Targets are fixed literals.
- **Strict byte-exact match bites hardest here** (trailing whitespace significant, tab ≠ spaces). That is
  on-brand, producing output to spec (precision + careful spec-reading) is itself a learned skill per the
  grading contract. The **oracle CLI** guarantees expecteds match whatever the solution actually emits, so
  authoring is safe *as long as the solution uses the intended characters* (a real tab, the exact spaces).

## Statement style (apply the course-wide TERSE rule)
- **Minimum words.** For nearly every problem the statement is literally *"Print exactly this:"* + the
  expected block. The block *is* the spec, tersest and most precise at once.
- **The one carve-out is required precision:** where it matters, add a short note like *"no trailing
  newline"* or *"use a tab between the columns, not spaces"*. Nothing more.
- **p15 (capstone) may use a few more words** for setup, only as needed.

## Anti-hardcoding note (no-input section)
Nothing is computed, so the usual varied-input defense doesn't apply. Guards instead:
- **Vary the target text/shape per problem** so a solution can't be copied forward.
- Escape-sequence and layout problems are naturally copy-resistant, each wants different exact bytes.

---

## The family (escalating: easy reps → one-at-a-time new tools → visual composition)

| # | Task | Tool / skill | Diff |
|---|------|--------------|------|
| p01 | print a single given line | baseline `WriteLine` | ● |
| p02 | print three separate lines (three `WriteLine`s) | line structure | ● |
| p03 | print two things on one line (two `Write`s) | `Write`, no newline | ● |
| p04 | reproduce a given 3-line block exactly | reproduce-to-spec | ● |
| p05 | print a blank line *between* two lines | empty output line | ● |
| p06 | mix `Write` and `WriteLine` for a specific layout | combining the two | ● |
| p07 | reproduce a given 4-line block exactly | precision rep | ●● |
| p08 | two lines from a **single `WriteLine`** using `\n` | `\n` carrier A (adds a trailing newline) | ●● |
| p09 | two lines from a **single `Write`** using `\n` | `\n` carrier B, **no trailing newline** | ●● |
| p10 | print a line containing literal quotes `"…"` | `\"` escape | ●● |
| p11 | print text needing a backslash (e.g. a path) | `\\` escape | ●● |
| p12 | print a 2-column row using `\t` | `\t` alignment | ●● |
| p13 | print a 3-row aligned "table" (`\t` + newlines) | compose tabs + lines | ●●● |
| p14 | draw a small text box (borders) exactly | visual composition | ●●● |
| p15 | draw a small triangle / staircase exactly | visual composition capstone | ●●● |

**Escalation shape:** p01–p06 pure easy reps (wax-on volume on line structure + `Write`/`WriteLine`);
p07–p12 introduce new tools one at a time (`\n` ×2, `\"`, `\\`, `\t`); p13–p15 compose it all visually
(the "look what I can draw with text" payoff).

---

## Per-problem intent (the bones)

### p01, one line
Print one given line. Baseline rep.

### p02, three lines
Print three given lines, each on its own line (three `WriteLine`s). Line-structure rep.

### p03, two on one line
Print two pieces of text on the **same** line using `Write` twice. Teaches "`Write` adds no newline."

### p04, reproduce 3-line block
*"Print exactly this:"* + a 3-line block. Reproduce-to-spec precision; still easy.

### p05, blank line between
Print line A, a **blank line**, then line B. Teaches that an empty line is itself output (an empty `WriteLine()`).

### p06, mix Write and WriteLine
Produce a given layout that only works by mixing `Write` (stay on the line) and `WriteLine` (end it).
Consolidates p03 + p05.

### p07, reproduce 4-line block
A longer reproduce-to-spec block. The precision rep that bridges into the escape-sequence tools.

### p08, `\n` inside a single WriteLine  *(the conceptual hinge)*
Produce two visible lines from a **single** `Console.WriteLine("a\nb")`. The "aha": a newline can come
from `\n` *inside one string*, not only from a second `WriteLine`. Note it still adds a final newline.

### p09, `\n` inside a single Write (no trailing newline)  *(the trailing-newline teacher)*
Same two lines, but from a single `Console.Write("a\nb")`. **Spec must say: no trailing newline.** This is
the one problem where "no final newline" is the whole point, strict matching makes it real.

### p10, literal quotes
Print a line that contains `"` characters. Teaches `\"`.

### p11, backslash
Print text containing a backslash (e.g. a Windows-style path). Teaches `\\` (and *why*, `\` starts an escape).

### p12, tab columns
Print a single row of two columns separated by a tab. **Spec: use a tab (`\t`), not spaces.** Teaches `\t`.

### p13, aligned table
Print a 3-row, 2-column table using `\t` + newlines. Composes tabs and line structure. **Spec: tabs, not spaces.**

### p14, text box
*"Print exactly this:"* + a small fixed box drawn with text (e.g. `+---+` borders). Keep it **tiny and
fixed**, the skill is precision, not ASCII-art ambition.

### p15, triangle / staircase (capstone)
*"Print exactly this:"* + a small fixed triangle/staircase. May carry a few more words of setup **only as
needed**. The visual payoff at the top of the escalation.

---

## Notes / open calls
- **Keep visual capstones tiny + fixed** (e.g. 3×3 box, 4-row staircase) so the exact-bytes spec stays
  manageable and the point stays "precision," not art.
- **`\\` (p11)** is the least-used beginner escape, if we ever want to tighten, it's the first candidate to
  demote to a quiz question. Kept in for now (it rounds out "the escape character itself").
- Relationship to **§2.3 (interpolation):** 1.2 shapes output with *literals + escapes*; §2.3 shapes output
  with *variable values* (interpolation). Same skill family, escalating across chapters.
