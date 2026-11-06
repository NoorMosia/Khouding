# Problem 04, Subtract-equals (language-independent design)

**Sub-skill:** `-=` subtracts in place.
**Difficulty:** 2

## Statement (student-facing)
Read a start value and an amount to subtract (each prompted on its own line). Subtract with `-=` and print the
result.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the result on its own line.

## Why it resists a trivial answer
Both inputs vary, and one case goes negative, so the update must really use `-=` on the read amount.
