# Pool p11, Character block (family D, nested)

**Integrates:** 5.4.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print an
`n`-by-`m` block of `#`: `n` rows, each `m` hashes with nothing between them.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of `m` hashes.

## Why it resists a trivial answer
Cases vary both bounds including a single row and a single column, so the shape depends on both. A fixed block
fails.

## Note
`Write` each `#`, `WriteLine` after each row. No separators.
