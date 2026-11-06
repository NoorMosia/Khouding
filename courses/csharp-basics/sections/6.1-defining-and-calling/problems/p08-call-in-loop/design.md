# Problem 08, Call inside a loop (language-independent design)

**Sub-skill:** call a method from inside a loop body, interleaved with other output.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Dash` that prints exactly `-`. In `Main`, prompt `Enter a count:` on its own
line, read a whole number `n`, then for each `i` from 1 to `n` print `i` on its own line and then call `Dash`.
If `n` is 0 or less, print nothing after the prompt.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then for each `i`: the number `i`, then `-`.

## Why it resists a trivial answer
Each loop pass mixes `Main`'s own output (the counter) with a method call. Cases vary `n` including `n = 0`
(zero passes), so the interleaving and the loop bound must both be right.
