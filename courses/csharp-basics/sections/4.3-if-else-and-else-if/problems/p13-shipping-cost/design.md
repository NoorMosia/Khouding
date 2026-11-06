# Problem 13, Shipping cost by weight (language-independent design)

**Sub-skill:** integrative capstone, read a value and choose one of several outcomes.
**Difficulty:** 3

## Statement (student-facing)
A courier charges by parcel weight in grams:

- up to 500 grams: cost is `3`
- 501 to 2000 grams: cost is `6`
- 2001 to 5000 grams: cost is `10`
- over 5000 grams: the parcel is refused, print `too heavy`

Prompt `Enter the weight in grams:` on its own line, read it, and print the cost (a plain number) or
`too heavy`.

## I/O contract
- **Input:** one line, a whole number (the weight in grams).
- **Output:** the prompt, then one of `3`, `6`, `10`, or `too heavy`.

## Why it resists a trivial answer
Four outcomes, three of them numeric and one a message, need a full chain with a final `else`. The thresholds
(`500`, `2000`, `5000`) are inclusive on the lower band, so boundary cases pin down `<=` versus `<`. Cases
reach every outcome including the refusal branch, so dropping any band or mixing up a boundary fails.
