# Exercises draft, 3.5 The Math class (capstone)

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Call into a library you were handed. `Math` is a class full of ready-made functions; use it by reading its
shape, not by being walked through every function. The chapter's capstone and the first real "calling into a
class someone else wrote."

## Size & completion
- **13 problems**, lights at **8** (~60%). Full section (capstone).

## Scope (READ FIRST)
- **IN:** the `Math.` call pattern (qualifier, arguments, return value); a representative few taught deeply:
  `Math.Sqrt`, `Math.Pow`, `Math.Round(x, digits)`, `Math.Abs`, `Math.Max` / `Math.Min`, `Math.PI`. Combine
  with input + arithmetic from earlier in the chapter. **The real `using System;` / namespace lesson lands
  here** (deferred from 1.1): `Math` lives in `System`; `using System;` is why you can write `Math.Sqrt`.
- **Deduce-from-the-library beat (decided):** the cheatsheet lists MORE `Math` functions than the reading
  teaches, and 1-2 problems deliberately require a listed-not-taught function (e.g. `Math.Floor`,
  `Math.Ceiling`, `Math.Truncate`). By Ch.3 the student is ready to read a library entry and use it without
  hand-holding. State this intent in the problem notes.
- **OUT:** trig beyond a mention; `Math` overload deep-dives; custom classes/methods (Ch.6); anything that
  needs conditionals or loops.
- **Returns:** most `Math` functions here return `double` (VERIFIED: `Sqrt(16)` -> `4`, `Pow(2,10)` -> `1024`
  print as whole-looking doubles; `Round(3.14159,2)` -> `3.14`). Choose values/`:F2` so output is clean, and
  VERIFY every expected via the CLI under invariant culture.

## Grading approach
- `stdout-match`, input via stdin (varied). Oracle CLI generates every expected. Pick inputs whose `Math`
  results print cleanly (perfect squares for `Sqrt`, small integer powers, prices that round obviously).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | read a number, print its square root (`Math.Sqrt`) | the call pattern | ● |
| p02 | read a base and exponent, print the power (`Math.Pow`) | two-argument call | ● |
| p03 | read a price (double), print it rounded to 2 dp (`Math.Round(x, 2)`) | rounding | ●● |
| p04 | read a number, print its absolute value (`Math.Abs`) | abs | ● |
| p05 | read two numbers, print the larger (`Math.Max`) | max | ● |
| p06 | read two numbers, print the smaller (`Math.Min`) | min | ● |
| p07 | read a radius, print the circle area using `Math.PI` and `Math.Pow` | PI + combine | ●● |
| p08 | read two inputs, print the absolute difference (`Math.Abs(a - b)`) | compose with arithmetic | ●● |
| p09 | read two legs, print the hypotenuse (`Sqrt` of sum of `Pow`s) | multi-call compose | ●●● |
| p10 | DEDUCE: round DOWN using a cheatsheet-only function (`Math.Floor`) | read the library | ●● |
| p11 | DEDUCE: round UP using a cheatsheet-only function (`Math.Ceiling`) | read the library | ●● |
| p12 | the real `using System;` lesson applied: without it you'd write `System.Math.Sqrt` | namespace | ●● |
| p13 | model a scenario: read inputs, combine `Math` + arithmetic, print a formatted result | capstone | ●●● |

**Escalation:** p01-p06 the taught functions one at a time; p07-p09 combining them (PI, abs difference,
hypotenuse); p10-p11 the deduce-from-the-cheatsheet beat; p12 ties the namespace lesson to something
observable; p13 integrative capstone.

## Per-problem intent (bones)
- **p01-p06** one taught function each, read-and-apply. Clean inputs (perfect squares, small powers).
- **p07** area = `Math.PI * Math.Pow(r, 2)`, printed with `:F2`.
- **p08** `Math.Abs(a - b)`, compose a call with arithmetic.
- **p09** `Math.Sqrt(Math.Pow(a,2) + Math.Pow(b,2))`; pick Pythagorean triples (3,4->5) so it prints clean.
- **p10/p11** `Math.Floor` / `Math.Ceiling`, taught ONLY on the cheatsheet; the problem statement points the
  student to the cheatsheet to deduce usage (training wheels off).
- **p12** a value that makes the `using System;` payoff visible (e.g. compare the short vs full name in the
  reading; the problem just exercises `Math.` with the `using` in place).
- **p13** capstone: a worded scenario combining input, arithmetic, and a `Math` call, formatted output.

## Notes
- **Deliberate deduce-problems (p10/p11):** state in the note that the function is cheatsheet-listed, not
  reading-taught; this is the intended "read the library" skill, not an omission.
- **Namespace lesson:** the reading gives the full honest `using System;` explanation here (deferred from
  1.1). Keep it one clear beat, not a lecture.
- Choose clean inputs; VERIFY every expected via the CLI (invariant culture). Country-neutral.
