# Problem 01, Count a character (language-independent design)

**Sub-skill:** count with a char equality test.
**Difficulty:** 1

## Statement (student-facing)
Read a line of text, then a single character (the first char of the second line). Print how many times that
character appears in the line.

## I/O contract
- **Input:** two lines: the text, then a line whose first character is the target.
- **Output:** one line, the count.

## Why it resists a trivial answer
The count depends on both inputs. Cases cover 0, 1, and several, plus an empty line.

## Note
Empty string gives count 0.
