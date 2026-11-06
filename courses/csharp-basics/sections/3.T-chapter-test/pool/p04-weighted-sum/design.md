# Pool p04, Weighted sum (family A, precedence & parentheses)

**Integrates:** 3.1 (parentheses + precedence in one formula), 2.1/2.2.
**Difficulty:** 3

## Statement (student-facing)
Everyone in a group pays the same ticket price, and one flat discount comes off the whole order. Read the
adults, children, ticket price, and discount (each prompted on its own line, each a whole number). Print the
total: `(adults + children) * price - discount`.

## I/O contract
- **Input:** four lines, each a whole number.
- **Output:** the four prompts, then the total on its own line.

## Why it resists a trivial answer
The headcount must be parenthesized so the price multiplies the whole group, then the multiply happens before
the discount is subtracted. Getting any part of the order wrong changes the result on the varied inputs.
