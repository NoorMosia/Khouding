# Problem 06, Smaller of two (language-independent design)

**Sub-skill:** `Math.Min`.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers (each prompted on its own line). Print the smaller using `Math.Min`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the smaller on its own line.

## Why it resists a trivial answer
The smaller varies in position, can be equal, and the negative case (`-7` is smaller than `-2`) rules out a
guess. Only the function picks correctly.
