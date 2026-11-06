# Exercises draft, 3.2 Division and the integer-division gotcha

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
`/` truncates when both operands are whole numbers, and does not when one is a `double`. The classic beginner
trap, drilled properly, plus how to get a real quotient.

## Size & completion
- **13 problems**, lights at **8** (~60%). Full section (this is the chapter's signature gotcha).

## Scope (READ FIRST)
- **IN:** `int / int` truncates (`5 / 2 = 2`), discards the fractional part; `double` division does not
  (`5.0 / 2 = 2.5`); forcing a `double` result (make an operand a `double`); negatives truncate **toward
  zero** (`-7 / 2 = -3`, VERIFIED). Divide-by-zero **named** (integer `/ 0` throws at run time) but never fed.
- **OUT:** `%` (3.3); compound `/=` (3.4); `Math` rounding (3.5); overflow. No precedence puzzles (that was
  3.1; single-operator division here).
- **Why full-size:** the integer-division gotcha is *the* classic trap; it earns real reps across whole,
  decimal, and negative cases.

## Grading approach
- `stdout-match`, input via stdin (varied, incl. negatives and zero-numerator), a few fixed. Oracle CLI
  generates every expected. **VERIFY every expected via the CLI** (truncation and negative behavior are easy
  to mis-predict by hand).

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | print `int / int` for fixed values (`7 / 2` -> `3`) | integer division | ● |
| p02 | read two whole numbers, print the integer quotient | int division with input | ● |
| p03 | print `double / int` for fixed values (`7.0 / 2` -> `3.5`) | double division | ● |
| p04 | read two numbers as `double`, print the decimal quotient | double division with input | ●● |
| p05 | read two whole numbers, print the quotient as a decimal (force double) | the fix | ●● |
| p06 | contrast: print both the int result and the double result of the same pair | int vs double | ●● |
| p07 | negatives: read, divide, show truncation toward zero (`-7 / 2`) | negative truncation | ●● |
| p08 | zero numerator (`0 / n`) | edge | ● |
| p09 | realistic whole-number split (items into groups, whole groups) | int division is correct here | ●● |
| p10 | realistic decimal quotient (average-looking value, forced double) | double division is correct here | ●● |
| p11 | fix "why is it 2 not 2.5" bug (both operands int) | debug: force a double | ●● |
| p12 | fix a wrong-type result bug (stored int, lost the decimal) | debug: type of the result | ●● |
| p13 | model a scenario: read, choose int vs double division to spec, print | integrative capstone | ●●● |

**Escalation:** p01-p04 the two kinds of division (fixed then input); p05-p06 forcing double + the contrast;
p07-p08 negatives and zero numerator; p09-p10 when each kind is the *right* one; p11-p12 the two signature
debugs; p13 capstone.

## Per-problem intent (bones)
- **p01/p02** `int / int`, truncates.
- **p03/p04** `double` division keeps the decimal.
- **p05** two ints but a decimal answer required, make an operand a `double`.
- **p06** same pair printed both ways (int result then double result), the contrast.
- **p07** negatives, `-7 / 2 = -3` (toward zero).
- **p08** `0 / n = 0`.
- **p09** whole-number split where truncation is the intended behavior (how many full groups).
- **p10** a decimal quotient where double is intended.
- **p11** starter does `int / int` and gets `2`; the fix is forcing a double.
- **p12** starter stores a double division into an `int` (or divides too early) and loses the decimal.
- **p13** capstone: read values and produce the spec's result, choosing the right division.

## Notes
- **Divide-by-zero:** named in the reading (integer `/ 0` throws at run time); hidden cases NEVER feed a zero
  divisor (name-don't-handle, same discipline as 2.2's parse failure).
- Pick `double` values whose quotient prints cleanly under invariant culture; verify each via the CLI.
- Country-neutral. Terse statements.
