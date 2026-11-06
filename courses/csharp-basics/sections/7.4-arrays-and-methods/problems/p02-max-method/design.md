# Problem 02, A max method (language-independent design)

**Sub-skill:** compute over an array parameter, return a value.
**Difficulty:** 2

## Statement (student-facing)
Write a method `static int Max(int[] a)` that returns the largest element. In `Main`, read a count `n` (at
least 1), then `n` values, and print `Max(array)`.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the maximum.

## Why it resists a trivial answer
Max depends on the values. Cases include all-negative (seed must be `a[0]`, not 0) and length 1.

## Note
Seed `max = a[0]`, loop from index 1. n >= 1.
