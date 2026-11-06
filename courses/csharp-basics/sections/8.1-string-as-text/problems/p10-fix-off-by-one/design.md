# Problem 10, Fix the off-by-one (language-independent design)

**Sub-skill:** the last index is `Length - 1`, not `Length`.
**Difficulty:** 2

## Statement (student-facing)
The program reads a line and should print its last character. It crashes instead. Fix it so it prints the last
character.

## I/O contract
- **Input:** one non-empty line.
- **Output:** one line, the last character.

## Why it resists a trivial answer
The last character depends on the input. Cases vary it, so a fixed answer fails. The bug is `s[s.Length]` (out
of range); the fix is `s[s.Length - 1]`.

## Note
`s[s.Length]` throws `IndexOutOfRangeException` at runtime because the last valid index is `s.Length - 1`. The
committed solution stays in bounds.
