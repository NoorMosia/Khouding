# Problem 02, Read an integer quotient (language-independent design)

**Sub-skill:** integer division with input.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the integer quotient `a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a / b` on its own line.

## Why it resists a trivial answer
The inputs vary, so the quotient must be computed. Cases include truncation (`10 / 4 = 2`) and a
smaller-over-larger case (`5 / 8 = 0`), so a student who expects a decimal fails.
