# Problem 01, Contains a substring (language-independent design)

**Sub-skill:** `Contains`.
**Difficulty:** 1

## Statement (student-facing)
Read a line of text, then read a substring. Print `True` if the line contains the substring, otherwise
`False`.

## I/O contract
- **Input:** two lines: the text, then the substring to look for.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover present, absent, a case difference, and a mid-string match, so
a fixed answer fails.

## Note
`Contains` is case-sensitive here.
