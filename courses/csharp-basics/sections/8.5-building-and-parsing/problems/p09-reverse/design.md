# Problem 09, Reverse by building (language-independent design)

**Sub-skill:** build a reversed string by walking the index backward.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text. Print the characters in reverse order.

## I/O contract
- **Input:** one line.
- **Output:** one line, the reversed string.

## Why it resists a trivial answer
Cases vary content and length, including single char and empty.

## Note
Walk `for (int i = s.Length - 1; i >= 0; i--)` and concatenate `s[i]` into `result`. Empty gives empty line.
