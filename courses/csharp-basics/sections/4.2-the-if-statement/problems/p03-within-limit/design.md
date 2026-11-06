# Problem 03, Within the limit (language-independent design)

**Sub-skill:** one-way `if` with `<=`, boundary included.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the temperature:` on its own line and read it. If the temperature is at or below 0, print
`freezing`. Zero counts as freezing.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `freezing` only when `temp <= 0`.

## Why it resists a trivial answer
The exact-0 case runs (`<=` includes the boundary), and `1` skips. A student who used `<` would wrongly skip
0. The negative, zero, just-above, and well-above cases pin the guard.
