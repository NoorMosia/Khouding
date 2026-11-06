# Problem 04, Total to two decimals (language-independent design)

**Sub-skill:** compute a total, then format it with `:F2`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the count:` on its own line and read it as a whole number. Prompt `Enter the unit price:` on its
own line and read it as a decimal number. Compute the total (count multiplied by unit price) and print
`Total: ` followed by the total to two decimal places.

## I/O contract
- **Input:** two lines: a whole number (count), then a decimal number (unit price).
- **Output:** the two prompts, then `Total: <total to 2 decimals>` on its own line.

## Why it resists a trivial answer
The total is computed from two varying inputs of different types, then formatted. The count-zero case gives
`0.00`, and padding cases like `3 * 2.5 = 7.50` require the format. Values are picked so the formatted total is
obvious.
