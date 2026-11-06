# Problem 06, Grade bands (language-independent design)

**Sub-skill:** a multi-way `else if` chain with a final `else`, ordered highest first.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the score:` on its own line and read it. Print the grade band: `A` for 90 or more, `B` for 80 to
89, `C` for 70 to 79, and `fail` below 70.

## I/O contract
- **Input:** one line, a whole number (the score).
- **Output:** the prompt, then one of `A`, `B`, `C`, `fail`.

## Why it resists a trivial answer
Four bands, ordered highest first so each `>=` catches only its own range. Cases hit every band and the lower
edges (80 is B, 70 is C), so the chain order and boundaries must be right.
