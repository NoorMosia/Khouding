# Pool p06, Decimal quotient (family B, division)

**Integrates:** 3.2 (force a double), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the quotient as a decimal, forcing a
`double` with `(double)a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the decimal quotient.

## Why it resists a trivial answer
Plain `a / b` would truncate. Only forcing a `double` gives the required decimals. Values chosen so each
quotient prints cleanly.
