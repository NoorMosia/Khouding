# Pool p17, while (true) sum (family E, loop control)

**Integrates:** 5.5.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter numbers, 0 to stop:` on its own line. Using a `while (true)` loop, read a whole number each
pass; if it is `0`, `break`; otherwise add it to a running total. After the loop, print the total.

## I/O contract
- **Input:** whole numbers ending with `0`.
- **Output:** the prompt, then the total.

## Why it resists a trivial answer
The loop has no condition of its own, so the `break` on `0` is the only exit. Cases include a `0`-first input
(total `0`) and negatives, so the read-test-break-else-add order must be correct.

## Note
The `0` always arrives, so the loop terminates. Test for `0` and `break` before adding, so the `0` is not
included.
