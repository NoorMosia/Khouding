# Problem 07, Grid sum (language-independent design)

**Sub-skill:** accumulate a single total across a nested loop.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Add up `r * c`
for every cell (`r` from 1 to `n`, `c` from 1 to `m`). Print the total once.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then the total on one line.

## Why it resists a trivial answer
The accumulator lives outside both loops and sums every cell. Cases vary both bounds, including single-row and
single-column grids, so the value depends on both dimensions and a hardcoded total fails.

## Note
Keep the total outside both loops; add `r * c` inside the inner loop; print it after both loops finish.
