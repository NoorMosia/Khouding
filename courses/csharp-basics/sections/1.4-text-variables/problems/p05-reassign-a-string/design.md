# Problem 05, Reassign a string (language-independent design)

**Sub-skill:** reassignment overwrites; the old text is gone.
**Difficulty:** 1

## Statement (student-facing)
Read a line of text into a `string` variable. Then read a second line and reassign it into the same
variable. Print the variable. Only the second value should remain.

## I/O contract
- **Input:** two lines of text.
- **Output:** the second line (the reassigned value).

## Why it resists a trivial answer
Printing the first input, or a literal, fails. Only a program that reassigns and prints the second value
passes all cases (including the one where both values are the same).
