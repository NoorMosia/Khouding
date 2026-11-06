# Problem 06, Model text fields (language-independent design)

**Sub-skill:** declare several `string` variables to model a described thing.
**Difficulty:** 1

## Statement (student-facing)
A book has a title and an author. Read the title on the first line and the author on the second line, each
into its own `string`. Print the title, then the author, each on its own line.

## I/O contract
- **Input:** two lines: title, then author.
- **Output:** two lines: the title, then the author.

## Why it resists a trivial answer
Varied field values mean only a program that stores and prints both inputs passes. Each field is its own
`string`. (Print them on separate lines; combining text into one line is a later section.)
