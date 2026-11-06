# Problem 04, Rename cryptic variables (language-independent design)

**Sub-skill:** naming as modeling, give values meaningful names.
**Difficulty:** 2

## Statement (student-facing)
This program works but its names say nothing. It reads a number of rows and a number of seats per row, and
prints the total number of seats. Rename `x`, `a2`, and `q` to meaningful names. The output must not
change.

## I/O contract
- **Input:** two lines: rows, then seats per row.
- **Output:** the product (total seats).

## Why it resists a trivial answer
The output is computed from the input, so varied inputs (including a zero) kill a printed literal. The
rename does not change the result; it is the readability that is the point. Grading confirms the
computation still holds; the quiz reinforces which names are clearest.
