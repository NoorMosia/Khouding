# Pool p02, Call n times (family A, define & call)

**Integrates:** 6.1.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Star` that prints exactly `*`. In `Main`, prompt `Enter a count:` on its own
line, read a whole number `n`, and call `Star` exactly `n` times (nothing if `n` is 0 or less).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `*` printed `n` times.

## Why it resists a trivial answer
The number of calls depends on `n`. Cases vary `n` including `n = 0`, so a fixed number of prints fails.
