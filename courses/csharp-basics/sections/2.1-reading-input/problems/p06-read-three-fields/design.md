# Problem 06, Read three fields (language-independent design)

**Sub-skill:** several prompts and reads, printed back in order.
**Difficulty:** 2

## Statement (student-facing)
Prompt for and read three fields, each with its own prompt line: `Enter a name:`, `Enter a city:`,
`Enter a role:`. Then print the name, the city, and the role, each on its own line.

## I/O contract
- **Input:** three lines: name, city, role.
- **Output:** the three prompts, then the three values in order.

## Why it resists a trivial answer
Three varying inputs read into three variables and printed in order. A scaled-up read loop; only a program
that captures all three and prints them correctly passes.
