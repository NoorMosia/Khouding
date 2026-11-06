# Problem 07, Value with a unit (language-independent design)

**Sub-skill:** join three pieces for output, a label, a number, and a trailing unit.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the distance:` on its own line and read it as a whole number. Using `+`, print `Distance: `
joined to the distance joined to ` km`. For a distance of `5` this reads `Distance: 5 km`.

## I/O contract
- **Input:** one line holding a whole number (the distance).
- **Output:** the prompt, then `Distance: <distance> km` on its own line.

## Why it resists a trivial answer
Three pieces with the number in the middle, and the leading and trailing spaces must land correctly around
it. The distance varies, including zero, so a copied literal fails.
