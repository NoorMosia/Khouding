# Problem 12, Classify into four bands (language-independent design)

**Sub-skill:** write a clean four-way `else if` chain from scratch.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter the water level:` on its own line and read it (a whole number of centimetres). Print the band:
`empty` below 20, `low` for 20 to 59, `ok` for 60 to 89, `full` for 90 or more.

## I/O contract
- **Input:** one line, a whole number (the level).
- **Output:** the prompt, then one of `empty`, `low`, `ok`, `full`.

## Why it resists a trivial answer
Four bands need a three-test chain plus a final branch, and the boundaries (`20`, `60`, `90`) each belong to
the higher band. Cases land in every band and sit on each boundary, so an off-by-one comparison (`>` instead
of `>=`, or a wrong threshold) fails. There is no single comparison that covers it.
