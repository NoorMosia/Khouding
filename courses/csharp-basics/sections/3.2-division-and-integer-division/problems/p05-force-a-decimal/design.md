# Problem 05, Force a decimal result (language-independent design)

**Sub-skill:** the fix, convert an `int` operand to `double` to get a decimal quotient.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the quotient as a decimal, not a
truncated whole number. Convert one operand to `double` first: `(double)a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the decimal quotient on its own line.

## Why it resists a trivial answer
The values arrive as `int`, so plain `a / b` would truncate (`7 / 2 = 3`). Only converting an operand to
`double` before dividing produces the required decimals (`3.5`, `2.25`, `0.25`, `1.25`). Values chosen so each
prints cleanly.
