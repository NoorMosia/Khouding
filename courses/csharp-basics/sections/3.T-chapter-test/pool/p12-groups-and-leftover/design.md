# Pool p12, Groups and leftover (family C, remainder)

**Integrates:** 3.3 (`/` and `%` together), 2.1/2.2.
**Difficulty:** 2

## Statement (student-facing)
Read a total and a group size (each prompted on its own line, each a whole number). Print two lines: the
number of full groups (`total / groupSize`), then how many are left over (`total % groupSize`).

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the full groups, then the leftover, each on its own line.

## Why it resists a trivial answer
`/` and `%` are the two halves of the same division. Cases include an exact divide (leftover `0`) and a total
smaller than one group (`0` groups, all left over), so both lines must be computed.
