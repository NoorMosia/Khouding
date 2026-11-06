# Problem 07, Rate to two decimals (language-independent design)

**Sub-skill:** `:F2` in a non-money context, reinforcing that formatting is general.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the rate:` on its own line and read it as a decimal number. Print `Rate: ` followed by the rate
to two decimal places.

## I/O contract
- **Input:** one line holding a decimal number (the rate).
- **Output:** the prompt, then `Rate: <rate to 2 decimals>` on its own line.

## Why it resists a trivial answer
Same `:F2` skill in a different setting. The padding cases (`1.5` to `1.50`, `0.1` to `0.10`, `3` to `3.00`)
require the format.
