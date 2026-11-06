# Problem 12, Receipt (language-independent design)

**Sub-skill:** integrative capstone; read, parse, compute, and print a multi-line interpolated report.
**Difficulty:** 3

## Statement (student-facing)
Read an item, a quantity, and a unit price (each prompted on its own line; the quantity and unit price are
whole numbers). Using interpolation, print three lines: `Item: <item>`, then `Quantity: <quantity>`, then
`Total: <total>`, where the total is the quantity multiplied by the unit price.

## I/O contract
- **Input:** three lines: an item, a whole number (quantity), then a whole number (unit price).
- **Output:** the three prompts, then the three labelled lines, with the total computed in the last hole.

## Why it resists a trivial answer
Three varying inputs, a computed total in an expression hole, and a fixed multi-line layout. The quantity-zero
case makes the total zero, so a copied literal cannot pass. Unit prices are whole numbers so the total prints
cleanly (decimal formatting is a later section).
