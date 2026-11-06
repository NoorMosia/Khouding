# Problem 04, Doubled is (language-independent design)

**Sub-skill:** an expression inside an interpolation hole.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read it as a whole number. Using interpolation, print the number,
then the words ` doubled is `, then the number multiplied by 2, all on one line.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then `<n> doubled is <n*2>` on its own line.

## Why it resists a trivial answer
Two holes, one of which holds an expression computed at fill-in time. Zero and a negative are included, so a
copied literal cannot pass all cases.
