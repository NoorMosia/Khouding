# Problem 10, Row totals (language-independent design)

**Sub-skill:** combine the table walk with a per-row accumulate.
**Difficulty:** 3

## Statement (student-facing)
Read `rows`, `cols`, then `rows * cols` values row-major into a grid. Print each row's cells separated by a
single space, then ` | ` (space, bar, space), then that row's total. One row per line.

For example, a row `1 2 3` prints as:

```
1 2 3 | 6
```

## I/O contract
- **Input:** `rows`, `cols`, then `rows * cols` values.
- **Output:** one line per row: the cells, then ` | `, then the row total.

## Why it resists a trivial answer
Both the cells and each total depend on the input. Cases vary both dimensions and the values, so fixed output
fails.

## Note
Accumulate the row total in the same inner loop that prints the cells. Cells use a single space with no
trailing space before the ` | `.
