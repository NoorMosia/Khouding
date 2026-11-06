# Problem 09, Max cell (language-independent design)

**Sub-skill:** nested max seeded from `grid[0, 0]`.
**Difficulty:** 3

## Statement (student-facing)
Read `rows`, `cols` (both at least 1), then `rows * cols` values row-major into a grid. Print the largest cell.

## I/O contract
- **Input:** `rows`, `cols` (>= 1), then `rows * cols` values.
- **Output:** one line, the maximum cell.

## Why it resists a trivial answer
The max depends on all cells. Cases include an all-negative grid, so a seed of 0 fails. Also a 1x1 grid.

## Note
Seed `max = grid[0, 0]`, then nested-loop the rest. Seeding at 0 breaks on all-negative grids.
