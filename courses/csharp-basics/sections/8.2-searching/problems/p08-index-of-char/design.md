# Problem 08, Index of a character (language-independent design)

**Sub-skill:** `IndexOf` with a `char`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a single character (the first character of the second line). Print the index of
its first occurrence in the line, or `-1` if it does not occur.

## I/O contract
- **Input:** two lines: the text, then a line whose first character is the target.
- **Output:** one line, the index or `-1`.

## Why it resists a trivial answer
The result depends on both inputs. Cases cover a match at the start, mid-string, absent (`-1`), and the first
of duplicates, so a fixed answer fails.

## Note
`IndexOf` of a `char` returns the first occurrence, or `-1`.
