# Problem 03, Maximum (language-independent design)

**Sub-skill:** running max seeded from `a[0]`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print the largest element.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the maximum.

## Why it resists a trivial answer
The max depends on all values. Cases include an all-negative array, so a `max` seeded at 0 fails. Also length
1 (the element is the max).

## Note
Seed `max = a[0]` and loop from index 1. Seeding at 0 breaks on all-negative input.
