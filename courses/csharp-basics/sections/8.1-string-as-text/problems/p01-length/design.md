# Problem 01, Length of a line (language-independent design)

**Sub-skill:** `s.Length`.
**Difficulty:** 1

## Statement (student-facing)
Read a line of text. Print its length (the number of characters).

## I/O contract
- **Input:** one line.
- **Output:** one line, the character count.

## Why it resists a trivial answer
The length depends on the input. Cases vary content and length, including a single character and a line with a
space, so a fixed number fails.

## Note
A space is a character and counts toward the length.
