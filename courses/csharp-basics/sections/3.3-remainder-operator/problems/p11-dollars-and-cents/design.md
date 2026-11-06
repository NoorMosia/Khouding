# Problem 11, Dollars and cents (language-independent design)

**Sub-skill:** integrative capstone; split a count into whole units and leftover with `/` and `%`.
**Difficulty:** 3

## Statement (student-facing)
An amount is given as a whole number of cents. Read the cents and print two lines: the number of whole units
(`cents / 100`), then the leftover cents (`cents % 100`).

## I/O contract
- **Input:** one line, a whole number of cents.
- **Output:** the prompt, then the whole units, then the leftover cents, each on its own line.

## Why it resists a trivial answer
The two lines are the quotient and the remainder of the same division: `250` cents is `2` units and `50`
leftover. Cases include an exact multiple of `100` (leftover `0`) and an amount under `100` (`0` units, all
leftover), so both lines must be computed from the input.
