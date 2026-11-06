# Pool p17, Max overloads (family E, overloading)

**Integrates:** 6.5.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Max`: `static int Max(int a, int b)` returns the larger of two, and
`static int Max(int a, int b, int c)` returns the largest of three (you may reuse the two-argument version).
In `Main`, prompt `Enter three numbers:` on its own line, read `a`, `b`, `c`, then print `Max(a, b)` and
`Max(a, b, c)`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the max of the first two, then the max of all three.

## Why it resists a trivial answer
The two calls resolve to different overloads. Cases place the maximum in various positions and use negatives.
