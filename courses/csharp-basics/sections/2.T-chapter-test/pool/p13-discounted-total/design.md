# Pool p13, Discounted total (family C, money / formatting)

**Integrates:** 2.2 (parse + compute, mixed types), 2.5 (`:F2` money), `* -` arithmetic.
**Difficulty:** 3

## Statement (student-facing)
Read a quantity (whole number), a unit price (decimal), and a discount (decimal), each prompted on its own
line. Compute the total as quantity multiplied by unit price, minus the discount. Print `Total: ` followed by
the total to two decimal places.

## I/O contract
- **Input:** three lines: a whole number (quantity), a decimal (unit price), then a decimal (discount).
- **Output:** the three prompts, then `Total: <total to 2 decimals>` on its own line.

## Why it resists a trivial answer
Three varying inputs of two types, combined with a multiply and a subtract, then formatted. The no-discount
case still has to compute correctly. Values are chosen so the formatted total is clean and obvious, verified
via the oracle under invariant culture.
