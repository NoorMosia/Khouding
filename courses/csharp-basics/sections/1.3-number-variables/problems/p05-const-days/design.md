# Problem 05, A const for days in a week (language-independent design)

**Sub-skill:** declare a `const` and use it in a calculation.
**Difficulty:** 1

## Statement (student-facing)
Declare a `const` for the number of days in a week (7). Read a number of weeks, then print the total number
of days.

## I/O contract
- **Input:** one line, a whole number of weeks.
- **Output:** weeks times 7.

## Why it resists a trivial answer
Varied inputs including zero and a large value mean only a program that computes `weeks * 7` passes. The
`const` gives the 7 a name; using a named constant is the point.
