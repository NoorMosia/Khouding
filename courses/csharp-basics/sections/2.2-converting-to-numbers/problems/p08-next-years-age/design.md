# Problem 08, Next year's age (language-independent design)

**Sub-skill:** parse an int in a realistic setting, add 1.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it. Print the age one year from now.

## I/O contract
- **Input:** one line holding a whole number (the age).
- **Output:** the prompt, then the age plus 1 on its own line.

## Why it resists a trivial answer
The age varies per case, so the answer must be computed. A realistic framing for the same parse-and-add
skill as p04.
