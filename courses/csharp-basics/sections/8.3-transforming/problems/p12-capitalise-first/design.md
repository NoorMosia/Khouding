# Problem 12, Capitalise the first letter (language-independent design)

**Sub-skill:** combine `char.ToUpper(s[0])` with `Substring(1)`.
**Difficulty:** 3

## Statement (student-facing)
Read a line of text. Print it with only the first character upper-cased and the rest unchanged.

## I/O contract
- **Input:** one non-empty line.
- **Output:** one line, first character upper-cased, rest unchanged.

## Why it resists a trivial answer
Cases vary the first character and the rest. A single character gives just the upper version.

## Note
`char.ToUpper(s[0]) + s.Substring(1)` combines the upper first char (a `char`) with the rest (a `string`).
For a single character, `Substring(1)` is an empty string.
