# Problem 08, Keep only the digits (language-independent design)

**Sub-skill:** filter-build with `char.IsDigit`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print a new string containing only its digit characters, in their original order.

## I/O contract
- **Input:** one line.
- **Output:** one line, only the digits (empty line if none).

## Why it resists a trivial answer
Cases vary: mixed, all-digit, no-digit, empty.

## Note
Start `result = ""`; append each `char.IsDigit(c)` character.
