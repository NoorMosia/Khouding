# Problem 07, Keep only the letters (language-independent design)

**Sub-skill:** filter-build: keep matching characters.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print a new string containing only its letter characters (all non-letter characters
removed), in their original order.

## I/O contract
- **Input:** one line.
- **Output:** one line, only the letters (empty line if none).

## Why it resists a trivial answer
Cases vary: mixed, all-letter, no-letter, empty.

## Note
Start `result = ""`; append each `char.IsLetter(c)` character. Empty input or no letters gives an empty line.
