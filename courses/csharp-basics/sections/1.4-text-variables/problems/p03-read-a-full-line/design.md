# Problem 03, Read a full line (language-independent design)

**Sub-skill:** a `string` holds a whole sequence, including spaces.
**Difficulty:** 1

## Statement (student-facing)
Read a full line of text (it may contain spaces) into a `string`, and print it on its own line.

## I/O contract
- **Input:** one line, which may contain spaces.
- **Output:** that line, unchanged.

## Why it resists a trivial answer
Cases include multi-word lines, so a program that only captured a single word would fail. Reading the whole
line into a `string` is the point: a `string` is a sequence of characters, not just one.
