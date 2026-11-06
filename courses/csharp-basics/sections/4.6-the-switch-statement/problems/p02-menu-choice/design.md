# Problem 02, Menu choice (language-independent design)

**Sub-skill:** a menu dispatch with `switch` and a `default` for bad input.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Choose an option (1-3):` on its own line and read a whole number. Print `start` for `1`, `load` for
`2`, `quit` for `3`. For any other number print `invalid`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `start`, `load`, `quit`, `invalid`.

## Why it resists a trivial answer
Cases hit all three options and two off-menu values that must reach `default`, so a switch missing a case or
the default fails.
