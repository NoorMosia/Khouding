# Problem 15, Model the scenario (language-independent design)

**Sub-skill:** integrative: choose types, declare, use a `const`, combine with `+` and `*`, print to spec.
**Difficulty:** 3

## Statement (student-facing)
An online shop charges a flat delivery fee of 5 on every order. Read the quantity of items (a whole number)
on the first line, then the unit price (which may have a decimal part) on the second line.

Print two lines:
1. the subtotal: quantity times unit price
2. the total: subtotal plus the delivery fee

Use a `const` for the delivery fee.

## I/O contract
- **Input:** two lines: a whole-number quantity, then a (possibly fractional) unit price.
- **Output:** two lines: subtotal, then total (subtotal + 5).

## Why it resists a trivial answer
This pulls the whole section together: an `int` quantity, a `double` price, a named `const` fee, and both
`*` and `+`. Varied cases (including a zero quantity, where the subtotal is 0 and the total is just the fee)
only pass if the program models and computes it correctly.
