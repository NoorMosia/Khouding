# Problem 01, Count up, at least once (language-independent design)

**Sub-skill:** a basic `do-while` counter.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Enter a count:` on its own line and read a whole number `n`. Using a `do-while` loop, print the
numbers starting at 1 and continuing while the counter is at most `n`, one per line.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then the numbers, each on its own line.

## Why it resists a trivial answer
Because a `do-while` runs its body before testing, `n = 0` still prints `1` (the one guaranteed pass). Cases
include `n = 0` and `n = 1`, so a solution that uses a plain `while` (which would print nothing for `n = 0`)
produces different output and fails.

## Note
This is the `do-while` point: the body runs once even when the condition is false at the start. Start the
counter at 1, print, increment, and repeat while it is at most `n`.
