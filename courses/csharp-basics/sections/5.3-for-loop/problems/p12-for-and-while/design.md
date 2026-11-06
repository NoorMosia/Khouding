# Problem 12, for and while agree (language-independent design)

**Sub-skill:** show a `for` and its equivalent `while` produce the same output.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print 1 to `n` (one per line) using a
`for` loop. Then print a line with exactly `---`. Then print 1 to `n` again (one per line) using a `while`
loop. If `n` is 0 or less, the two number blocks are empty and only the `---` line appears between them.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then 1 to `n` (for loop), then `---`, then 1 to `n` (while loop).

## Why it resists a trivial answer
Both loops must produce identical number blocks, which only holds if the `while` is written as the true
equivalent of the `for` (same init, condition, update). Cases include `n = 0` (both blocks empty, only `---`)
and several counts, so a mismatched pair of loops fails.
