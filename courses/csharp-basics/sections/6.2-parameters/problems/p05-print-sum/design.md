# Problem 05, Print the sum (language-independent design)

**Sub-skill:** two numeric parameters.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `PrintSum` that takes two `int` parameters and prints their sum. In `Main`,
prompt `Enter two numbers:` on its own line, read two whole numbers (one per line), and pass them to
`PrintSum`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then their sum.

## Why it resists a trivial answer
The method adds its two parameters. Cases vary both values (including negatives), so a hardcoded sum fails.
