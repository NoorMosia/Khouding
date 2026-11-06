# Pool p19, Fix the forgotten double (family E, fix the broken program)

**Integrates:** 3.2 (force a double), debug.
**Difficulty:** 2

## Statement (student-facing)
This program should print the decimal quotient of `a` and `b`, but both are `int`, so `a / b` truncates
(`7 / 2` prints `3`, not `3.5`). Fix it by forcing a decimal: `(double)a / b`.

## The planted bug
`a / b` with two `int` operands does integer division and truncates. The fix converts an operand to `double`
before dividing: `(double)a / b`.

## Why it resists a trivial answer
The starter compiles and runs; it just prints the truncated value on every case. Only forcing the decimal
gives `3.5`, `2.25`, `0.25`, `1.25`.
