# Problem 02, Index of a substring (language-independent design)

**Sub-skill:** `IndexOf` with the `-1` sentinel.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a substring. Print the index of the first occurrence of the substring, or `-1`
if it is not present.

## I/O contract
- **Input:** two lines: the text, then the substring.
- **Output:** one line, the index or `-1`.

## Why it resists a trivial answer
The result depends on both inputs. Cases cover a match at the start, in the middle, absent (`-1`), and the
first of duplicates, so a fixed answer fails.

## Note
`IndexOf` returns the first occurrence; `-1` means not found.
