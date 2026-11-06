# Problem 02, Pad to two decimals (language-independent design)

**Sub-skill:** `:F2` padding, adding trailing zeros so the output always has two decimals.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a value:` on its own line and read it as a decimal number. Print the value to exactly two
decimal places using `:F2`. A value like `7.5` must show as `7.50`, and `3` must show as `3.00`.

## I/O contract
- **Input:** one line holding a decimal number.
- **Output:** the prompt, then the value to two decimal places on its own line.

## Why it resists a trivial answer
Every case needs a trailing zero added, which only the format produces. Printing the raw parsed value would
give `7.5` or `3`, not `7.50` or `3.00`.
