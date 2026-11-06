# Problem 05, Name is age (language-independent design)

**Sub-skill:** two holes of mixed types (a string and a number) in one interpolated line.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your name:` on its own line and read it. Prompt `Enter your age:` on its own line and read it as
a whole number. Using interpolation, print the name, the word ` is `, then the age, all on one line.

## I/O contract
- **Input:** two lines: a name, then a whole number (the age).
- **Output:** the two prompts, then `<name> is <age>` on its own line.

## Why it resists a trivial answer
Two varying inputs of different types filled into one string. The age-zero case rules out a copied literal.
