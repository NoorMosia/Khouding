# Pool p07, Average of n (family C, for)

**Integrates:** 5.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n` (always 1 or more). Then read `n` more
whole numbers and print their average as a whole number (sum divided by `n`, integer division).

## I/O contract
- **Input:** the count `n` (at least 1), then `n` whole numbers.
- **Output:** the prompt, then the integer average.

## Why it resists a trivial answer
The average depends on the values and `n`, and integer division truncates. Cases include non-dividing sums, so
accumulate-then-divide is required.

## Note
`n` is always at least 1 (no divide by zero). Integer division truncates (`15 / 2` is `7`).
