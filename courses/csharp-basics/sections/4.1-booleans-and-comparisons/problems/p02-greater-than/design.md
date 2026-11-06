# Problem 02, Greater than (language-independent design)

**Sub-skill:** `>` with input, produces a `bool`.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print whether `a > b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `True` or `False`.

## Why it resists a trivial answer
Cases straddle the boundary: greater (`True`), less (`False`), and equal (`False`, since `>` is strict). A
copied literal fails, and the equal case rules out a student who confuses `>` with `>=`.
