# Pool p04, Over threshold (family B, if / else / else if)

**Integrates:** 4.2.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a temperature:` on its own line and read a whole number. Print `alert` only when it is above 30.
Print nothing otherwise.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `alert` or no further output.

## Why it resists a trivial answer
A one-way guard: cases straddle the threshold (35 and 31 trigger, 30 and 10 do not), so printing
unconditionally or using the wrong comparison fails.
