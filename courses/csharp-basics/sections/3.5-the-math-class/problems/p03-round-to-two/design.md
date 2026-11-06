# Problem 03, Round to two (language-independent design)

**Sub-skill:** `Math.Round(x, digits)`.
**Difficulty:** 2

## Statement (student-facing)
Read a value with several decimal places. Print it rounded to two decimal places using `Math.Round`.

## I/O contract
- **Input:** one line, a decimal number.
- **Output:** the prompt, then the value rounded to two decimals on its own line.

## Why it resists a trivial answer
Each input rounds to a different two-decimal value. `Math.Round(x, 2)` is required; a raw print keeps all the
digits. Cases avoid exact-half ties so each rounds unambiguously (verified via the CLI).
