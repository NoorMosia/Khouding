# Problem 11, Order line (language-independent design)

**Sub-skill:** compose a described sentence; holes appear in a different order than the inputs were read.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the item:` on its own line and read it. Prompt `Enter the quantity:` on its own line and read it
as a whole number. Using interpolation, print one line: `You ordered ` the quantity ` of ` the item. For item
`pens` and quantity `3` this reads `You ordered 3 of pens`.

## I/O contract
- **Input:** two lines: an item, then a whole number (the quantity).
- **Output:** the two prompts, then `You ordered <quantity> of <item>` on its own line.

## Why it resists a trivial answer
The quantity is read second but appears first in the sentence, so the holes are not in input order. Varied
inputs, including quantity zero and an item with a space, defeat a copied literal.
