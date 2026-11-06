# Problem 05, Label an age (language-independent design)

**Sub-skill:** join a number onto a string with `+`; the number becomes text in the result.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it as a whole number. Using `+`, print the label `Age: `
joined to the age.

## I/O contract
- **Input:** one line holding a whole number (the age).
- **Output:** the prompt, then `Age: <age>` on its own line.

## Why it resists a trivial answer
The age varies, including zero. The piece being joined is a number, which becomes text in the joined result,
so the student sees that `+` with a string accepts a number without a separate conversion.
