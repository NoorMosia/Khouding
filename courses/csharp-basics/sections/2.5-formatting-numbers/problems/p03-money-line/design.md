# Problem 03, Money line (language-independent design)

**Sub-skill:** present money as a label plus a `:F2` amount.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the price:` on its own line and read it as a decimal number. Print `Price: ` followed by the
price to two decimal places.

## I/O contract
- **Input:** one line holding a decimal number (the price).
- **Output:** the prompt, then `Price: <price to 2 decimals>` on its own line.

## Why it resists a trivial answer
The label is literal text joined with a formatted value. The padding cases (`7.5` to `7.50`, `100` to
`100.00`) mean only the `:F2` format passes. No currency symbol is involved, so the output is deterministic.
