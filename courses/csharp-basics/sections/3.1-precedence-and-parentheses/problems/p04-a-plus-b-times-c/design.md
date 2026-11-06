# Problem 04, a plus b times c (language-independent design)

**Sub-skill:** `*` before `+` with three read values.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers `a`, `b`, `c` (each prompted on its own line). Print the value of `a + b * c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the value of `a + b * c` on its own line.

## Why it resists a trivial answer
Three varying inputs, and `b * c` must be evaluated before adding `a`. Left-to-right evaluation gives a
different answer, so only correct precedence passes all cases.
