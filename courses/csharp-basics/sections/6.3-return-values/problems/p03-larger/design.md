# Problem 03, Larger of two (language-independent design)

**Sub-skill:** return a value chosen by a decision.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Larger` that takes two `int` parameters and returns the larger of them (either
one if they are equal). In `Main`, prompt `Enter two numbers:` on its own line, read two whole numbers, call
`Larger`, and print the returned value.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the larger value.

## Why it resists a trivial answer
The method decides which argument to return. Cases put the larger value first, second, make them equal, and
use negatives, so a real comparison is required.
