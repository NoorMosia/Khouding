# Problem 04, Character at an index (language-independent design)

**Sub-skill:** `s[i]` for a read index.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read an index (between 0 and the length minus 1). Print the character at that index.

## I/O contract
- **Input:** two lines: the text, then an index.
- **Output:** one line, the character at that index.

## Why it resists a trivial answer
The printed character depends on the text and the index. Cases vary both, including index 0 and the last valid
index, so a fixed answer fails.

## Note
Stay in bounds: the index cases are always `0 .. s.Length - 1`.
