# Problem 04, Sum until quit (language-independent design)

**Sub-skill:** a `do-while` sentinel loop that accumulates a sum.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, -1 to stop:` on its own line. Using a `do-while`, read a whole number each pass, add it
to a running total unless it is `-1`, and repeat while the value read is not `-1`. Print the total. The `-1`
is not added.

## I/O contract
- **Input:** whole numbers, one per line, ending with `-1`.
- **Output:** the prompt, then the total on one line.

## Why it resists a trivial answer
The quit value is `-1`, so `0` is valid data to add. The read happens in the body (guaranteed once), and the
`-1` must be excluded from the sum. Cases include a `-1`-first input (total `0`), a run of zeros, and a
negative value, so the guard and the sentinel handling must both be right.
