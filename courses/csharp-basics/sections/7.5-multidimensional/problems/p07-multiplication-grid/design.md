# Problem 07, Multiplication grid (language-independent design)

**Sub-skill:** computed fill from the indices, then print.
**Difficulty:** 3

## Statement (student-facing)
Read `rows`, `cols`. Fill a grid where `grid[r, c]` is `(r + 1) * (c + 1)`, that is, the multiplication table.
Print it as a table: one row per line, cells separated by a single space, no trailing space.

## I/O contract
- **Input:** two lines, `rows` then `cols`.
- **Output:** `rows` lines, each the row's products separated by single spaces.

## Why it resists a trivial answer
The table depends on both dimensions. Cases vary them incl. 1xk and kx1, so a fixed table fails.

## Note
The cell value comes from the indices, not from input values. Use `(r + 1) * (c + 1)` so row 0 column 0 is 1.
