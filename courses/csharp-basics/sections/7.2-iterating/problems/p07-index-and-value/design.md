# Problem 07, Index and value (language-independent design)

**Sub-skill:** print the 0-based index alongside its element.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. For each element print exactly `a[i] = value`, where
`i` is the 0-based index and `value` is the element. One per line.

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** `n` lines, each `a[i] = value`.

## Why it resists a trivial answer
Both the index and value appear and vary with input and length. Cases incl. length 0 and 1.

## Note
Use the literal text `a[` and `] = ` around the index. The index is 0-based here (contrast p03's 1-based).
