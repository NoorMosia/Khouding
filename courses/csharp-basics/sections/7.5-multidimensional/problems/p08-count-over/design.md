# Problem 08, Count cells over a threshold (language-independent design)

**Sub-skill:** nested count with a condition.
**Difficulty:** 3

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values row-major into a grid, then a threshold. Print how many cells
are strictly greater than the threshold.

## I/O contract
- **Input:** `rows`, `cols`, `rows * cols` values, then a threshold.
- **Output:** one line, the count.

## Why it resists a trivial answer
The count depends on the cells and the threshold. Cases cover none/some/all and vary both dimensions.

## Note
Nested loop over every cell; count `grid[r, c] > threshold`. Strictly greater.
