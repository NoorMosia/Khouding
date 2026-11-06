# Pool p05, Integer quotient (family B, division)

**Integrates:** 3.2 (integer division truncates), 2.1/2.2.
**Difficulty:** 1

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the integer quotient `a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a / b`.

## Why it resists a trivial answer
Cases include truncation and a smaller-over-larger case (`0`), so a student expecting a decimal fails.
