# Pool p11, Sum to n (return) (family C, return values)

**Integrates:** 6.3.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `SumTo` that takes one `int n` and returns the sum of 1 to `n` (0 if `n` is 0 or
less). In `Main`, prompt `Enter a count:` on its own line, read a whole number, call `SumTo`, and print the
returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the sum.

## Why it resists a trivial answer
The method loops to build the total and returns it. Cases vary `n` including `n = 0` (returns 0).
