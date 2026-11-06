# Pool p03, Greeting line (family A, echo & intake)

**Integrates:** 2.1 (prompt + read), 2.3 (interpolation).
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter your name:` on its own line and read it. Using interpolation, print `Welcome aboard, ` the name,
then `!`.

## I/O contract
- **Input:** one line holding a name.
- **Output:** the prompt, then `Welcome aboard, <name>!` on its own line.

## Why it resists a trivial answer
The name varies, and the literal text wraps the hole on both sides (including a trailing `!`). Only an
interpolated string that fills the read name passes.
