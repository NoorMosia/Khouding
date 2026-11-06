# Problem 11, Fix the swapped dimensions (language-independent design)

**Sub-skill:** rows are `GetLength(0)`, columns are `GetLength(1)`; index `grid[row, c]`.
**Difficulty:** 3

## Statement (student-facing)
The program should read a grid and a row index, then print the sum of that row. It uses the wrong dimension
and the wrong index order, so it is wrong on non-square grids (and can crash). Fix it.

## I/O contract
- **Input:** `rows`, `cols`, `rows * cols` values row-major, then a row index.
- **Output:** one line, the sum of the chosen row.

## Why it resists a trivial answer
Cases include non-square grids where the swap gives a wrong answer or an out-of-range access. The fix walks
`GetLength(1)` (columns) and indexes `grid[row, c]`.

## Note
The bug loops `GetLength(0)` and indexes `grid[c, row]`. Rows use `GetLength(0)`, columns use `GetLength(1)`;
a row sum holds the row fixed and varies the column. The committed solution stays in bounds.
