# Problem 10, Fix the dangling else (language-independent design)

**Sub-skill:** recognise and fix an `else` that binds to the wrong `if`.
**Difficulty:** 3

## Statement (student-facing)
The program should behave like this: read two flags `a` and `b` (each `0` or `1`). If `a` is `1` and `b` is
`1`, print `both`. If `a` is `1` but `b` is not, print nothing. If `a` is not `1`, print `not a`. The starter
is written without braces, so the `else` binds to the inner `if` and prints `not a` in the wrong case. Add
braces so the `else` belongs to the outer `if`.

## I/O contract
- **Input:** two lines, each `0` or `1`.
- **Output:** the prompt, then `both`, `not a`, or nothing.

## Why it resists a trivial answer
The bug only shows when `a` is `1` and `b` is `0`: the correct program prints nothing, the buggy one prints
`not a`. Cases include that exact input, so only the braced fix passes all four.

## Note
In C# a brace-less `else` binds to the nearest `if`. Braces make the intended pairing explicit.
