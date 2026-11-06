# Problem 02, Print each word (language-independent design)

**Sub-skill:** `Split` then `foreach`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of space-separated words. Print each word on its own line.

## I/O contract
- **Input:** one line with space-separated words.
- **Output:** each word on its own line.

## Why it resists a trivial answer
The number of lines equals the word count, which varies. Cases include 1 word.

## Note
Split then loop the `string[]` with `foreach`.
