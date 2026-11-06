# Problem 01, Price to two decimals (language-independent design)

**Sub-skill:** `:F2` basics, showing a double to two decimal places.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a price:` on its own line and read it as a decimal number. Print the price to exactly two
decimal places using `:F2`.

## I/O contract
- **Input:** one line holding a decimal number.
- **Output:** the prompt, then the price to two decimal places on its own line.

## Why it resists a trivial answer
The cases include one that pads (`7.5` to `7.50`), a whole value (`10` to `10.00`), and zero (`0.00`). Only
`:F2` formatting produces all of them; a raw print or a copied literal fails.
