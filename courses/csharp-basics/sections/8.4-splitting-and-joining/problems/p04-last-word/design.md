# Problem 04, Last word (language-independent design)

**Sub-skill:** `parts[parts.Length - 1]`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of space-separated words. Print the last word.

## I/O contract
- **Input:** one line with at least one word.
- **Output:** one line, the last word.

## Why it resists a trivial answer
The last word varies with both the content and the count. Cases include a single-word line.

## Note
`parts[parts.Length - 1]` mirrors the Ch.7 last-element pattern.
