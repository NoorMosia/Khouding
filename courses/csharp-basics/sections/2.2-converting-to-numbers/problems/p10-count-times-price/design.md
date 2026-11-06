# Problem 10, Count times price (language-independent design)

**Sub-skill:** mixed types; an `int` times a `double`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the count:` on its own line and read it as a whole number. Prompt `Enter the price:` on its own
line and read it as a decimal number. Print the count multiplied by the price.

## I/O contract
- **Input:** two lines: a whole number, then a decimal number.
- **Output:** the two prompts, then the product on its own line.

## Why it resists a trivial answer
The two inputs have different types and vary per case. Parsing one as whole and one as decimal is required.
Values are picked so the product prints cleanly.
