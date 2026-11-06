# Problem 11, Sum of multiples (language-independent design)

**Sub-skill:** a stepped `for` that accumulates.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter n and k:` on its own line. Read `n` (line 1) and `k` (line 2), both whole numbers with `k` at
least 1. Print the sum of the multiples of `k` from `k` up to and including `n` (`k + 2k + 3k + ...`). If `n`
is less than `k`, print `0`.

## I/O contract
- **Input:** two lines, `n` then `k`.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The counter steps by `k` and the sum depends on both inputs. Cases include a multiple landing exactly on `n`,
`n < k` (sum `0`), and `k = 1`, so the step, the bound, and the accumulator must all be right.
