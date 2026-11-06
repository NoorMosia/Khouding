# Pool p08, Max of n (family C, for)

**Integrates:** 5.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n` (always 1 or more). Then read `n` more
whole numbers and print the largest.

## I/O contract
- **Input:** the count `n` (at least 1), then `n` whole numbers.
- **Output:** the prompt, then the maximum.

## Why it resists a trivial answer
Seed the max from the first value and compare the rest. Cases place the max in the middle, use all-negative
values (a `max = 0` seed would be wrong), and repeat the max, so a true running comparison is needed.

## Note
`n` is always at least 1. Seed from the first read, then loop over the remaining `n - 1`.
