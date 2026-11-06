# Problem 03, Echo until sentinel (language-independent design)

**Sub-skill:** a `do-while` sentinel loop with the stop value read inside the body.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, 0 to stop:` on its own line. Using a `do-while`, read a whole number each pass, print
it unless it is `0`, and repeat while the value read is not `0`. The `0` is not printed.

## I/O contract
- **Input:** whole numbers, one per line, ending with `0`.
- **Output:** the prompt, then each value before the `0`, one per line.

## Why it resists a trivial answer
The read lives in the body, so it always happens once, but the `0` must not be echoed, which forces a guard
before the print. Cases include a `0`-first input (one read, nothing echoed) and negatives, so a solution that
echoes the sentinel or skips the guard fails.
