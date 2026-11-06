# Problem 06, From an index to the end (language-independent design)

**Sub-skill:** `Substring(i)` with one argument.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then an index `i` (between 0 and the line's length). Print the characters from index `i`
to the end.

## I/O contract
- **Input:** two lines: the text, then `i`.
- **Output:** one line, from index `i` to the end.

## Why it resists a trivial answer
The output depends on the text and `i`. Cases vary `i`, including 0 (whole string) and the length (empty
output), so a fixed answer fails. `i` is always in bounds.

## Note
`Substring(i)` with one argument takes from index `i` to the end. `Substring(s.Length)` gives an empty string.
