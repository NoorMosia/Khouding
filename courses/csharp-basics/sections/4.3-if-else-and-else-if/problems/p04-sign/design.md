# Problem 04, Sign (language-independent design)

**Sub-skill:** a three-way `else if` chain with a final `else`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read it. Print `positive` if it is greater than 0, `negative` if
it is less than 0, and `zero` otherwise.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `positive`, `negative`, `zero`.

## Why it resists a trivial answer
Three outcomes, and zero lands in the final `else`. Cases hit every branch, so all three must be present and
the zero case rules out a chain that forgets the catch-all.
