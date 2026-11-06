# Pool p13, Times table (family D, nested)

**Integrates:** 5.4.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter rows and cols:` on its own line. Read `n` (rows) and `m` (cols), both 1 or more. Print a table:
the cell at row `r`, column `c` is `r * c`. Separate cells in a row with single spaces, no trailing space.

## I/O contract
- **Input:** two lines, `n` then `m`.
- **Output:** the prompt, then `n` rows of products.

## Why it resists a trivial answer
Each cell is computed from both counters and a trailing space would fail the match. Cases vary both bounds
including single row and single column, so the nest and clean separator are both required.

## Note
Single space before each cell except the first; `WriteLine` ends each row.
