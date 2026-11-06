# Exercises draft, 4.2 The if statement

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Run a block of code only when a condition is true (the one-way `if`).

## Size & completion
- **10 problems**, lights at **6** (~60%). Moderate.

## Scope (READ FIRST)
- **IN:** `if (condition) { ... }`; the condition is a `bool` (comparisons from 4.1); the block runs when
  true and is skipped when false; output that always prints sits OUTSIDE the `if`, output that is conditional
  sits inside. Braces and block structure.
- **OUT:** `else` (4.3); `&&`/`||` (4.4); nesting (4.5); `switch` (4.6). One-way only.

## Grading approach
- `stdout-match`, input via stdin. **Every problem's cases straddle the condition:** at least one input makes
  the block run, at least one makes it skip. A program that always prints (ignores the `if`) fails the skip
  case; one that never prints fails the run case. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print a message only if a number is over a threshold | `if` basics | ● |
| p02 | print a message only if a number equals a target | `if` with `==` | ● |
| p03 | print a message only if a number is within a bound (single comparison) | `if` with `<=` | ●● |
| p04 | always print a label, then conditionally print a flag | inside vs outside the `if` | ●● |
| p05 | read a value, print a warning only if it is below a floor | realistic guard | ●● |
| p06 | read an age, print "can vote" only if `age >= 18` | realistic | ●● |
| p07 | print a line only if two values are equal | equality guard | ●● |
| p08 | conditionally adjust then print (if over cap, print the cap line) | compute-in-branch | ●● |
| p09 | fix a bug: block always runs because of a stray semicolon `if (...);` | debug | ●● |
| p10 | model a scenario: read, guard a message with a condition, print | integrative capstone | ●●● |

**Escalation:** p01-p03 bare one-way guards on each comparison; p04 the inside-vs-outside distinction;
p05-p08 realistic guards and a compute-in-branch; p09 the stray-semicolon debug; p10 capstone.

## Per-problem intent (bones)
- **p01-p03** `if (n > t) Console.WriteLine("...")`; cases straddle the threshold.
- **p04** print a label unconditionally, then an extra line only when the condition holds; shows what sits
  inside the braces vs outside.
- **p05/p06** realistic one-way guards (below a floor, voting age); boundary cases.
- **p07** `if (a == b)` prints a line; cases equal and not-equal.
- **p08** if the value exceeds a cap, print a capped message/value (a small compute inside the branch).
- **p09** starter has `if (condition);` with a stray semicolon, so the "body" always runs. Remove the
  semicolon. (Confirm the exact behavior/warning against the compiler when authoring.)
- **p10** capstone: a worded scenario with one conditional message.

## Notes
- **Straddle the condition (Ch.4 rule):** every problem needs a run case and a skip case. For a boundary
  comparison, include the exact-boundary input.
- **Nothing prints when the condition is false** unless something is printed outside the `if`; p04 makes this
  explicit so students do not assume a branch always produces a line.
- **p09 stray-semicolon:** verify the real behavior (it compiles, the empty statement is the body, so the next
  line runs unconditionally) and whether the compiler warns, at authoring time.
- No `else` yet. Country-neutral. Terse statements.
