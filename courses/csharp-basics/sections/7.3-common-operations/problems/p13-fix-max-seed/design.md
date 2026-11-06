# Problem 13, Fix the max seed (language-independent design)

**Sub-skill:** seed `max` from `a[0]`, not 0.
**Difficulty:** 2

## Statement (student-facing)
The program should print the largest element of the array. It is wrong when every element is negative. Fix it.

## I/O contract
- **Input:** first line `n` (n >= 1), then `n` lines of values.
- **Output:** one line, the maximum.

## Why it resists a trivial answer
Cases include an all-negative array, where a `max` seeded at 0 returns 0, a value not in the array. The fix is
to seed from `a[0]` and loop from index 1.

## Note
The bug is `int max = 0;`. The committed solution seeds `max = a[0]`.
