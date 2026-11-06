# Problem 03, Double division (language-independent design)

**Sub-skill:** one `double` operand switches to decimal division.
**Difficulty:** 1

## Statement (student-facing)
Print the value of `7.0 / 2`.

## I/O contract
- **Input:** none.
- **Output:** the value on its own line.

## Why it resists a trivial answer
Directly contrasts p01: the same `7` and `2`, but writing `7.0` makes it a `double`, so the decimal is kept
and the result is `3.5`, not `3`. The student must see that one `double` operand changes the division.
