# Problem 07, Add an overload (language-independent design)

**Sub-skill:** add a new overload to an existing method.
**Difficulty:** 2

## Statement (student-facing)
The program already has `static int Add(int a, int b)`, and `Main` also calls `Add(a, b, c)` with three
arguments, which currently matches no overload. Add a `static int Add(int a, int b, int c)` that returns the
sum of all three, so both calls work. `Main` reads `a`, `b`, `c` and prints `Add(a, b)` then `Add(a, b, c)`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the two-argument sum, then the three-argument sum.

## Why it resists a trivial answer
Until the three-parameter overload is added, the three-argument call does not compile. Cases vary the numbers,
so the new overload must sum all three correctly.
