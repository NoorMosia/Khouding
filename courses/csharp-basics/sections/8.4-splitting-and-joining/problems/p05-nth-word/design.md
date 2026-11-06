# Problem 05, Nth word (language-independent design)

**Sub-skill:** index a piece from the `string[]`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of space-separated words, then read an index (0-based, within the word count). Print the word at
that index.

## I/O contract
- **Input:** two lines: the words, then a 0-based index.
- **Output:** one line, the word at that index.

## Why it resists a trivial answer
The output depends on both inputs. Cases vary the index (first, last, middle), so a fixed answer fails.

## Note
The index is always valid (0 to word count minus 1); stay in bounds.
