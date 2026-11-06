# Problem 07, Convert to do-while (language-independent design)

**Sub-skill:** rewrite a `while` as a `do-while` and observe the start-false difference.
**Difficulty:** 2

## Statement (student-facing)
The starter prints 1 to `n` with a `while` loop. Rewrite it as a `do-while` with the same body, so the counter
starts at 1, prints, increments, and repeats while it is at most `n`. The required behavior is the `do-while`
one: the body runs at least once, so when `n` is 0 the program still prints `1`.

## I/O contract
- **Input:** one line, a whole number `n`.
- **Output:** the prompt, then the counter values, each on its own line.

## Why it resists a trivial answer
The grading matches the `do-while` behavior. On `n = 0` the correct output is `1` (one guaranteed pass), while
the original `while` would print nothing. Cases include `n = 0`, so leaving the loop as a `while` fails.
