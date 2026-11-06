# Problem 07, Count until sentinel (language-independent design)

**Sub-skill:** the sentinel pattern counting values, with a non-zero sentinel.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, -1 to stop:` on its own line. Read whole numbers one per line until `-1` is read. Print
how many values were read before the `-1`. The `-1` is not counted. If the first value is `-1`, print `0`.

## I/O contract
- **Input:** whole numbers, one per line, ending with `-1`.
- **Output:** the prompt, then the count on one line.

## Why it resists a trivial answer
The sentinel is `-1`, so `0` is valid data that must be counted. Cases include a `-1`-first (zero iterations)
and a run of zeros, so a solution that stops on `0` or miscounts the sentinel fails.
