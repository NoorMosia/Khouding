# Problem 10, Calculator capstone (language-independent design)

**Sub-skill:** a menu-driven `switch` that dispatches to a computation, the integrative close of the section.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter op (1-4) and two numbers:` on its own line. Read an operation code (line 1), then two whole
numbers `a` (line 2) and `b` (line 3). Operation `1` prints `a + b`, `2` prints `a - b`, `3` prints `a * b`,
and `4` prints the integer average `(a + b) / 2`. For any other operation print `invalid op`.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the computed result or `invalid op`.

## Why it resists a trivial answer
Each case computes a different result from the same two numbers. Cases hit every operation with varied values,
a negative result, the integer-division truncation in the average, and a bad operation reaching `default`, so
a switch that hardcodes a result or drops an operation fails.

## Note
The average divides by the constant 2, so it never divides by zero. Integer division truncates toward zero
(Chapter 3): `(7 + 2) / 2` is `4`.
