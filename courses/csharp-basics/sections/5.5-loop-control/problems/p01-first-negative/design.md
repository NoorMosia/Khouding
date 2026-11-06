# Problem 01, First negative (language-independent design)

**Sub-skill:** `break` to stop at the first match.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Then read `n` more whole numbers, one per
line. Print the first one that is negative and stop looking (use `break`). If none of them is negative, print
`none`.

## I/O contract
- **Input:** the first line is the count `n`; then `n` lines, each a whole number.
- **Output:** the prompt, then the first negative value, or `none`.

## Why it resists a trivial answer
Cases put the first negative on the first pass, on a later pass, and nowhere (the `none` case), so a solution
must actually find the first match and handle "never found". Track whether a match was found with a flag so
`none` prints only when appropriate.

## Note
It is fine to stop reading once the match is found; the remaining input is simply not read.
