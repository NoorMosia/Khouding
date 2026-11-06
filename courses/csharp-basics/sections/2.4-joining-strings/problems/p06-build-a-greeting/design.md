# Problem 06, Build a greeting (language-independent design)

**Sub-skill:** build a stored string from a literal, a value, and a literal, then use the variable.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your name:` on its own line and read it. Build a single `string` variable called `greeting` that
joins `Hello, `, the name, and `!`. Then print `greeting`.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Hello, <name>!` on its own line.

## Why it resists a trivial answer
Three pieces, with the value in the middle, built into one stored string and then printed. The name varies,
and the trailing `!` must be joined on, so a copied literal fails.
