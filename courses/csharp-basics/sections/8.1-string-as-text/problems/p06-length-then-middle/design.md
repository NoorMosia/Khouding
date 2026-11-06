# Problem 06, Length then middle character (language-independent design)

**Sub-skill:** a computed index, `s[s.Length / 2]`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print its length, then print the character at the middle index, which is the length
divided by 2 (integer division). Print the two values on their own lines.

## I/O contract
- **Input:** one non-empty line.
- **Output:** two lines: the length, then the character at index `s.Length / 2`.

## Why it resists a trivial answer
Both outputs depend on the input. Cases vary content and length (odd and even), so fixed output fails.

## Note
`s.Length / 2` is integer division, so it is always a valid index for a non-empty string. For "hello" (length
5) that is index 2.
