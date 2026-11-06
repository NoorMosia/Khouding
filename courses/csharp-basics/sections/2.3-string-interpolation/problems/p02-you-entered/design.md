# Problem 02, You entered (language-independent design)

**Sub-skill:** one interpolation hole holding a parsed number.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read it as a whole number. Using interpolation, print
`You entered ` followed by the number.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then `You entered <number>` on its own line.

## Why it resists a trivial answer
The number varies, including zero and a negative, so the hole must be filled from the parsed input. A printed
literal fails.
