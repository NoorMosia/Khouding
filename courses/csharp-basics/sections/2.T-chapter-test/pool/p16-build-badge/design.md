# Pool p16, Build a badge (family D, build a string)

**Integrates:** 2.1 (read), 2.2 (parse), 2.4 (join several pieces with `+`, number becomes text).
**Difficulty:** 3

## Statement (student-facing)
Read a name, a team, and a seat number (each prompted on its own line; the seat is a whole number). Build a
single `string` variable `badge` that joins the pieces into `<name>, <team>, seat <seat>`. Print `badge`.

## I/O contract
- **Input:** three lines: a name, a team, then a whole number (seat).
- **Output:** the three prompts, then the composed badge on its own line.

## Why it resists a trivial answer
Several varying inputs of two types joined in a fixed layout with literal separators, the seat becoming text
in the join. Seat-zero and values-with-spaces cases defeat a copied literal.
