# Problem 03, Starts with a prefix (language-independent design)

**Sub-skill:** `StartsWith`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a prefix. Print `True` if the line starts with the prefix, otherwise `False`.

## I/O contract
- **Input:** two lines: the text, then the prefix.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover a match, a mismatch, a case difference, and the whole string as
prefix, so a fixed answer fails.

## Note
`StartsWith` is case-sensitive here.
