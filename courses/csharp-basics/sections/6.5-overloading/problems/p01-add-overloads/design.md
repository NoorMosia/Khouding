# Problem 01, Add overloads (language-independent design)

**Sub-skill:** overload by parameter count.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Add`: a `static int Add(int a, int b)` returning `a + b`, and a
`static int Add(int a, int b, int c)` returning `a + b + c`. In `Main`, prompt `Enter three numbers:` on its
own line, read `a`, `b`, and `c`, then print `Add(a, b)` on one line and `Add(a, b, c)` on the next.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the two-argument sum, then the three-argument sum.

## Why it resists a trivial answer
The two calls resolve to different overloads by argument count. Cases vary all three values, so both overloads
must be defined and the right one chosen each call.
