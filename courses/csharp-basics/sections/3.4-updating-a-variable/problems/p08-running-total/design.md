# Problem 08, Running total (language-independent design)

**Sub-skill:** the accumulator pattern, repeated `+=` into a total.
**Difficulty:** 2

## Statement (student-facing)
Read three amounts (each prompted on its own line). Start a total at `0` and add each amount to it with `+=`.
Print the final total.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the total on its own line.

## Why it resists a trivial answer
The total is built by updating one variable three times, which is the real-world reason `+=` exists. The
negative-amount case and varied values mean the accumulator must actually run. This is the accumulator you
will later drive with a loop.
