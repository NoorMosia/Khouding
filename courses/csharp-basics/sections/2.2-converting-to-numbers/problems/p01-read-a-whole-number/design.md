# Problem 01, Read a whole number (language-independent design)

**Sub-skill:** `int.Parse` on a read line, then print the number.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a whole number:` on its own line and read it. Convert it to a whole number and print it.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt (printed as the program runs), then the number on its own line.

## Why it resists a trivial answer
The input varies across cases, including zero and a negative. A printed literal fails. Only a program that
reads the line, parses it, and prints the result passes.
