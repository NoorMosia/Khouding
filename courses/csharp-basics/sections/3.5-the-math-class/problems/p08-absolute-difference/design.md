# Problem 08, Absolute difference (language-independent design)

**Sub-skill:** compose a `Math` call with arithmetic, `Math.Abs(a - b)`.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (each prompted on its own line). Print the absolute difference between them, the gap,
which is `Math.Abs(a - b)`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the non-negative gap on its own line.

## Why it resists a trivial answer
`10` then `3` and `3` then `10` both give `7`: the absolute value makes the order of inputs not matter. A
student who prints `a - b` without `Math.Abs` fails the reversed and negative cases.
