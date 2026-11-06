# Problem 03, Call it n times (language-independent design)

**Sub-skill:** `Main` reads input and drives the calls with a loop.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method named `Tick` that prints exactly `tick`. In `Main`, prompt `Enter a count:` on
its own line, read a whole number `n`, and call `Tick` exactly `n` times. If `n` is 0 or less, call it zero
times (print nothing after the prompt).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `tick` printed `n` times.

## Why it resists a trivial answer
The number of calls depends on `n`. Cases vary `n` including `n = 0` (zero calls), so a fixed number of prints
fails.

## Note
`Main` reads and loops; each pass calls `Tick`. The method itself takes no parameters.
