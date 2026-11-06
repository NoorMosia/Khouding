# Problem 11, The range (language-independent design)

**Sub-skill:** combine max and min in one pass.
**Difficulty:** 3

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print the range: the maximum minus the
minimum.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, `max - min`.

## Why it resists a trivial answer
The range depends on the two extremes. Cases include all-equal (range 0), all-negative, and length 1 (range
0).

## Note
Seed both `max` and `min` from `a[0]`; update both in the loop. A length-1 array has range 0.
