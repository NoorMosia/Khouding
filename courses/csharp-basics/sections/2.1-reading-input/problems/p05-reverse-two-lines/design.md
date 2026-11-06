# Problem 05, Reverse two lines (language-independent design)

**Sub-skill:** hold two reads in variables, print them in a chosen order.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter the first word:` on its own line and read it. Prompt `Enter the second word:` on its own line
and read it. Then print the second word, then the first word.

## I/O contract
- **Input:** two lines: first word, then second word.
- **Output:** the two prompts, then the second word, then the first word.

## Why it resists a trivial answer
Both inputs vary, and the output order is the reverse of the read order, so the program must store each in
its own variable and print them deliberately. Reinforces that variables hold values for later use.
