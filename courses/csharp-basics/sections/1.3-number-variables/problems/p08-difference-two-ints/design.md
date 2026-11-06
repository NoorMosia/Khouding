# Problem 08, Difference of two ints (language-independent design)

**Sub-skill:** combine two variables with `-`.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (one per line), store each in a variable, and print the first minus the second.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** `a - b`.

## Why it resists a trivial answer
Order matters here (`a - b` is not `b - a`), and the varied cases include ones where the result is
negative and zero. Only a program that subtracts in the right order passes all.
