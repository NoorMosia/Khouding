# Problem 03, First and last (language-independent design)

**Sub-skill:** `list[0]` and `list[list.Count - 1]`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n` (at least 1), then `n` integers into a list. Print the first element, then the last element.

## I/O contract
- **Input:** `n` (>= 1), then `n` values.
- **Output:** two lines, `list[0]` then `list[list.Count - 1]`.

## Why it resists a trivial answer
Both values depend on input. Cases include a single-element list (first and last are the same).
