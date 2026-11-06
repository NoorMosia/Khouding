# Problem 04, Sum all cells (language-independent design)

**Sub-skill:** nested accumulate over a grid.
**Difficulty:** 2

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values row-major into a grid. Print the sum of all cells.

## I/O contract
- **Input:** `rows`, `cols`, then `rows * cols` values, one per line.
- **Output:** one line, the total of every cell.

## Why it resists a trivial answer
The sum depends on all cells. Cases vary both dimensions and the values incl. negatives.

## Note
Nested loop over rows then columns, adding `grid[r, c]` to a running total.
