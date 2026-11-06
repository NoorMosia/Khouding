# Problem 07, Max of n values (language-independent design)

**Sub-skill:** a running maximum in a `for`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n` (always 1 or more). Then read `n` more
whole numbers, one per line. Print the largest.

## I/O contract
- **Input:** the first line is the count `n` (at least 1); then `n` lines, each a whole number.
- **Output:** the prompt, then the maximum on one line.

## Why it resists a trivial answer
Seed the max from the first value, then compare each later value. Cases put the max in the middle, use
all-negative values (so a `max = 0` seed would be wrong), and repeat the max, so only a true running
comparison passes.

## Note
`n` is always at least 1. Read the first value to seed the max, then loop over the remaining `n - 1`.
