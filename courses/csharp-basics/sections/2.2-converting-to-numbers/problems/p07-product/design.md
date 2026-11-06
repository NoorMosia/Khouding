# Problem 07, Product (language-independent design)

**Sub-skill:** two prompts, two parses, multiply.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the first number:` on its own line and read it. Prompt `Enter the second number:` on its own
line and read it. Print their product.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the product on its own line.

## Why it resists a trivial answer
The times-zero case makes a copied-literal answer fail, and the negative case rules out a program that
ignores the sign.
