# Problem 10, Build a badge (language-independent design)

**Sub-skill:** integrative capstone; read several values, build one composed string from pieces (including a
number that becomes text), then print the stored string.

**Difficulty:** 3

## Statement (student-facing)
Read a name, a city, and an age (each prompted on its own line; the age is a whole number). Build a single
`string` variable called `badge` that joins the pieces into `<name> from <city>, age <age>`. Then print
`badge`. For `Ada`, `Lisbon`, `36` this reads `Ada from Lisbon, age 36`.

## I/O contract
- **Input:** three lines: a name, a city, then a whole number (the age).
- **Output:** the three prompts, then the composed badge on its own line.

## Why it resists a trivial answer
Several varying inputs of two types joined in a fixed layout, built into one stored string and then printed.
The literal separators (` from `, `, age `) must land correctly, the age becomes text in the join, and the
age-zero and city-with-a-space cases defeat a copied literal.
