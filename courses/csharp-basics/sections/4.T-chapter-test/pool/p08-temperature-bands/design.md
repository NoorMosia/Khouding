# Pool p08, Temperature bands (family B, if / else / else if)

**Integrates:** 4.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a temperature:` on its own line and read a whole number. Print `cold` when it is below 10,
`warm` when it is 10 to 24, and `hot` when it is 25 or more.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `cold`, `warm`, `hot`.

## Why it resists a trivial answer
Three bands with boundaries at 10 and 25. Cases hit every band and both boundary values, so a wrong order or a
mis-placed bound misclassifies.
