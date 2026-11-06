# Problem 14, Fix the assignment bug (language-independent design)

**Sub-skill:** debug an assignment-order mistake (use before assign).
**Difficulty:** 2

## Statement (student-facing)
This program should read two whole numbers and print their total. It does not compile: `total` is printed
before it is given a value. Fix the order so `total` is computed first, then printed.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** their sum.

## The planted bug
`total` is declared, then printed, and only assigned afterwards. C# rejects using a variable before it has
a value. The fix is to assign `total = a + b;` before the `WriteLine`.

## Why it resists a trivial answer
The starter does not compile, so it fails every case. Only reordering so the value is assigned before it is
used produces the correct sum, and the varied inputs confirm it is really `a + b`.
