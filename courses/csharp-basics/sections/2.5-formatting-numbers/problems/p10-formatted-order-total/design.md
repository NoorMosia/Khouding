# Problem 10, Formatted order total (language-independent design)

**Sub-skill:** integrative capstone; read, compute with `* -`, format the money result with `:F2`.
**Difficulty:** 3

## Statement (student-facing)
Read a quantity (whole number), a unit price (decimal), and a discount (decimal), each prompted on its own
line. Compute the total as the quantity multiplied by the unit price, minus the discount. Print `Total: `
followed by the total to two decimal places.

## I/O contract
- **Input:** three lines: a whole number (quantity), a decimal (unit price), then a decimal (discount).
- **Output:** the three prompts, then `Total: <total to 2 decimals>` on its own line.

## Why it resists a trivial answer
Three varying inputs of two types, combined with a multiply and a subtract, then formatted. The no-discount
case still has to compute correctly. Values are chosen so the formatted total is clean and obvious
(`20.00`, `12.00`, `8.50`, `49.95`), verified via the oracle under invariant culture.
