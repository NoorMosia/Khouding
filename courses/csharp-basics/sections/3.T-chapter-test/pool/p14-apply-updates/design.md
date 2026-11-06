# Pool p14, Apply updates (family D, updating & Math)

**Integrates:** 3.4 (compound `*=` then `+=`, order matters), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read a starting value, a factor, and an amount (each prompted on its own line). Update the value: multiply by
the factor with `*=`, then add the amount with `+=`. Print the final value.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the final value.

## Why it resists a trivial answer
The order of updates matters: `(value * factor) + amount`. The times-zero and times-one cases, with varied
inputs, mean each update must be applied in sequence.
