# Problem 09, Character then length (language-independent design)

**Sub-skill:** use one string two ways (index and length).
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read an index (between 0 and the length minus 1). Print the character at that index,
then print the string's length, each on its own line.

## I/O contract
- **Input:** two lines: the text, then an index.
- **Output:** two lines: the character at the index, then the length.

## Why it resists a trivial answer
Both outputs depend on the input. Cases vary the text and the index, so fixed output fails.

## Note
Stay in bounds: the index is always `0 .. s.Length - 1`.
