# Problem 10, Count matches (language-independent design)

**Sub-skill:** `foreach` with a running count.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array, then a target value. Print how many elements equal the
target.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the target.
- **Output:** one line, the count of elements equal to the target.

## Why it resists a trivial answer
The count depends on the values and the target. Cases cover zero matches, one, several, plus length 0.

## Note
Start `count = 0`; `foreach`, add 1 when `x == target`. No matches prints `0`.
