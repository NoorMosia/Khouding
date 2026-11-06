# Problem 08, Last characters equal (language-independent design)

**Sub-skill:** compare the last char of each of two strings.
**Difficulty:** 2

## Statement (student-facing)
Read two lines of text. Print `True` if their last characters are equal, otherwise `False`.

## I/O contract
- **Input:** two non-empty lines.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs and their lengths. Cases vary match, mismatch, and differing lengths, so a
fixed answer fails.

## Note
Each last character is at its own `Length - 1`; the two strings may differ in length.
