# Pool p09, Difference line (family B, read + compute)

**Integrates:** 2.2 (parse + arithmetic), 2.3 (interpolation).
**Difficulty:** 2

## Statement (student-facing)
Read a target and a current value (each prompted on its own line, each a whole number). Using interpolation,
print `Remaining: <target - current>`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then `Remaining: <difference>` on its own line.

## Why it resists a trivial answer
Order matters for subtraction, and one case produces a negative result (overshoot), so a program that adds or
swaps the operands fails.
