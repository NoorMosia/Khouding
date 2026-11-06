# Pool p13, Running total (family D, updating & Math)

**Integrates:** 3.4 (accumulator with `+=`), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read three amounts (each prompted on its own line). Start a total at `0`, add each with `+=`, and print the
final total.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the total.

## Why it resists a trivial answer
The total is built by updating one variable three times. The negative-amount case and varied values mean the
accumulator must actually run.
