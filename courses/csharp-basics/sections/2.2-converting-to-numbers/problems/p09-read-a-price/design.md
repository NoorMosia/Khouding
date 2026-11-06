# Problem 09, Read a price (language-independent design)

**Sub-skill:** `double.Parse` in a realistic setting; decimals survive the round trip.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter the price:` on its own line and read it. Print the price.

## I/O contract
- **Input:** one line holding a decimal number (the price).
- **Output:** the prompt, then the price on its own line.

## Why it resists a trivial answer
The price varies per case. Reading it as a `double` keeps the decimal part, which a whole-number parse would
drop. The echo proves the decimal survived.
