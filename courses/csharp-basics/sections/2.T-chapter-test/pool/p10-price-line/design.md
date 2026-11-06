# Pool p10, Price line (family C, money / formatting)

**Integrates:** 2.2 (parse), 2.5 (`:F2` money).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the price:` on its own line and read it as a decimal number. Print `Price: ` followed by the
price to two decimal places.

## I/O contract
- **Input:** one line holding a decimal number.
- **Output:** the prompt, then `Price: <price to 2 decimals>` on its own line.

## Why it resists a trivial answer
Padding cases (`7.5` to `7.50`, `100` to `100.00`) require the `:F2` format. No currency symbol, so the output
is deterministic under invariant culture.
