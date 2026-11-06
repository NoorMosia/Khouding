# Exercises draft, 4.4 Combining conditions

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Build a compound condition with `&&` (and), `||` (or), `!` (not).

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section.

## Scope (READ FIRST)
- **IN:** `&&` (true only if both), `||` (true if either), `!` (flips a bool); combining with comparisons
  (`age >= 18 && age < 65`); parentheses for clarity; using a compound condition in an `if`/`else` (from 4.3).
- **OUT:** nesting (4.5, the contrast is taught there); `switch` (4.6). Short-circuit evaluation is named at
  most (one line), NOT drilled, no observable side effects exist yet to make it matter (no methods).

## Grading approach
- `stdout-match`, input via stdin. **Cases cover the truth table:** for an `&&`, include both-true,
  one-false-each-way, both-false; for an `||`, include both-false (the only false case) plus each true path.
  This is the straddle rule applied to compound conditions. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print a fixed `&&` / `||` / `!` result (bare booleans) | the operators | ● |
| p02 | read two numbers, print whether BOTH are positive (`&&`) | `&&` with input | ● |
| p03 | read two numbers, print whether EITHER is zero (`||`) | `||` with input | ● |
| p04 | read a number, print `!(n > 0)` (not positive) | `!` | ●● |
| p05 | in-range check: `lo <= x && x <= hi` (print the bool) | range via `&&` | ●● |
| p06 | out-of-range via `||`: `x < lo || x > hi` | the complement | ●● |
| p07 | use a compound condition in an `if`/`else` (eligible or not) | compound in a branch | ●● |
| p08 | two-factor gate: `age >= 18 && isMember` (read age + a 0/1 flag) | two factors | ●● |
| p09 | either-of-two-ways passes: `score >= 90 || bonus` | `||` gate | ●● |
| p10 | combine three: `a && (b || c)` with parentheses | grouping | ●●● |
| p11 | fix a bug: `||` used where `&&` was meant (range check too loose) | debug | ●● |
| p12 | model a scenario: read values, print a compound eligibility result | integrative capstone | ●●● |

**Escalation:** p01 bare operators; p02-p04 one operator each with input; p05-p06 range and its complement;
p07-p09 compound conditions inside branches / gates; p10 grouping three; p11 the `&&`/`||` debug; p12 capstone.

## Per-problem intent (bones)
- **p01** print `true && false`, `true || false`, `!true` (fixed), the operator meanings.
- **p02** `a > 0 && b > 0`; cases cover all four truth combinations.
- **p03** `a == 0 || b == 0`; include both-false (neither zero) and each single-zero.
- **p04** `!(n > 0)`; cases positive and non-positive.
- **p05** `lo <= x && x <= hi`; boundary cases on `lo` and `hi`.
- **p06** `x < lo || x > hi`; the logical complement of p05.
- **p07** `if (cond) print "eligible"; else print "no";` with a compound `cond`.
- **p08** read age and a flag (0/1 as an int, since bool parsing is not taught); `age >= 18 && flag == 1`.
- **p09** `score >= 90 || bonus == 1`.
- **p10** `a > 0 && (b > 0 || c > 0)`; parentheses change the grouping.
- **p11** starter uses `||` in a range check so it is always true; fix to `&&`.
- **p12** capstone: a worded two-or-three-factor eligibility check.

## Notes
- **bool inputs come in as a 0/1 int flag** (bool parsing / `bool.Parse` is not taught; keep it to comparing
  a read int, e.g. `flag == 1`). State this in the problem.
- **Truth-table coverage (Ch.4 rule for compound conditions):** cases must exercise each way the compound
  condition can be true or false, so a student who swaps `&&`/`||` fails.
- Short-circuit: name it in the reading at most (no methods, so no observable difference yet). Country-neutral.
