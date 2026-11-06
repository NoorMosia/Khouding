# Pool p05, Sum two parameters (family B, parameters)

**Integrates:** 6.2.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `PrintSum` that takes two `int` parameters and prints their sum. In `Main`,
prompt `Enter two numbers:` on its own line, read two whole numbers, and pass them to `PrintSum`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then their sum.

## Why it resists a trivial answer
The method adds its two parameters. Cases vary both (including negatives), so a hardcoded sum fails.
