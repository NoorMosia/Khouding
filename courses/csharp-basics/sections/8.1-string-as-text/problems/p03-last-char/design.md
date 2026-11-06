# Problem 03, Last character (language-independent design)

**Sub-skill:** `s[s.Length - 1]`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print its last character.

## I/O contract
- **Input:** one non-empty line.
- **Output:** one line, the last character.

## Why it resists a trivial answer
The last character depends on the input and its length. Cases vary both, including a single character, so a
fixed letter fails. Using `s.Length - 1` (not a literal index) is the point.

## Note
The last index is `s.Length - 1`, not `s.Length`.
