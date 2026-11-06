# Problem 04, Plus ten (language-independent design)

**Sub-skill:** parse, then one operation (`+ 10`).
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a whole number:` on its own line and read it. Print the number plus 10.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then the number plus 10 on its own line.

## Why it resists a trivial answer
Every case gives a different sum. The `-10` case lands on zero, so a program that forgets to parse or add
is caught.
