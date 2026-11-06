# Problem 09, Sum of squares (language-independent design)

**Sub-skill:** use returned values directly in a larger expression.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Square` that returns its argument squared. In `Main`, prompt
`Enter two numbers:` on its own line, read two whole numbers `a` and `b`, and print `Square(a) + Square(b)`
(the sum of their squares).

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the sum of the two squares.

## Why it resists a trivial answer
The two returned values are combined in an expression without being stored, showing a call is a value. Cases
vary both inputs (including a negative), so the method must return and the sum must be computed.
