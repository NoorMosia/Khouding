# Problem 08, Groups and leftover (language-independent design)

**Sub-skill:** `/` and `%` together, the whole groups and what is left over.
**Difficulty:** 2

## Statement (student-facing)
Read a total and a group size (each prompted on its own line, each a whole number). Print two lines: how many
full groups (`total / groupSize`), then how many are left over (`total % groupSize`).

## I/O contract
- **Input:** two lines, each a whole number: total, then group size.
- **Output:** the two prompts, then the number of full groups, then the leftover, each on its own line.

## Why it resists a trivial answer
`/` and `%` are the two halves of the same division: `17 / 5 = 3` groups with `17 % 5 = 2` left over. Cases
include an exact divide (leftover `0`) and a total smaller than one group (`0` groups, all left over), so both
lines must be computed.
