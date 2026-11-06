# Problem 11, Word count by counting spaces (language-independent design)

**Sub-skill:** count a specific character (spaces) to derive a higher-level count.
**Difficulty:** 3

## Statement (student-facing)
Read a non-empty line with exactly one space between each pair of words. Count the spaces by walking the
string character by character, then print the number of words (spaces + 1).

## I/O contract
- **Input:** one non-empty line with single-space-separated words.
- **Output:** one line, the word count.

## Why it resists a trivial answer
The count depends on the number of words. Cases vary it, including a single word (0 spaces, 1 word).

## Note
Contract: single spaces only, non-empty. One word has 0 spaces, so words = spaces + 1.
