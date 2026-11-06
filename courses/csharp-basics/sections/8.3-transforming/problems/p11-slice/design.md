# Problem 11, A slice (language-independent design)

**Sub-skill:** `Substring(start, length)` with both arguments.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then a start index, then a length. Print the slice: `length` characters starting at
`start`.

## I/O contract
- **Input:** three lines: the text, a start index, a length.
- **Output:** one line, the slice.

## Why it resists a trivial answer
The output depends on all three inputs. Cases vary start and length, so a fixed answer fails. Inputs are always
in bounds.

## Note
`Substring(start, length)`. Cases are authored so `start + length <= s.Length`.
