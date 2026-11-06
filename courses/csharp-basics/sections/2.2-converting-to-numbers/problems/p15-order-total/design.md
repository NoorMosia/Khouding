# Problem 15, Order total (language-independent design)

**Sub-skill:** integrative capstone; read and parse several values, compute with `*` and `-`, print.
**Difficulty:** 3

## Statement (student-facing)
Compute the total for an order after a discount. Prompt `Enter the quantity:` on its own line and read it as a
whole number. Prompt `Enter the unit price:` on its own line and read it as a decimal number. Prompt
`Enter the discount:` on its own line and read it as a decimal number. Print the total, which is the quantity
multiplied by the unit price, minus the discount.

## I/O contract
- **Input:** three lines: a whole number (quantity), then a decimal (unit price), then a decimal (discount).
- **Output:** the three prompts, then the total on its own line.

## Why it resists a trivial answer
Three inputs of two different types, read in order, combined with a multiply and a subtract. The no-discount
case sets the discount to zero so the structure still has to be right. Values are chosen so the total prints
cleanly.
