# Pool p08, Average of two (family B, division)

**Integrates:** 3.2 (force a double after a sum), 3.1 (parenthesize the sum), 2.1/2.2.
**Difficulty:** 3

## Statement (student-facing)
Read two whole numbers (each prompted on its own line). Print their average as a decimal:
`(double)(a + b) / 2`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the average on its own line.

## Why it resists a trivial answer
The sum must be parenthesized and cast to `double` so the halving keeps its decimal: the average of `5` and
`2` is `3.5`, not `3`. Plain integer division or a too-late cast fails. Values chosen so the average prints
cleanly.
