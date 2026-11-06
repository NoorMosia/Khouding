# Problem 01, Read a name (language-independent design)

**Sub-skill:** prompt, read a line, print it.
**Difficulty:** 1

## Statement (student-facing)
Print the prompt `Enter your name:` on its own line. Read a line of input into a `string`, then print it.

## I/O contract
- **Input:** one line (a name).
- **Output:** the prompt line `Enter your name:`, then the name that was read.

## Why it resists a trivial answer
The input varies across hidden cases, so a printed literal fails. The program must read the line and print
it. (The read value appears only because the program prints it; input is not echoed.)
