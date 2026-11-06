# Problem 10, Ticket total (language-independent design)

**Sub-skill:** integrative capstone; a formula that needs both the `*`-before-`+` rule and parentheses.
**Difficulty:** 3

## Statement (student-facing)
A group buys tickets: everyone pays the same ticket price, and one flat booking fee is added to the whole
order. Read the number of adults, the number of children, the ticket price, and the booking fee (each
prompted on its own line, each a whole number). Print the total:
`(adults + children) * ticket price + booking fee`.

## I/O contract
- **Input:** four lines, each a whole number: adults, children, ticket price, booking fee.
- **Output:** the four prompts, then the total on its own line.

## Why it resists a trivial answer
The formula needs parentheses around the headcount (so the price multiplies the whole group), then the
multiply happens before the fee is added. Getting any part of the order wrong changes the result, and the
varied inputs, including zero adults and a zero fee, defeat a copied literal.
