# Problem 08, Product of two (language-independent design)

**Sub-skill:** compose a returning method with `Main`'s input.
**Difficulty:** 2

## Statement (student-facing)
Define a `static int` method `Product` that takes two `int` parameters and returns their product. In `Main`,
prompt `Enter two numbers:` on its own line, read two whole numbers, call `Product`, and print the returned
value.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the product.

## Why it resists a trivial answer
`Main` reads the arguments, the method returns the product, and `Main` prints it. Cases vary both values
(including 0 and a negative), so the method must multiply its parameters.
