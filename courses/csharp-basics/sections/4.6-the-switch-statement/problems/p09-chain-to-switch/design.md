# Problem 09, Chain to switch (language-independent design)

**Sub-skill:** convert an equality-only `else if` chain into a `switch`.
**Difficulty:** 2

## Statement (student-facing)
The program reads a traffic light colour and prints an action: `red` is `stop`, `green` is `go`, `yellow` is
`slow`, anything else is `off`. The starter uses an `else if` chain that only tests equality. Rewrite it as a
`switch` with the same behaviour.

## I/O contract
- **Input:** one line of text.
- **Output:** the prompt, then one of `stop`, `go`, `slow`, `off`.

## Why it resists a trivial answer
Each branch tests the same value against a constant, exactly the shape a `switch` is for. Cases hit all three
colours and an unmatched one (the `default`), so the converted switch must preserve every outcome.
