# Problem 07, Negative division (language-independent design)

**Sub-skill:** integer division truncates toward zero, including negatives.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line; `a` may be negative). Print the integer
division `a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a / b` on its own line.

## Why it resists a trivial answer
`-7 / 2` is `-3`, not `-4`: truncation cuts toward zero, dropping the fraction regardless of sign. A student
who expects rounding toward negative infinity fails the `-7 / 2` and `7 / -2` cases.
