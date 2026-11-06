# Problem 01, Sum (language-independent design)

**Sub-skill:** accumulate a total over the array.
**Difficulty:** 1

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print the sum of all elements.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line, the sum.

## Why it resists a trivial answer
The sum depends on all values. Cases vary them incl. negatives and length 0 (sum 0).

## Note
Empty array sums to 0.
