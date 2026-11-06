# Problem 01, Declare an int (language-independent design)

**Sub-skill:** declare and initialise an `int` from input, then print it.
**Difficulty:** 1

## Statement (student-facing)
Read one whole number, store it in a well-named `int`, and print it on its own line.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** that number.

## Why it resists a trivial answer
Multiple varied inputs (including zero and a negative) mean a printed literal cannot pass. The program must
read the value into a variable and print the variable.
