# Exercises draft, 4.1 Booleans and comparisons

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
A `bool` holds `true` or `false`, and the comparison operators (`== != < > <= >=`) produce one. The fuel for
the whole chapter.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section (bool's real wax-on/wax-off).

## Scope (READ FIRST)
- **IN:** `bool` (recap from 1.4, now with meaning); the six comparisons `== != < > <= >=`; a comparison is an
  expression that evaluates to a `bool`; storing one in a variable (`bool isAdult = age >= 18;`); printing a
  `bool` prints **`True` / `False`** (capitalised, VERIFIED). The `==` vs `=` spotlight (compare vs assign).
- **OUT:** `if` (4.2); `&&`/`||`/`!` (4.4); no branching at all here, just produce and print booleans.
- **First section of the chapter:** everything downstream consumes booleans, so this comes first.

## Grading approach
- `stdout-match`, input via stdin (varied, straddling the comparison boundary). Oracle CLI generates every
  expected. Note: expected outputs are literally `True`/`False` (capital), so verify via the CLI.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print the value of a fixed comparison (`5 > 3`) | comparison basics | ● |
| p02 | read two numbers, print `a > b` | compare with input | ● |
| p03 | read two numbers, print `a == b` (equality) | equality | ● |
| p04 | read two numbers, print `a != b` (not equal) | inequality | ● |
| p05 | read two numbers, print `a >= b` (boundary incl. equal) | `>=` boundary | ●● |
| p06 | read a number, store `bool isPositive = n > 0;` and print it | store in a bool | ●● |
| p07 | read an age, print `age >= 18` (the adult test) | realistic compare | ●● |
| p08 | read a score, print `score >= 50` (pass mark) | realistic boundary | ●● |
| p09 | print several comparisons of the same pair (`<`, `==`, `>`) | the operator set | ●● |
| p10 | read two numbers, print whether they are equal AND whether the first is larger (two lines) | combine reads | ●● |
| p11 | fix a bug: `=` used where `==` was meant | debug: compare vs assign | ●● |
| p12 | model a scenario: read values, print a described comparison result | integrative capstone | ●●● |

**Escalation:** p01 fixed; p02-p05 each comparison with input; p06 store-in-a-bool; p07-p08 realistic
boundaries; p09-p10 the operator set / two results; p11 the `=`-vs-`==` debug; p12 capstone.

## Per-problem intent (bones)
- **p01** `5 > 3` prints `True`.
- **p02-p05** one comparison each, read two numbers; cases straddle the boundary (true and false both appear).
- **p06** `bool isPositive = n > 0;` then print `isPositive` (prints `True`/`False`).
- **p07/p08** `age >= 18`, `score >= 50`; boundary cases exactly on 18 / 50.
- **p09** print `a < b`, `a == b`, `a > b` for one pair (three lines), the exhaustive set.
- **p10** print `a == b` then `a > b` (two lines).
- **p11** starter writes `if`-free `bool x = a = b;` style mistake (`=` instead of `==`); fix to `==`. (Confirm
  the exact broken form compiles-or-not when authoring; pick one that is a clean teachable fix.)
- **p12** capstone: a worded scenario whose answer is a printed boolean.

## Notes
- **Printing a bool prints `True`/`False`** (capital) under invariant culture; verify every expected via CLI.
- **Cases must straddle the boundary:** for each comparison, include an input where it is `True` and one where
  it is `False` (and, for `>=`/`<=`, one exactly on the boundary). This is the Ch.4 anti-hardcoding rule.
- **`==` vs `=`:** p11 is the compare-vs-assign debug. Settle the exact starter form against the compiler at
  authoring time (some `=`-for-`==` mistakes are compile errors, some are silent), and pick the clean one.
- No `if` yet. Country-neutral. Terse statements.
