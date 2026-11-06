# Problem 07, Last N characters (language-independent design)

**Sub-skill:** `Substring(s.Length - n)` to reach the tail.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text, then a count `n` (between 1 and the line's length). Print the last `n` characters.

## I/O contract
- **Input:** two lines: the text, then `n`.
- **Output:** one line, the last `n` characters.

## Why it resists a trivial answer
The output depends on both text and `n`. Cases vary `n`, including 1 and the full length, so a fixed answer
fails. `n` is always `1 .. s.Length`.

## Note
`Substring(s.Length - n)` starts `n` characters from the end and goes to the end.
