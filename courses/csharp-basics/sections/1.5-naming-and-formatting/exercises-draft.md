# Exercises draft, 1.5 Naming and formatting

> **What this file is (the standard per-section skeleton-pass artifact).**
> Rough design of the problem family, written BEFORE the real `problem.yaml` folders exist
> (the "gray map → add color" skeleton pass, AUTHORING-GUIDE §4). Not parsed; superseded by the real
> `problems/pNN-*/` folders once authored. (Template: 1.1's `exercises-draft.md`.)
>
> **Retitled + widened:** was "Naming variables well"; now also covers **formatting/indentation** (pulled
> out of 1.1, homeless until here). Both are one idea: writing code a human can read. Light-to-moderate
> section. This is the **Chapter 1 finale**.

---

## Section one-idea
Write code a human can read. The compiler ignores your **names** and your **layout**; humans do not. Two
levers: good names (self-documenting) and clean formatting (indentation that shows structure). No new
language mechanics, this is discipline applied to everything from 1.1–1.4.

## Size & completion
- **8 problems**, lights at **5** (~60%). Light-to-moderate: naming is small, formatting adds a couple of
  reps. Being the Ch.1 finale, it's a calm close before the region boss, not a grind.

## Scope reconciliation (READ FIRST)
- **IN:**
  - **Naming:** identifier rules (legal characters, can't start with a digit, no reserved keywords);
    C# convention (camelCase locals, PascalCase `const`/types already met); naming as self-documentation.
  - **Formatting:** indentation and line breaks are reader-facing (compiler ignores them); re-indent a
    mangled-but-valid program so it reads cleanly; one statement per line, indent each block body one step.
- **OUT:** anything new syntactically. 1.5 reuses only `int`/`double`/`string`/`char`/`bool`/`const` and
  `+ - *` from 1.1–1.4. The lesson is the *name* and the *layout*, never a new mechanic.

## Grading approach (this section), the interesting wrinkle
Both levers here are partly *style* skills that pure `stdout-match` can't see: a badly-named variable still
prints the right answer, and badly-indented but valid code still runs (the compiler ignores whitespace).
Same limit for naming and formatting. Honest ways to grade with Phase-1 tools:
- **(primary) legality is real and compilable:** an *illegal* identifier won't compile → a "fix the illegal
  name" problem genuinely fails until fixed, then prints the target. Pure `stdout-match`, no new machinery.
- **(secondary) make the task produce output that depends on doing it right:** "declare these described
  values with good names and print them in a given order" grades the *result*, and good naming is the
  natural path. The quiz carries the pure-style judgments (camelCase vs PascalCase, "which name is
  clearest", "which layout reads better", "does indentation change output") that output can't grade.
- **Formatting is the weakest for stdout** (re-indenting never changes output), so formatting problems lean
  hardest on the quiz; the one output-backed angle is "the mangled program still has a bug you must fix to
  print the target, and you clean up the layout while you're in there." Keep formatting light on problems,
  heavier on the quiz.
- **Note for later:** the *subjective* "is this good style" judgment is exactly where a future structural
  `checks:` (source assertion) would help; Phase 1 leans on legality + the quiz instead. Don't invent
  structural grading just for 1.5.

## Statement style
- Terse (course-wide rule). For "rename" problems, show the snippet; the task is one line.

---

## The family (escalating)

**Thread A, legality (compilable, gradeable):**
**Thread B, clarity/convention (output-backed + quiz-backed):**
**Thread C, formatting (quiz-backed, one output-anchored rep):**

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | fix an illegal identifier (starts with a digit) so it compiles + prints target | legality: can't start with a digit | ● |
| p02 | fix an illegal identifier (uses a space / illegal char) | legality: legal characters | ● |
| p03 | fix an illegal identifier (uses a reserved keyword as a name) | legality: no keywords | ●● |
| p04 | rename cryptic variables (`x`, `a2`) to meaningful names; print result | clarity: naming as modeling | ●● |
| p05 | given described values, declare them with good camelCase names + print | convention: camelCase locals | ● |
| p06 | correct the casing convention in a snippet (local PascalCase → camelCase, etc.) | convention: camel vs Pascal | ●● |
| p07 | re-indent a mangled-but-valid program so it reads cleanly (still prints target) | formatting: layout for humans | ●● |
| p08 | model a described scenario: right types, good names, clean layout, print to spec | integrative capstone | ●● |

**Escalation shape:** p01–p03 the three legality rules (each genuinely fails to compile until fixed, the
cleanest grading for this section); p04–p06 naming clarity + convention (output + quiz); p07 the formatting
rep (re-indent for readability); p08 a small integrative close that leans on *everything* Ch.1 taught (right
type + good name + clean layout + print to spec).

---

## Per-problem intent (the bones)

### p01, illegal: starts with a digit
Given a program that tries to name a variable like `2count`, rename it legally (e.g. `count2` or
`secondCount`) so it compiles and prints the target. Legality rule #1.

### p02, illegal: illegal character / space
A name containing a space or a symbol (`my price`, `total$`). Fix to a legal identifier. Legality rule #2.

### p03, illegal: reserved keyword
A name that is a C# keyword (`int`, `class`, `string` as a *variable* name). Rename to something legal.
Legality rule #3, and quietly teaches that keywords are reserved.

### p04, rename cryptic → meaningful
A working but cryptic snippet (`int x = 7; int a2 = 5; int q = x * a2;`). Rename the variables to meaningful
names for the described scenario and print the same result. Naming as *modeling*, the output is unchanged,
the readability is the point. *(Output-graded: the result still prints; the rename is the real task. The
quiz reinforces the "which name is clearest" judgment that output alone can't enforce.)*

### p05, declare with good camelCase names
Given described values, declare them as locals with proper camelCase names and print them. The positive
form of p04, produce good names from scratch. Convention: camelCase for locals.

### p06, fix the casing convention
A snippet that violates convention (a local in PascalCase, or a `const` in camelCase). Correct the casing
so it follows C# convention, print the target. Teaches camelCase (locals) vs PascalCase (`const`/types).

### p07, re-indent for readability (formatting)
Given a program that is **valid but mangled** (no indentation, several statements crammed oddly, but it
compiles), re-indent it to the convention (one statement per line, each block body indented one step) so a
human can read it. It still prints the same target. *(Grading note: re-indenting alone does not change
output, so to make this output-gradeable the mangled program also carries a small fixable defect, or the
student simply reproduces the target; the real teaching that "indentation is for humans, not the compiler"
is reinforced in the quiz. Keep it light.)*

### p08, model the scenario (integrative capstone)
A short described scenario: choose the right types (Ch.1 recap: int/double/string/char/bool/const), give
them clear conventional names, lay the code out cleanly, and print to spec. The calm integrative close to
Chapter 1, now covering both levers (naming + formatting).

---

## Notes / open calls
- **Legality problems (p01–p03) are the grading backbone**, the only aspects pure `stdout-match` can
  enforce hard (illegal name → won't compile → fails). Lean on them.
- **Convention/clarity (p04–p06) and formatting (p07) are output-backed where possible and quiz-backed
  otherwise.** Phase-1 grading can't fully police "is this good style"; the quiz + the compile-gate carry
  it. This is the clearest section where a future structural-`checks:` would earn its keep; do NOT build it
  now, just note the seam.
- **Formatting is the weakest for stdout** (re-indenting never changes output). Keep it to the one rep (p07)
  plus quiz coverage; don't over-invest in formatting problems that can't really be graded.
- **Chapter-1 finale:** p08 recaps the whole chapter's toolkit (types + naming + layout) so 1.5 feels like a
  close, then the region boss (Ch.1 test) integrates everything.
