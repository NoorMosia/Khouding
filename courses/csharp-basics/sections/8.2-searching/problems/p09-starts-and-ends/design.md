# Problem 09, Starts and ends (language-independent design)

**Sub-skill:** combine `StartsWith` and `EndsWith` with `&&`.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text, then a prefix, then a suffix. Print `True` if the line both starts with the prefix and
ends with the suffix, otherwise `False`.

## I/O contract
- **Input:** three lines: the text, the prefix, the suffix.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on all three inputs. Cases cover both conditions true, only one true, and neither, so a
fixed answer fails.

## Note
Combine the two queries with `&&`.
