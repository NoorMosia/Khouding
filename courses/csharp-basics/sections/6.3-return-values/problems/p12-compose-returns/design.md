# Problem 12, Compose returns (language-independent design)

**Sub-skill:** feed one method's return value into another method's argument.
**Difficulty:** 3

## Statement (student-facing)
Define two `static int` methods: `Square` returns its argument squared, and `Larger` returns the larger of its
two arguments. In `Main`, prompt `Enter two numbers:` on its own line, read `a` and `b`, and print
`Larger(Square(a), Square(b))`, the larger of the two squares.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the larger of the two squares.

## Why it resists a trivial answer
The returned value of `Square` becomes an argument to `Larger`, composing two methods in one expression. Cases
include negatives (whose squares are positive and may be the larger), so both returns must be correct and
nested properly.
