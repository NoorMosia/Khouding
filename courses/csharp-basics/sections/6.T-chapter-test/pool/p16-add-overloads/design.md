# Pool p16, Add overloads (family E, overloading)

**Integrates:** 6.5.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Add`: `static int Add(int a, int b)` returning `a + b`, and
`static int Add(int a, int b, int c)` returning `a + b + c`. In `Main`, prompt `Enter three numbers:` on its
own line, read `a`, `b`, `c`, then print `Add(a, b)` and `Add(a, b, c)`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the two-argument sum, then the three-argument sum.

## Why it resists a trivial answer
The two calls resolve to different overloads by argument count. Cases vary all three values.
