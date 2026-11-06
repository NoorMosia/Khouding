# Pool p09, Product 1 to n (family C, for)

**Integrates:** 5.3.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the product `1 * 2 * ... * n`. If
`n` is 0 or less, print `1`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the product.

## Why it resists a trivial answer
A product accumulator starts at 1. Cases include `n = 0` (empty product `1`, zero iterations) and several
counts, so a wrong start or a hardcoded value fails.

## Note
Start the product at `1`. Inputs are small so the result fits an `int`.
