# Problem 03, Use the shorthand (language-independent design)

**Sub-skill:** recognise `x = x + y` and `x += y` as the same thing.
**Difficulty:** 1

## Statement (student-facing)
The starter updates `x` with the long form `x = x + y`. Rewrite that line using the compound shorthand `+=`
so it produces exactly the same output.

## I/O contract
- **Input:** two lines, each a whole number: `x`, then `y`.
- **Output:** the two prompts, then the updated `x` on its own line.

## Why it resists a trivial answer
The output must match the long-form original on the varied inputs, so the student has to produce the real
`x += y` result, confirming the shorthand is equivalent.
