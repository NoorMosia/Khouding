# Problem 08, Sum with a loop (language-independent design)

**Sub-skill:** accumulate a running total over the array (the 7.3 habit, seeded here).
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print the sum of all the elements.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** one line, the sum.

## Why it resists a trivial answer
The sum depends on all the values. Cases vary them incl. negatives and length 0 (sum 0), so fixed output
fails.

## Note
Start `sum = 0` before the loop; add each element. An empty array sums to 0.
