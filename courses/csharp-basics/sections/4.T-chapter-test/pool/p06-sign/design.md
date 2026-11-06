# Pool p06, Sign (family B, if / else / else if)

**Integrates:** 4.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. Print `positive` if it is above 0,
`negative` if it is below 0, and `zero` if it is 0.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `positive`, `negative`, `zero`.

## Why it resists a trivial answer
Three branches with the zero catch-all. Cases reach each branch plus both sides of 0, so a missing branch or
a mis-handled zero fails.
