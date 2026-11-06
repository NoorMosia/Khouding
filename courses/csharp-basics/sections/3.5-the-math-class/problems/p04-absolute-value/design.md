# Problem 04, Absolute value (language-independent design)

**Sub-skill:** `Math.Abs`.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number (it may be negative). Print its absolute value using `Math.Abs`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the absolute value on its own line.

## Why it resists a trivial answer
Negative and positive inputs both map to a non-negative result (`-5` and `5` both give `5`), and zero gives
`0`, so only the function produces all cases.
