# Problem 11, Round trip (language-independent design)

**Sub-skill:** `Split` then `Join` with a different separator.
**Difficulty:** 3

## Statement (student-facing)
Read a line of space-separated words. Print them joined by `"-"` instead of spaces.

## I/O contract
- **Input:** one line with space-separated words.
- **Output:** one line, words joined by hyphens.

## Why it resists a trivial answer
The output depends on the words and their count. Cases vary both.

## Note
`string.Join("-", s.Split(' '))`.
