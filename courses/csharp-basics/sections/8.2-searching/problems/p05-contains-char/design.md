# Problem 05, Contains a character (language-independent design)

**Sub-skill:** `Contains` with a `char`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a single character (the first character of the second line). Print `True` if
the line contains that character, otherwise `False`.

## I/O contract
- **Input:** two lines: the text, then a line whose first character is the one to look for.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover present, absent, and case difference, so a fixed answer fails.

## Note
Take the character as the first char of the second line (`line[0]`). `Contains` accepts a `char`.
