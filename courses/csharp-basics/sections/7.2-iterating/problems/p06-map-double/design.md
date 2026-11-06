# Problem 06, Each doubled (language-independent design)

**Sub-skill:** the map loop shape (print a transformed copy).
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print each element multiplied by 2, one per line, in
order.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** each element times 2, one per line.

## Why it resists a trivial answer
Each printed value is derived from an input value. Cases vary values and length incl. 0 and negatives.

## Note
The array is not changed; each line is a transformed copy. A `foreach` read is enough.
