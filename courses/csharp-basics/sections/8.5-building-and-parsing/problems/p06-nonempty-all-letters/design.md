# Problem 06, Non-empty and all letters (language-independent design)

**Sub-skill:** combine a length guard with all-character validation.
**Difficulty:** 2

## Statement (student-facing)
Read a line. Print `True` if the line is non-empty and every character is a letter, otherwise `False`.

## I/O contract
- **Input:** one line.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
Cases vary: all-letter (True), mixed (False), empty (False, because of the non-empty guard).

## Note
Check `s.Length > 0` first; then validate all letters. An empty string is `False` here (not `True`), because
the non-empty condition fails.
