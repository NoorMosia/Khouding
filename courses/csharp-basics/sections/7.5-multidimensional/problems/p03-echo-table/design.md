# Problem 03, Echo as a table (language-independent design)

**Sub-skill:** fill a grid row by row, print it as a table.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values in row-major order (row 0 left to right, then row 1, and so
on). Print the grid as a table: one row per line, cells separated by a single space, with no trailing space.

## I/O contract
- **Input:** `rows`, `cols`, then `rows * cols` values, one per line.
- **Output:** `rows` lines, each the row's cells separated by single spaces, no trailing space.

## Why it resists a trivial answer
The table depends on the values and both dimensions. Cases vary both, incl. 1xk and kx1.

## Note
A space goes before every cell except the first in its row (`if (c > 0)`), so there is no trailing space.
`WriteLine` ends each row.
