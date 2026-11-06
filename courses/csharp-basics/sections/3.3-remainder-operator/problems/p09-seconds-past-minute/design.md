# Problem 09, Seconds past the minute (language-independent design)

**Sub-skill:** a realistic wrap, leftover units with `% 60`.
**Difficulty:** 2

## Statement (student-facing)
Read a total number of seconds. Print the leftover seconds past the last whole minute, which is
`seconds % 60`.

## I/O contract
- **Input:** one line, a whole number of seconds.
- **Output:** the prompt, then the leftover seconds on its own line.

## Why it resists a trivial answer
Cases cover a typical value (`125 % 60 = 5`), an exact minute (`60 % 60 = 0`), under a minute (`45 % 60 =
45`), and over an hour (`3661 % 60 = 1`). Only the remainder gives the leftover for all of them.
