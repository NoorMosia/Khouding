# Exercises draft, 5.2 The do-while loop

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Repeat a block, but always run it at least once (the condition is checked at the end).

## Size & completion
- **9 problems**, lights at **5** (~60%). Moderate (one focused idea: the run-at-least-once difference).

## Scope (READ FIRST)
- **IN:** `do { ... } while (condition);`; the body runs, then the condition is tested, so it always executes
  once even when the condition is false at the start; the direct contrast with `while` (false-at-start:
  `while` prints nothing, `do-while` prints once); the trailing semicolon. The count-up and
  prompt-then-check-until-done shapes with a guaranteed first pass.
- **OUT:** `for` (5.3); nested (5.4); `break`/`continue` (5.5). No methods, no arrays.

## Grading approach
- `stdout-match`, input via stdin. **The key case is a condition that is FALSE at the start**, proving the one
  guaranteed pass (this is 5.2's version of the iteration-count rule). Oracle CLI generates expecteds.
  Solutions always terminate.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | run a block once then repeat while a condition holds (count up) | basic do-while | ● |
| p02 | print a value then keep going while under a limit | guaranteed first pass | ● |
| p03 | read a value, process it, repeat until a sentinel (sentinel checked after) | sentinel at the end | ●● |
| p04 | sum values read until a quit value, with a guaranteed first read | do-while sentinel | ●● |
| p05 | a menu-style loop: show, read a choice, repeat until the quit choice | menu repeat | ●● |
| p06 | count with a guaranteed first pass even when the bound says zero | at-least-once | ●● |
| p07 | convert a given `while` to a `do-while` (observe the start-false difference) | while -> do-while | ●● |
| p08 | fix a bug: `do-while` written so it never terminates OR semicolon issue | debug | ●● |
| p09 | model a scenario: a repeat-until with a guaranteed first action | integrative capstone | ●●● |

**Escalation:** p01-p02 the basic run-once-then-loop; p03-p05 sentinel/menu with the end check; p06-p07 the
at-least-once contrast + conversion; p08 the debug; p09 capstone.

## Per-problem intent (bones)
- **p01** `do { print i; i++; } while (i <= n);` read n. Even n = 0 prints once (the point).
- **p02** print the current value, add a step, repeat while under a read limit.
- **p03** read a value, process/print it, loop while it is not the sentinel (checked at the end).
- **p04** total values read until a quit value; the first read always happens.
- **p05** a menu: print options, read a choice, act, repeat until the quit choice is entered.
- **p06** a loop whose bound is zero/false at the start still runs its body exactly once (contrast case).
- **p07** given a `while`, rewrite as `do-while`; a false-at-start input shows the one-extra pass.
- **p08** starter mis-writes the terminating condition (hangs) or drops the trailing `;`. Fix cleanly; never
  commit a hanging case.
- **p09** capstone: a worded repeat-until-done with a guaranteed first pass.

## Notes
- **The FALSE-at-start case is required** (5.2's iteration-count rule): it is the only thing that distinguishes
  `do-while` from `while`, so every problem that can, includes it.
- **Never commit an input that loops forever**; solutions must always terminate.
- Accumulate into ONE variable (no arrays yet). Country-neutral. Terse statements. Prompts on their own line.
