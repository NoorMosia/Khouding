# Problem 10, Clamp at zero (language-independent design)

**Sub-skill:** an early `return` on a guard, then the normal return.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `ClampFloor` that takes one `int n`: if `n` is negative, return `0` immediately;
otherwise return `n` unchanged. In `Main`, prompt `Enter a number:` on its own line, read a whole number, call
`ClampFloor`, and print the returned value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the clamped value.

## Why it resists a trivial answer
The method takes an early exit for negatives and a normal exit otherwise. Cases cover a positive, zero (not
clamped), and negatives (clamped to 0), so both return paths are exercised.
