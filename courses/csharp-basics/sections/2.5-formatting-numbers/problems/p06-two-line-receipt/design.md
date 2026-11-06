# Problem 06, Two-line receipt (language-independent design)

**Sub-skill:** multiple formatted money lines, each labelled, each `:F2`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the item price:` on its own line and read it as a decimal number. Prompt `Enter the shipping:`
on its own line and read it as a decimal number. Print two labelled lines: `Item: ` then the item price to two
decimals, and `Shipping: ` then the shipping to two decimals.

## I/O contract
- **Input:** two lines, each a decimal number.
- **Output:** the two prompts, then the two labelled, formatted lines in order.

## Why it resists a trivial answer
Two varying amounts, each formatted to two decimals across two lines. Padding and zero cases mean the format
is required, and the fixed layout must match exactly.
