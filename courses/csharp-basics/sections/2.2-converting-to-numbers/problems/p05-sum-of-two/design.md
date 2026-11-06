# Problem 05, Sum of two (language-independent design)

**Sub-skill:** two prompts, two parses, add them.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the first number:` on its own line and read it. Prompt `Enter the second number:` on its own
line and read it. Print their sum.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts (printed as the program runs), then the sum on its own line.

## Why it resists a trivial answer
Two varying inputs mean only a program that parses both and adds them passes. Each `ReadLine` advances to the
next line.
