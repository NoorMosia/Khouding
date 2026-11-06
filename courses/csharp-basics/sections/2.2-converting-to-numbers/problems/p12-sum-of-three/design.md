# Problem 12, Sum of three (language-independent design)

**Sub-skill:** three prompts, three parses, add them.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the first number:`, `Enter the second number:`, and `Enter the third number:`, each on its own
line, reading one after the other. Print the sum of all three.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the three prompts, then the sum on its own line.

## Why it resists a trivial answer
Three varying inputs read in order; each `ReadLine` advances to the next line. Only reading and adding all
three passes.
