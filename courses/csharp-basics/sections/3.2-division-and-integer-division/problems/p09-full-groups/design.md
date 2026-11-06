# Problem 09, Full groups (language-independent design)

**Sub-skill:** integer division is the *correct* tool when you want whole groups.
**Difficulty:** 2

## Statement (student-facing)
Read a number of items and a group size (each prompted on its own line, each a whole number). Print how many
full groups you can make. Leftover items that do not fill a group do not count.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the number of full groups on its own line.

## Why it resists a trivial answer
Here the truncation is the intended behavior: `17 / 5 = 3` full groups (the 2 leftover items do not make a
fourth). This shows integer division is not always a bug; sometimes it is exactly what you want. Varied inputs
rule out a constant.
