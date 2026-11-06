# Problem 07, Negative remainder (language-independent design)

**Sub-skill:** the sign of `%` follows the dividend (the left operand).
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line; `a` may be negative). Print `a % b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `a % b` on its own line.

## Why it resists a trivial answer
`-7 % 3` is `-1` (sign from `-7`) and `7 % -3` is `1` (sign from `7`): the result's sign follows the left
operand, not the right. A student who assumes the sign follows the divisor fails the `7 % -3` case.
