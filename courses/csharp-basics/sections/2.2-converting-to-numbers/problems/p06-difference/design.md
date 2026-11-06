# Problem 06, Difference (language-independent design)

**Sub-skill:** two prompts, two parses, subtract.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the first number:` on its own line and read it. Prompt `Enter the second number:` on its own
line and read it. Print the first minus the second.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the first minus the second on its own line.

## Why it resists a trivial answer
Order matters for subtraction, so a program that adds or swaps the operands fails. One case produces a
negative result to confirm the sign is handled.
