# Problem 03, First word (language-independent design)

**Sub-skill:** `parts[0]`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of space-separated words. Print the first word.

## I/O contract
- **Input:** one line with at least one word.
- **Output:** one line, the first word.

## Why it resists a trivial answer
The first word varies. Cases include a single-word line.

## Note
`s.Split(' ')[0]`.
