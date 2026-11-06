# Problem 01, Greet by name (language-independent design)

**Sub-skill:** one interpolation hole with surrounding literal text.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your name:` on its own line and read it. Using interpolation, print `Hello, ` followed by the
name on one line.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Hello, <name>` on its own line.

## Why it resists a trivial answer
The name varies per case, so a printed literal fails. Only an interpolated string that fills in the read name
passes.
