# Problem 05, First N characters (language-independent design)

**Sub-skill:** `Substring(0, n)`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then a count `n` (between 0 and the line's length). Print the first `n` characters.

## I/O contract
- **Input:** two lines: the text, then `n`.
- **Output:** one line, the first `n` characters.

## Why it resists a trivial answer
The output depends on the text and `n`. Cases vary `n`, including 0 (empty output) and the full length, so a
fixed answer fails. `n` is always in bounds.

## Note
`Substring(0, n)` takes `n` characters starting at index 0.
