# Problem 08, Min of n values (language-independent design)

**Sub-skill:** a running minimum in a `for`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n` (always 1 or more). Then read `n` more
whole numbers, one per line. Print the smallest.

## I/O contract
- **Input:** the first line is the count `n` (at least 1); then `n` lines, each a whole number.
- **Output:** the prompt, then the minimum on one line.

## Why it resists a trivial answer
Seed the min from the first value, then compare each later value. Cases put the min in the middle, use
all-negative values, and repeat the min, so only a true running comparison passes.

## Note
`n` is always at least 1. Seed the min from the first read, then loop over the remaining `n - 1`.
