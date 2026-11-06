# Problem 03, Numbered positions (language-independent design)

**Sub-skill:** the index is needed, so use the indexed `for`.
**Difficulty:** 2

## Statement (student-facing)
Read a count `n`, then `n` whole numbers into an array. Print each element with its 1-based position in the
form `pos: value`, one per line. Use exactly `pos: value` (the number, a colon, a space, the value).

## I/O contract
- **Input:** first line `n`, then `n` lines of values.
- **Output:** `n` lines, each `i+1: a[i]`.

## Why it resists a trivial answer
Both the position and the value appear, and both vary with input. Length varies incl. 0 and 1.

## Note
`foreach` cannot give the position; use the indexed `for` and print `i + 1`.
