# Problem 12, The full name (language-independent design)

**Sub-skill:** the namespace lesson applied, `Math` is `System.Math`.
**Difficulty:** 2

## Statement (student-facing)
Read a number and print its square root, but write the call using the **full name** `System.Math.Sqrt`
instead of the short `Math.Sqrt`. Both refer to the same function; this shows where `Math` really lives.

## I/O contract
- **Input:** one line, a number.
- **Output:** the prompt, then the square root on its own line.

## Why it resists a trivial answer
Perfect-square inputs give clean whole results (`9` to `3`, `25` to `5`). The point is seeing that
`System.Math.Sqrt` works exactly like `Math.Sqrt`: the `using System;` at the top is only shortening the name,
not adding the function.
