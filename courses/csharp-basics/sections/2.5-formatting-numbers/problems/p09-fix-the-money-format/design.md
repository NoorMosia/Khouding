# Problem 09, Fix the money format (language-independent design)

**Sub-skill:** debug a missing format; money printed as a raw double.
**Difficulty:** 2

## Statement (student-facing)
This program should print a price to two decimal places, but it prints the raw value, so `7.5` shows as `7.5`
and `10` shows as `10`. Add `:F2` to the interpolation hole so the price always shows two decimals.

## I/O contract
- **Input:** one line holding a decimal number (the price).
- **Output:** the prompt, then `Price: <price to 2 decimals>` on its own line.

## The planted bug
The hole is `{price}` with no format, so the double prints with its natural digits (`7.5`, `10`), which is
wrong for money. The fix is `{price:F2}`.

## Why it resists a trivial answer
The starter fails the padding cases (`7.5`, `10`, `0`). Only adding `:F2` produces `7.50`, `10.00`, `0.00`,
matching the expected money shape across all varied inputs.
