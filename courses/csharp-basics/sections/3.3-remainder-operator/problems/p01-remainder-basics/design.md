# Problem 01, Remainder basics (language-independent design)

**Sub-skill:** `%` is the remainder after whole-number division.
**Difficulty:** 1

## Statement (student-facing)
Print the value of `7 % 3`.

## I/O contract
- **Input:** none.
- **Output:** the value on its own line.

## Why it resists a trivial answer
The point is understanding `%`: `7 % 3` is `1` (what is left after 3 goes into 7 twice). The oracle generates
the expected, so a student who confuses it with division (`2`) fails.
