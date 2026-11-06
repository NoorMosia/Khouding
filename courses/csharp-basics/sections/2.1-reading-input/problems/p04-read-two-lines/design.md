# Problem 04, Read two lines (language-independent design)

**Sub-skill:** two prompts and two reads; each `ReadLine` takes the next line.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter your first name:` on its own line and read it. Prompt `Enter your last name:` on its own line
and read it. Then print the first name, then the last name, each on its own line.

## I/O contract
- **Input:** two lines: first name, then last name.
- **Output:** the two prompts (printed as the program runs), then the first name, then the last name.

## Why it resists a trivial answer
Two varying inputs mean only a program that reads both lines and prints them in order passes. Teaches that
each `ReadLine` advances to the next input line.
