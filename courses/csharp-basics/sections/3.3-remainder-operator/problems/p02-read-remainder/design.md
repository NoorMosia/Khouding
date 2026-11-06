# Problem 02, Read a remainder (language-independent design)

**Sub-skill:** remainder with input.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the remainder `a % b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a % b` on its own line.

## Why it resists a trivial answer
The inputs vary, so the remainder must be computed. Cases include an exact divide (remainder `0`) and `a < b`
(remainder is `a`), so a copied literal fails.
