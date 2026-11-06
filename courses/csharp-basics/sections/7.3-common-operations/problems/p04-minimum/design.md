# Problem 04, Minimum (language-independent design)

**Sub-skill:** running min seeded from `a[0]`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print the smallest element.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the minimum.

## Why it resists a trivial answer
The min depends on all values. Cases include an all-positive array (a 0 seed would wrongly win) and length 1.

## Note
Seed `min = a[0]` and loop from index 1 with `<`.
