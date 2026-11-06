# Problem 12, Fix the too-late conversion (language-independent design)

**Sub-skill:** debug the subtle trap, converting the result instead of an operand.
**Difficulty:** 3

## Statement (student-facing)
This program tries to get a decimal by storing the quotient in a `double`, but it still prints a whole number
(`7 / 2` prints `3`, not `3.5`). The division `a / b` happens in whole numbers first and only then is stored
in the `double`, so the fraction is already gone. Fix it by converting before the division: `(double)a / b`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the decimal quotient on its own line.

## The planted bug
`double result = a / b;` computes `a / b` with two `int` operands (truncating), then widens the truncated
value to `double`. The conversion is too late. The fix converts an operand first: `(double)a / b`.

## Why it resists a trivial answer
This is the trap that catches students who think making the variable a `double` is enough. The starter
compiles and runs, printing the truncated value on every case. Only converting before dividing gives the
correct decimals.
