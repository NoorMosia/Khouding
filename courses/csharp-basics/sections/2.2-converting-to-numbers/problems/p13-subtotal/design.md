# Problem 13, Subtotal (language-independent design)

**Sub-skill:** realistic mixed-type compute; quantity (int) times unit price (double).
**Difficulty:** 2

## Statement (student-facing)
A shop needs a line-item subtotal. Prompt `Enter the quantity:` on its own line and read it as a whole number.
Prompt `Enter the unit price:` on its own line and read it as a decimal number. Print the subtotal, which is
the quantity multiplied by the unit price.

## I/O contract
- **Input:** two lines: a whole number (quantity), then a decimal number (unit price).
- **Output:** the two prompts, then the subtotal on its own line.

## Why it resists a trivial answer
Both inputs vary and have different types. The quantity-zero case lands on zero. Values are chosen so the
subtotal prints cleanly.
