# Problem 09, Trim then upper (language-independent design)

**Sub-skill:** chaining two transforms.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Trim the leading and trailing whitespace, then upper-case the trimmed result. Print the
final string.

## I/O contract
- **Input:** one line (may have leading and/or trailing spaces).
- **Output:** one line, trimmed and upper-cased.

## Why it resists a trivial answer
The output depends on the spaces and the case of the input. Cases vary both, so a fixed answer fails.

## Note
`s.Trim().ToUpper()` chains: `Trim` returns a new trimmed string, `ToUpper` runs on that.
