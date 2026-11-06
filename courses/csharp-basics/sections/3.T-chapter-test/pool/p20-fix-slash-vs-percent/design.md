# Pool p20, Fix slash versus percent (family E, fix the broken program)

**Integrates:** 3.3 (`%` vs `/`), debug.
**Difficulty:** 2

## Statement (student-facing)
This program should print how many items are LEFT OVER after making full groups, which is the remainder. It
uses `/` (the number of groups) instead of `%`. Change `/` to `%`.

## The planted bug
`total / groupSize` is the group count, not the leftover. It compiles and runs, answering the wrong question.
The fix is `total % groupSize`.

## Why it resists a trivial answer
No compiler message; the group count and the leftover differ on every varied case, so only `%` passes.
