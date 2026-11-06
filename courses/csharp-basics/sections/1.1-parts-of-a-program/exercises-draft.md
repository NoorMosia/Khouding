# Exercises draft, 1.1 The parts of a C# program

> **What this file is (the standard per-section skeleton-pass artifact).**
> A rough design of the problem family, written BEFORE any `problem.yaml` folders exist
> (the "gray map → add color" skeleton pass, AUTHORING-GUIDE §4). It captures the load-bearing
> bones, the one-idea, the family's escalation, and each problem's *intent + grading hook*,
> so the family stays coherent before effort is sunk into real folders. Every section gets one
> of these; they all follow the same shape (copy this layout).
>
> Not parsed by anything. Superseded by the real `problems/pNN-*/` folders once authored.

---

## Section one-idea
*Where does my code go, and what's all the stuff around it?*, anchored on a complete, runnable **Hello World**.

## Size & completion
- **6 problems**, lights at **4** (~60%). A deliberately **light early section** so a new student
  unlocks their first landmark fast (course-wide section-size rule: floor 5, ceiling ~15).

## Grading approach (this section)
- **Option 1, every problem ends in a target output**, so all grade by `stdout-match`. No structural
  (`checks:`) grading needed. A broken-skeleton problem grades because broken → no output → fail.
- **No input** in 1.1 (input is Chapter 2 / §2.1). Targets are fixed literals.
- **Comments are NOT tested here**, they produce no output difference, so they can't be graded by
  stdout. Comments live in the **quiz** instead.

## Anti-hardcoding note (how it applies to a no-input section)
The usual defense (varied + edge-case inputs) is weaker here because nothing is computed, the skill is
*placement / frame*, not producing a value. So the guards are instead:
- **Vary the target TEXT across problems** so a solution can't be copied forward.
- **Broken-skeleton problems** force engagement with the frame (a copied literal won't compile).
- The fixed version must produce the target **exactly** (strict match), so "compiles but prints the
  wrong thing" still fails.

---

## The family (two threads, escalating)

**Thread A, placement:** given a working skeleton, add a line in the right spot. Proves *ordering within `Main`*.
**Thread B, the frame:** given a broken skeleton, fix the part that makes it a valid program. Proves *the parts themselves*.

| # | Thread | Given | Task | Proves | Difficulty |
|---|--------|-------|------|--------|-----------|
| p01 | A | complete skeleton, empty `Main` | add one line so it prints the target | a statement goes *inside* `Main` | ● |
| p02 | A | skeleton with **one** existing line | add a second line **after** it | ordering: appended output | ● |
| p03 | A | skeleton with **two** lines | insert a line **between** them | ordering: middle insertion | ● |
| p04 | A | skeleton with **three** lines | add a line **at the end** | ordering: tail insertion | ● |
| p05 | B | skeleton missing a `;` (or a `}`) | fix it so it compiles and prints the given target | the `;` / brace *is* part of the frame | ●● |
| p06 | B | a print line sitting **outside** `Main` | move it inside so it runs | code only runs *inside* `Main` | ●● |

*(p01–p04 are pure placement reps; p05–p06 confront the frame. p06 is the keystone, "a line outside `Main` doesn't run" is the purest test of the one-idea and the exact beginner confusion.)*

---

## Per-problem intent (the bones)

### p01, print inside an empty Main
- **Given:** a correct, complete skeleton with an empty `Main`.
- **Task:** add one `Console.WriteLine(...)` that prints the target line.
- **Proves:** executable statements live *inside* `Main`.
- **Target text idea:** a fixed greeting (unique to this problem).

### p02, add a line after
- **Given:** skeleton with one existing print line.
- **Task:** add a second line so the output is the existing line **then** the new one.
- **Proves:** statements run top-to-bottom; appended output.

### p03, insert a line between
- **Given:** skeleton with two existing print lines.
- **Task:** insert a new line **between** them (output = line1, new, line2).
- **Proves:** ordering, the inserted statement's position determines output order.

### p04, add a line at the end
- **Given:** skeleton with three existing print lines.
- **Task:** add a fourth line **at the end**.
- **Proves:** tail insertion; reinforces ordering with more surrounding lines.

### p05, fix the frame (missing `;` or `}`)
- **Given:** a skeleton that already has the correct print content but is **broken**, a missing
  semicolon or a missing closing brace.
- **Task:** fix the frame so it compiles and prints the target.
- **Proves:** the `;` and braces are part of the program's structure, not decoration.
- **Note:** the print text is already correct; the student fixes *structure only*. Broken → no
  output → fail; correct fix → exact target.

### p06, move the line inside Main (keystone)
- **Given:** a skeleton with a `Console.WriteLine(...)` placed **outside** `Main` (e.g. in the class
  body but not in any method), so it doesn't run / doesn't compile.
- **Task:** move it **inside** `Main` so it executes and prints the target.
- **Proves:** code only runs inside `Main`, the sharpest statement of "where does my code go."

---

## Optional 7th (the capstone, if we want escalation to a top)
- **p07, reproduce from scratch:** given only the target output and an **empty file**, write the whole
  skeleton (`using`, `class`, `Main`, braces, the print) around it. The "prove you can reproduce the
  frame unaided" finale. Would bump the section to 7 problems (lights at 4 still, or 5). *Decide when
  authoring.*
