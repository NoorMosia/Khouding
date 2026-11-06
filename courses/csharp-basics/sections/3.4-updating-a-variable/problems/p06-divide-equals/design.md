# Problem 06, Divide-equals (language-independent design)

**Sub-skill:** `/=` updates by division, and on whole numbers it truncates (callback to 3.2).
**Difficulty:** 2

## Statement (student-facing)
Read a value and a divisor (each prompted on its own line, each a whole number). Divide with `/=` and print
the result.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the result on its own line.

## Why it resists a trivial answer
Because both are `int`, `/=` truncates: `17 /= 5` gives `3`, and `3 /= 5` gives `0`. A student expecting a
decimal fails, reinforcing the integer-division rule from 3.2.
