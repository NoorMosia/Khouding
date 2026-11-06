# Pool p07, Negative quotient (family B, division)

**Integrates:** 3.2 (integer division truncates toward zero, negatives), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line; `a` may be negative). Print the integer
quotient `a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a / b`.

## Why it resists a trivial answer
`-7 / 2` is `-3` (toward zero, not `-4`), and `7 / -2` is `-3`. A student expecting rounding toward negative
infinity fails these cases.
