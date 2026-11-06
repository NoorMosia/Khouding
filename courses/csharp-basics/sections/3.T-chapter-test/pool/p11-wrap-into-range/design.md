# Pool p11, Wrap into a range (family C, remainder)

**Integrates:** 3.3 (`value % size` wrap), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read a value and a size (each prompted on its own line, each a whole number). Print `value % size`, which
wraps the value into `0 .. size - 1`.

## I/O contract
- **Input:** two lines, each a whole number: value, then size.
- **Output:** the two prompts, then `value % size`.

## Why it resists a trivial answer
Cases cover a wrap, landing exactly on the size (`0`), already-in-range, and a clock-style wrap. Only the
remainder produces all four.
