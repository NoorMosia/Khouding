# Problem 05, All digits (language-independent design)

**Sub-skill:** validate all with `char.IsDigit`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print `True` if every character is a digit (0-9), otherwise `False`.

## I/O contract
- **Input:** one line.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
Cases vary: all-digit (True), mixed (False), no-digit (False), empty string (True by convention: no char fails).

## Note
Start `allDigits = true`; set to `false` on the first non-digit. Empty gives `True`.
