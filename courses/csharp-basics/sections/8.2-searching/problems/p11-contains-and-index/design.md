# Problem 11, Contains and index (language-independent design)

**Sub-skill:** `Contains` and `IndexOf` together on two output lines.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text, then read a word. Print two lines: whether the line contains the word (`True` or
`False`), then the index of its first occurrence (or `-1` if absent).

## I/O contract
- **Input:** two lines: the text, then the word.
- **Output:** two lines: contains result, then index or `-1`.

## Why it resists a trivial answer
Both outputs depend on the inputs. Cases cover present, absent, and a match at index 0, so fixed output fails.

## Note
When absent, `Contains` gives `False` and `IndexOf` gives `-1`.
