# Problem 03, Echo a line (language-independent design)

**Sub-skill:** the plain read-and-print round trip; a line may contain spaces.
**Difficulty:** 1

## Statement (student-facing)
Print the prompt `Type a message:` on its own line. Read the whole line of input and print it back exactly.

## I/O contract
- **Input:** one line (may contain spaces).
- **Output:** the prompt line, then the line that was read.

## Why it resists a trivial answer
Multi-word inputs mean a program that only captured one word would fail. `ReadLine` reads the whole line;
printing it back is the round trip.
