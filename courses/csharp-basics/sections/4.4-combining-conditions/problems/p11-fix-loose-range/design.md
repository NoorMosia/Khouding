# Problem 11, Fix the loose range (language-independent design)

**Sub-skill:** spot and fix `||` where `&&` was meant.
**Difficulty:** 2

## Statement (student-facing)
The program should print `True` only when the number is in the range 10 to 20 inclusive, and `False`
otherwise. It currently uses `||`, so it prints `True` for everything. Fix the condition so it works.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
`x >= 10 || x <= 20` is true for every integer, so the bug only shows on values outside the band. Cases include
5 and 25, which must be `False`. The one-character fix (`||` to `&&`) is the whole point.
