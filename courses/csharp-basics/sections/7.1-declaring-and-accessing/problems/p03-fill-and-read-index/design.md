# Problem 03, Fill then read an index (language-independent design)

**Sub-skill:** fill slots from reads, then read one by a chosen index.
**Difficulty:** 2

## Statement (student-facing)
Read three whole numbers into a 3-slot array (first into index 0, then 1, then 2). Then read an index between
0 and 2 and print the element at that index.

## I/O contract
- **Input:** four lines: three values, then an index (0-2).
- **Output:** one line, the element at the chosen index.

## Why it resists a trivial answer
The printed value depends on both the stored values and the index. Cases vary both, including index 0 and
index 2, so a fixed slot fails.

## Note
Stay in bounds: the index cases are always 0, 1, or 2.
