# Problem 02, Sum to n (language-independent design)

**Sub-skill:** accumulate a running total in a `while`.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the sum of 1 to `n`. If `n` is 0 or
less, print `0`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The total depends on `n`. Cases include `n = 0` (sum is `0`, the accumulator keeps its start value) and
several larger counts, so a hardcoded sum fails.
