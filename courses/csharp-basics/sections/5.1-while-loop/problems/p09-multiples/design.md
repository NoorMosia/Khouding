# Problem 09, Multiples (language-independent design)

**Sub-skill:** a stepped loop (the counter grows by more than one each pass).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter n and k:` on its own line. Read `n` (line 1) and `k` (line 2), both whole numbers with `k` at
least 1. Print the multiples of `k` that are 1 times `k`, 2 times `k`, and so on, up to and including `n`, one
per line. If `n` is less than `k`, print nothing after the prompt.

## I/O contract
- **Input:** two lines, `n` then `k`.
- **Output:** the prompt, then `k`, `2k`, `3k`, ... up to `n`, each on its own line.

## Why it resists a trivial answer
The counter steps by `k`, not 1, and the last multiple must not exceed `n`. Cases include a multiple landing
exactly on `n` (included), `n < k` (zero iterations), and `k = 1`, so the step and the bound must both be
right.
