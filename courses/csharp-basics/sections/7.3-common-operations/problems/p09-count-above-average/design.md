# Problem 09, Count above the average (language-independent design)

**Sub-skill:** two passes: compute the average, then count against it.
**Difficulty:** 3

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print how many elements are strictly
greater than the average.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the count of elements above the average.

## Why it resists a trivial answer
The answer needs the average first, then a comparison pass. Cases vary the spread, so a fixed count fails.
Elements equal to the average do not count (strictly greater).

## Note
First pass computes `(double)sum / a.Length`; second pass counts `x > average`. Compare against the double
average, not an integer.
