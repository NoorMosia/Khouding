# Pool p15, First match (family E, loop control)

**Integrates:** 5.5.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers. Print
the first one that is greater than 100 and stop looking (use `break`). If none is greater than 100, print
`none`.

## I/O contract
- **Input:** the count `n`, then `n` whole numbers.
- **Output:** the prompt, then the first match, or `none`.

## Why it resists a trivial answer
Cases put the match first, later, and nowhere (`none`), so a flag plus `break` on the first match is required.
