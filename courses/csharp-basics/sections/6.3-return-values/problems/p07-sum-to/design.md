# Problem 07, Sum to n (language-independent design)

**Sub-skill:** loop inside a method, then return the accumulated result.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `SumTo` that takes one `int n` and returns the sum of 1 to `n` (0 if `n` is 0 or
less). In `Main`, prompt `Enter a count:` on its own line, read a whole number, call `SumTo`, and print the
returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the sum.

## Why it resists a trivial answer
The method loops to build the total and returns it. Cases vary `n` including `n = 0` (returns 0), so the loop
and the return must both be right.
