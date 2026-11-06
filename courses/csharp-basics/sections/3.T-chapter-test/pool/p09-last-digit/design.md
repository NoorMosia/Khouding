# Pool p09, Last digit (family C, remainder)

**Integrates:** 3.3 (`% 10` last-digit idiom), 2.1/2.2.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number `n`. Print its last digit using `% 10`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the last digit.

## Why it resists a trivial answer
Each input has a different last digit, including a single-digit value and one ending in `0`. Only `% 10`
produces all of them.
