# Problem 08, Model the scenario (language-independent design)

**Sub-skill:** integrative Chapter 1 close: right types, good names, clean layout, print to spec.
**Difficulty:** 2

## Statement (student-facing)
A small order has a product name, a quantity, and a unit price. Read the product name on the first line,
the quantity on the second line (a whole number), and the unit price on the third line (which may be
fractional). Choose the right type for each, give them clear names, and lay the code out cleanly. Print the
product name, then the total (quantity times unit price), each on its own line.

## I/O contract
- **Input:** three lines: product name, quantity, unit price.
- **Output:** two lines: the product name, then the total (`quantity * unitPrice`).

## Why it resists a trivial answer
Pulls Chapter 1 together: a `string` name, an `int` quantity, a `double` price, and a `*` to combine them,
all with clear names and clean layout. Varied inputs (including a zero quantity) only pass if the types are
chosen and the arithmetic is done correctly.
