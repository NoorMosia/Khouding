# Problem 12, Count the maximum (language-independent design)

**Sub-skill:** find the max, then count how many times it appears.
**Difficulty:** 3

## Statement (student-facing)
Read a count `n` (at least 1), then `n` whole numbers into an array. Print how many times the maximum value
appears.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the count of elements equal to the maximum.

## Why it resists a trivial answer
The answer needs the max first, then a counting pass. Cases cover a unique max, a repeated max, all-equal, and
length 1.

## Note
First pass finds `max` (seeded from `a[0]`); second pass counts `x == max`. A unique max gives 1; all-equal
gives `n`.
