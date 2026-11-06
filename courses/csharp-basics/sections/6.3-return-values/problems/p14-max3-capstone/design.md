# Problem 14, Max of three capstone (language-independent design)

**Sub-skill:** integrative, a returning method built from a helper, driven by `Main`'s input.
**Difficulty:** 3

## Statement (student-facing)
Define a `static int` method `Larger` that returns the larger of two `int`s, and a `static int` method `Max3`
that takes three `int`s and returns the largest (you may build it on `Larger`). In `Main`, prompt
`Enter three numbers:` on its own line, read three whole numbers, call `Max3`, and print the returned value.

## I/O contract
- **Input:** three lines, each a whole number.
- **Output:** the prompt, then the largest of the three.

## Why it resists a trivial answer
`Max3` returns the maximum, composing the `Larger` helper. Cases place the max first, middle, last, use
all-negative values, and include a tie, so the composition and both returns must be correct.

## Note
One clean way: `Max3(a, b, c)` returns `Larger(Larger(a, b), c)`.
