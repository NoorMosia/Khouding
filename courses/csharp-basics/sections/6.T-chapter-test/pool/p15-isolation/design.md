# Pool p15, Isolation (family D, scope)

**Integrates:** 6.4.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Combine` that takes two `int` parameters and returns their sum. In `Main`,
prompt `Enter three numbers:` on its own line, read `a`, `b`, `c`. Print `Combine(a, b)`, then print `c`. The
method only receives `a` and `b`; it never sees `c`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then `a + b`, then `c`.

## Why it resists a trivial answer
`c` is a `Main` variable the method cannot see, so the second line is always the entered `c`. Cases vary all
three values.
