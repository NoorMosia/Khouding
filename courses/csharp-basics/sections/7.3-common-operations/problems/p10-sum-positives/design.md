# Problem 10, Sum of positives (language-independent design)

**Sub-skill:** conditional sum (add only matching elements).
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print the sum of only the positive elements (those
greater than 0).

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line, the sum of the positive elements.

## Why it resists a trivial answer
The sum depends on which elements are positive. Cases cover mixed, all-negative (sum 0), all-positive, and
length 0.

## Note
Zero is not positive, so a `0` element adds nothing. No positives sums to 0.
