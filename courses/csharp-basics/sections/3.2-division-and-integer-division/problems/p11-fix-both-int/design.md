# Problem 11, Fix the whole-number division (language-independent design)

**Sub-skill:** debug the signature truncation bug, both operands `int`.
**Difficulty:** 2

## Statement (student-facing)
This program should print the decimal quotient of `a` and `b`, but it prints a truncated whole number because
both are `int` (so `7 / 2` prints `3`, not `3.5`). Fix it by forcing a decimal: `(double)a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the decimal quotient on its own line.

## The planted bug
`a / b` with two `int` operands does integer division and truncates. The fix converts an operand to `double`
before dividing: `(double)a / b`.

## Why it resists a trivial answer
The starter compiles and runs; it just prints the wrong (truncated) value on every case. Only forcing the
decimal produces `3.5`, `2.25`, `0.25`, `1.25`.
