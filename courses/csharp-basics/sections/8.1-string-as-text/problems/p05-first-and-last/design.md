# Problem 05, First and last (language-independent design)

**Sub-skill:** `s[0]` and `s[s.Length - 1]` together.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print its first character, then its last character, each on its own line.

## I/O contract
- **Input:** one non-empty line.
- **Output:** two lines: first character, then last character.

## Why it resists a trivial answer
Both characters depend on the input. Cases vary them, including a single-character line (where first and last
are the same), so fixed output fails.

## Note
For a one-character line, `s[0]` and `s[s.Length - 1]` are the same character.
