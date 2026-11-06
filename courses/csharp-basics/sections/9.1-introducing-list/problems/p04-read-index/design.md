# Problem 04, Element at a read index (language-independent design)

**Sub-skill:** `list[i]` for a read index.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` integers into a list, then an index (0-based, in range). Print the element at that index.

## I/O contract
- **Input:** `n`, then `n` values, then an index.
- **Output:** one line, `list[index]`.

## Why it resists a trivial answer
Cases vary the values and the index (first, middle, last), so a fixed answer fails.
