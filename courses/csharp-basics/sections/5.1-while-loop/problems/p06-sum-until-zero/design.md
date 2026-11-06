# Problem 06, Sum until zero (language-independent design)

**Sub-skill:** the sentinel pattern, read until a stop value.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, 0 to stop:` on its own line. Read whole numbers one per line until a `0` is read. Print
the sum of the values read before the `0`. The `0` is not part of the sum. If the first value is `0`, print
`0`.

## I/O contract
- **Input:** whole numbers, one per line, ending with a `0`.
- **Output:** the prompt, then the sum on one line.

## Why it resists a trivial answer
The count is not known in advance; the loop stops on the sentinel. Cases include a `0`-first (zero iterations)
and negatives before the sentinel, so reading one value before the loop and the next at the end, with the
sentinel excluded, is required.
