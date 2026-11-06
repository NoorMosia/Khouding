# Problem 08, Guard, then divide (language-independent design)

**Sub-skill:** guard-then-act, only do the risky operation once the input is known safe.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter two numbers:` on its own line. Read `a` (line 1) and `b` (line 2), both whole numbers. If `b` is
not 0, print the integer division `a / b`. If `b` is 0, print `cannot divide by zero`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then either the quotient or `cannot divide by zero`.

## Why it resists a trivial answer
Dividing by zero throws, so the guard must come first; the compute belongs inside the safe branch. Cases
include a zero divisor (which must take the message branch, not crash), a negative divisor (integer division
truncates toward zero), and a zero dividend. A program without the guard throws on the zero-divisor case.

## Note
Integer `/` truncates toward zero (Chapter 3). `9 / -2` is `-4`.
