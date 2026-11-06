# Pool p05, Sum sentence (family B, read + compute)

**Integrates:** 2.2 (parse + arithmetic), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers, each prompted on its own line. Using interpolation, print `<a> + <b> = <sum>`, where
the `+` and `=` are literal text and the sum is computed.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the equation line.

## Why it resists a trivial answer
Two varying operands, a computed sum in the final hole, and literal symbols between holes. A negative operand
case confirms the sum is really calculated.
