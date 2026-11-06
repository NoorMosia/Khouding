# Problem 05, Larger of two (language-independent design)

**Sub-skill:** `Math.Max`.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers (each prompted on its own line). Print the larger using `Math.Max`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the larger on its own line.

## Why it resists a trivial answer
The larger is sometimes the first, sometimes the second, sometimes equal, and the negative case (`-2` is
larger than `-7`) rules out a naive guess. Only the function picks correctly across all cases.
