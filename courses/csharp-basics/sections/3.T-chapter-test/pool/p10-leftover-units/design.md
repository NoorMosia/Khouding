# Pool p10, Leftover units (family C, remainder)

**Integrates:** 3.3 (a realistic wrap with `% 60`), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read a total number of seconds. Print the leftover seconds past the last whole minute, `seconds % 60`.

## I/O contract
- **Input:** one line, a whole number of seconds.
- **Output:** the prompt, then the leftover seconds.

## Why it resists a trivial answer
Cases cover a typical value, an exact minute (`0`), under a minute (the value itself), and over an hour. Only
the remainder gives the leftover for all.
