# Problem 02, Power (language-independent design)

**Sub-skill:** a two-argument `Math` call, `Math.Pow`.
**Difficulty:** 1

## Statement (student-facing)
Read a base and an exponent (each prompted on its own line). Print the base raised to the exponent using
`Math.Pow`.

## I/O contract
- **Input:** two lines, each a number: base, then exponent.
- **Output:** the two prompts, then the power on its own line.

## Why it resists a trivial answer
Two varying inputs passed as two arguments. The exponent-zero case (`7` to the `0` is `1`) rules out a copied
literal. Small whole powers keep the output clean.
