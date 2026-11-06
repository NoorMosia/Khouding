# Pool p09, Return the larger (family C, return values)

**Integrates:** 6.3.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Larger` that takes two `int`s and returns the larger (either if equal). In
`Main`, prompt `Enter two numbers:` on its own line, read two whole numbers, call `Larger`, and print the
returned value.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the larger value.

## Why it resists a trivial answer
Cases place the larger first, second, make them equal, and use negatives, so a real comparison is required.
