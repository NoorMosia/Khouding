# Problem 04, Read a decimal quotient (language-independent design)

**Sub-skill:** decimal division with input read as `double`.
**Difficulty:** 2

## Statement (student-facing)
Read two numbers `a` and `b` as decimal numbers (each prompted on its own line). Print the decimal quotient
`a / b`.

## I/O contract
- **Input:** two lines, each a number.
- **Output:** the two prompts, then `a / b` as a decimal on its own line.

## Why it resists a trivial answer
Reading as `double` keeps the decimal in the result. The varying inputs give `3.5`, `2.25`, `0.25`, `1.25`,
so a copied literal or an integer-division approach fails. Values are chosen so each quotient prints cleanly
under invariant culture.
