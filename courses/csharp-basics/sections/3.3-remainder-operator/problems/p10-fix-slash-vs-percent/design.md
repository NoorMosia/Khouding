# Problem 10, Fix slash versus percent (language-independent design)

**Sub-skill:** debug a `/`-where-`%`-was-meant mistake.
**Difficulty:** 2

## Statement (student-facing)
This program should print how many items are left over after making full groups, which is the remainder. It
uses `/` (the number of groups) instead of `%` (the leftover), so it prints the wrong number. Change `/` to
`%`.

## I/O contract
- **Input:** two lines, each a whole number: total, then group size.
- **Output:** the two prompts, then the leftover (`total % groupSize`) on its own line.

## The planted bug
`total / groupSize` is the count of full groups, not the leftover. The program compiles and runs; it just
answers the wrong question. The fix is `total % groupSize`.

## Why it resists a trivial answer
There is no compiler message; the starter silently prints the group count. The varied inputs make the group
count and the leftover differ on every case, so only `%` passes.
