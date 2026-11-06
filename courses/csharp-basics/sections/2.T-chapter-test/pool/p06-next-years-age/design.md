# Pool p06, Next year's age (family B, read + compute)

**Integrates:** 2.2 (parse + arithmetic), 2.3 (interpolation).
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your age:` on its own line and read it as a whole number. Using interpolation, print
`Next year you will be <age + 1>`.

## I/O contract
- **Input:** one line holding a whole number (the age).
- **Output:** the prompt, then the sentence with the computed next age.

## Why it resists a trivial answer
The age varies, and the hole holds `age + 1`, computed at fill-in time. A copied literal fails.
