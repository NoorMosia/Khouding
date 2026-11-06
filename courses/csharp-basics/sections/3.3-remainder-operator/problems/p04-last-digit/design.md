# Problem 04, Last digit (language-independent design)

**Sub-skill:** `n % 10` extracts the last digit.
**Difficulty:** 2

## Statement (student-facing)
Read a whole number `n`. Print its last digit using `% 10`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the last digit on its own line.

## Why it resists a trivial answer
Each input has a different last digit, including a single-digit number (where the whole number is the result)
and one ending in `0`. Only `% 10` produces all of them.
