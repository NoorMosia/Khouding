# Problem 06, Wrap into a range (language-independent design)

**Sub-skill:** `value % size` wraps a value into `0 .. size - 1`.
**Difficulty:** 2

## Statement (student-facing)
Read a value and a size (each prompted on its own line, each a whole number). Print `value % size`, which
wraps the value into the range `0` to `size - 1`.

## I/O contract
- **Input:** two lines, each a whole number: value, then size.
- **Output:** the two prompts, then `value % size` on its own line.

## Why it resists a trivial answer
Cases cover a wrap (`7 % 3 = 1`), landing exactly on the size (`3 % 3 = 0`), a value already in range
(`2 % 5 = 2`), and a clock-style wrap (`14 % 12 = 2`). Only the remainder produces all four.
