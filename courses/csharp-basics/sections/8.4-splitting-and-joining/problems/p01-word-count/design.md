# Problem 01, Word count (language-independent design)

**Sub-skill:** `Split(' ').Length`.
**Difficulty:** 1

## Statement (student-facing)
Read a line of space-separated words. Print the number of words.

## I/O contract
- **Input:** one line with space-separated words.
- **Output:** one line, the word count.

## Why it resists a trivial answer
The count depends on the input. Cases vary the count including 1, so a fixed number fails.

## Note
`s.Split(' ').Length` counts the pieces.
