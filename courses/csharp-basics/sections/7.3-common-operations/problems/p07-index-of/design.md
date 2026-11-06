# Problem 07, Index of first match (language-independent design)

**Sub-skill:** linear search returning an index or `-1`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array, then a target. Print the 0-based index of the first
element that equals the target, or `-1` if the target is not present.

## I/O contract
- **Input:** first line `n`, then `n` lines of values, then one line, the target.
- **Output:** one line, the index of the first match, or `-1`.

## Why it resists a trivial answer
The index depends on the values and target. Cases cover a match at a middle index, absent (`-1`), duplicates
(first wins), and length 0 (`-1`).

## Note
Start `found = -1`, walk with the index, set and `break` on the first match. Index is 0-based.
