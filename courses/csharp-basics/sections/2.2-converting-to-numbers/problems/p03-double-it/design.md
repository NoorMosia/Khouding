# Problem 03, Double it (language-independent design)

**Sub-skill:** parse, then one operation (`* 2`).
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a whole number:` on its own line and read it. Print the number multiplied by 2.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then the number times 2 on its own line.

## Why it resists a trivial answer
The result changes with every input, so only a program that parses and multiplies passes. Zero and a
negative are included to rule out guesses.
