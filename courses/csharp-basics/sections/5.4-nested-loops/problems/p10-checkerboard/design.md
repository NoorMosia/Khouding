# Problem 10, Checkerboard (language-independent design)

**Sub-skill:** read both bounds and choose each cell with an inner condition.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print an
`n`-by-`m` checkerboard: a cell is `#` when the sum of its row and column numbers is even, and `.` otherwise.
The top-left cell (row 1, col 1) is `#`. Each cell is one character, no separators.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of `m` characters each (`#` or `.`).

## Why it resists a trivial answer
The cell depends on the parity of `row + col`, so the pattern alternates in both directions. Cases vary both
bounds including single row and single column, so a fixed pattern or a one-dimensional alternation fails.

## Note
Use `(row + col) % 2 == 0` for `#`, else `.`. One `Write` per cell, `WriteLine` to end each row.
