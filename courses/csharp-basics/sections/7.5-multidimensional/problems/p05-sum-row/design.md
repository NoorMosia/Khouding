# Problem 05, Sum a row (language-independent design)

**Sub-skill:** fix the row, loop the columns.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values row-major into a grid, then a row index. Print the sum of that
row.

## I/O contract
- **Input:** `rows`, `cols`, `rows * cols` values, then a row index (0-based, in range).
- **Output:** one line, the sum of the chosen row.

## Why it resists a trivial answer
The sum depends on the values and the chosen row. Cases vary the grid and the row, so fixed output fails.

## Note
Hold `row` fixed, loop `c` over `GetLength(1)`, adding `grid[row, c]`. Stay in bounds: the row index is always
valid.
