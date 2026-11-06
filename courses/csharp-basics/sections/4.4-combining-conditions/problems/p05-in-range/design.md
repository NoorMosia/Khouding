# Problem 05, In range (language-independent design)

**Sub-skill:** a range check with `&&` and inclusive bounds.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read one whole number. Print `True` if it is in the range 10 to
20 inclusive, otherwise `False`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `True` or `False`.

## Why it resists a trivial answer
Both edges (10 and 20) are inside, so the inclusive `>=` / `<=` must be right. Cases hit both edges and one
value just outside each side, so `>` / `<` or a dropped bound fails.
