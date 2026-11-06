# Problem 02, Echo with a label (language-independent design)

**Sub-skill:** a read value printed between fixed output lines.
**Difficulty:** 1

## Statement (student-facing)
Print the prompt `Enter a word:` on its own line and read a word. Then print the fixed line `You entered:`
followed by the word on the next line.

## I/O contract
- **Input:** one line (a word).
- **Output:** `Enter a word:`, then `You entered:`, then the word.

## Why it resists a trivial answer
The word varies per case, so only reading and printing it passes. Surrounds the read value with fixed
lines, reinforcing that statement order sets output order.
