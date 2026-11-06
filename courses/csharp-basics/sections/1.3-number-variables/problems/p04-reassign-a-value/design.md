# Problem 04, Reassign a value (language-independent design)

**Sub-skill:** reassignment overwrites; the old value is gone.
**Difficulty:** 1

## Statement (student-facing)
Read a whole number into a variable. Then read a second whole number and reassign it into the same
variable. Print the variable. Only the second value should remain.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the second number (the reassigned value).

## Why it resists a trivial answer
Printing the first input, or a literal, fails. The varied cases (including reassigning to zero, negatives,
and the same value) only pass if the program genuinely reassigns and prints the second value.
