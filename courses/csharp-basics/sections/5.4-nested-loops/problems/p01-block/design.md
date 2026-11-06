# Problem 01, Star block (language-independent design)

**Sub-skill:** a basic rectangular nest.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows, line 1) and `m` (cols, line 2), both whole
numbers of 1 or more. Print an `n`-by-`m` block of `*`: `n` rows, each `m` stars with nothing between them.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of `m` stars each.

## Why it resists a trivial answer
Cases vary both bounds, including a single row (1-by-k) and a single column (k-by-1), so the output shape
depends on both. A fixed block fails.

## Note
No separators between stars. Use `Write` for each star and one `WriteLine` after each row.
