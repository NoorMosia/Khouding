# Problem 10, Occurs at the start (language-independent design)

**Sub-skill:** compare an `IndexOf` result to 0.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text, then read a substring. Print `True` if the substring occurs at the very start of the line
(its first occurrence is at index 0), otherwise `False`.

## I/O contract
- **Input:** two lines: the text, then the substring.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover a match at the start, a match later in the line (not at 0), and
absent, so a fixed answer fails. Absent gives `-1`, which is not `0`, so the result is `False`.

## Note
`s.IndexOf(part) == 0` is true only when the match is at the start. This behaves like `StartsWith`, and it
also correctly gives `False` when absent (because `-1 != 0`).
