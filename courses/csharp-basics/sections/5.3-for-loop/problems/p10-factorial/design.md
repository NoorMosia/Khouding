# Problem 10, Product 1 to n (language-independent design)

**Sub-skill:** a running product, with the empty-product edge.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Print the product `1 * 2 * ... * n`. If
`n` is 0 (or less), print `1`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the product on one line.

## Why it resists a trivial answer
A product accumulator starts at 1, not 0. Cases include `n = 0` (the empty product is `1`, the loop runs zero
times and the accumulator keeps its start value) and several counts, so starting the accumulator wrong or
hardcoding a value fails.

## Note
Start the product at `1`. For `n = 0` the loop runs zero times and the product stays `1`. Inputs are kept
small so the product fits in an `int`.
