# Problem 05, Count above a threshold (language-independent design)

**Sub-skill:** count-matching against a read threshold.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array, then a threshold. Print how many elements are strictly
greater than the threshold.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the threshold.
- **Output:** one line, the count.

## Why it resists a trivial answer
The count depends on the values and the threshold. Cases cover none, some, all, plus length 0.

## Note
Strictly greater (`>`), not `>=`. Empty array gives 0.
