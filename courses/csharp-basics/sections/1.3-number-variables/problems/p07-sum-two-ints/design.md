# Problem 07, Sum two ints (language-independent design)

**Sub-skill:** combine two variables with `+`.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers (one per line), store each in a variable, and print their sum.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** their sum.

## Why it resists a trivial answer
The varied hidden inputs (including zero and a negative) make the only passing program one that actually
computes `a + b`. A printed literal fails all but one case.
