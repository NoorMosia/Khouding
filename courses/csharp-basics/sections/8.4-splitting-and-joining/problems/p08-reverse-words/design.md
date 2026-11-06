# Problem 08, Reverse word order (language-independent design)

**Sub-skill:** loop the `string[]` backwards (Ch.7 reverse walk).
**Difficulty:** 2

## Statement (student-facing)
Read a line of space-separated words. Print the words in reverse order, one per line.

## I/O contract
- **Input:** one line with space-separated words.
- **Output:** the words last to first, one per line.

## Why it resists a trivial answer
The output order depends on the input order and count. Cases vary both, including a single word.

## Note
Split into a `string[]`, then index down from `Length - 1` (Ch.7 reverse pattern).
