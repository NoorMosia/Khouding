# Problem 06, Can vote (language-independent design)

**Sub-skill:** a realistic one-way guard with `>=`, boundary included.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it. If the age is at least 18, print `can vote`.

## I/O contract
- **Input:** one line, a whole number (the age).
- **Output:** the prompt, then `can vote` only when `age >= 18`.

## Why it resists a trivial answer
Exactly 18 runs (`>=` includes it); 17 skips. The guard must use `>=`, and the run/skip cases rule out an
always- or never-print program.
