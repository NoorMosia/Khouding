# Problem 06, Sum a column (language-independent design)

**Sub-skill:** fix the column, loop the rows.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values row-major into a grid, then a column index. Print the sum of
that column.

## I/O contract
- **Input:** `rows`, `cols`, `rows * cols` values, then a column index (0-based, in range).
- **Output:** one line, the sum of the chosen column.

## Why it resists a trivial answer
The sum depends on the values and the chosen column. Cases vary both, so fixed output fails. A column walk
indexes `grid[r, col]`, the mirror of the row walk.

## Note
Hold `col` fixed, loop `r` over `GetLength(0)`, adding `grid[r, col]`. Stay in bounds.
