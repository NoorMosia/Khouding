# Pool p14, Checkerboard (family D, nested)

**Integrates:** 5.4 with an inner condition.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print an
`n`-by-`m` checkerboard: a cell is `#` when the sum of its row and column numbers is even, `.` otherwise. The
top-left cell is `#`. One character per cell, no separators.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of `m` characters.

## Why it resists a trivial answer
The cell depends on the parity of `row + col`, alternating in both directions. Cases vary both bounds
including single row and column, so a fixed or one-dimensional pattern fails.

## Note
`(row + col) % 2 == 0` gives `#`, else `.`. One `Write` per cell, `WriteLine` ends each row.
