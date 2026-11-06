# Problem 02, Read a decimal (language-independent design)

**Sub-skill:** `double.Parse` on a read line, then print the number.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a decimal number:` on its own line and read it. Convert it to a decimal number and print it.

## I/O contract
- **Input:** one line holding a decimal number.
- **Output:** the prompt (printed as the program runs), then the number on its own line.

## Why it resists a trivial answer
The input varies, including a negative decimal and zero. Only a parse-and-print program passes. The decimal
survives the round trip, which is the point of using `double` here.
