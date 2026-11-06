# Problem 04, Ends with a suffix (language-independent design)

**Sub-skill:** `EndsWith`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then read a suffix. Print `True` if the line ends with the suffix, otherwise `False`.

## I/O contract
- **Input:** two lines: the text, then the suffix.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover a matching extension, a non-matching one, a case difference,
and the whole string as suffix, so a fixed answer fails.

## Note
`EndsWith` is case-sensitive here.
