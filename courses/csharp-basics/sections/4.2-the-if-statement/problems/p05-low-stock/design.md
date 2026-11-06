# Problem 05, Low stock (language-independent design)

**Sub-skill:** a realistic one-way guard with `<`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the stock level:` on its own line and read it. If the stock is below 10, print `reorder`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `reorder` only when `stock < 10`.

## Why it resists a trivial answer
Exactly 10 skips (`<` is strict), 9 runs. The below, boundary, just-below, and well-above cases pin the guard.
