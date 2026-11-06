# Problem 08, Isolation (language-independent design)

**Sub-skill:** a method sees only what it is passed; `Main`'s other variables are untouched.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Combine` that takes two `int` parameters and returns their sum. In `Main`,
prompt `Enter three numbers:` on its own line, read `a`, `b`, and `c`. Call `Combine(a, b)`, print the result,
then print `c`. The method only receives `a` and `b`; it never sees `c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then `a + b`, then `c`.

## Why it resists a trivial answer
`c` is a `Main` variable the method cannot see or change, so the second line is always the entered `c`. Cases
vary all three values, so the method must combine only its two parameters and `c` must survive unchanged.
