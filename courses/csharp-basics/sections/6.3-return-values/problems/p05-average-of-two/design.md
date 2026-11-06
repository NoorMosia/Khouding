# Problem 05, Average of two (language-independent design)

**Sub-skill:** return a `double`.
**Difficulty:** 2

## Statement (student-facing)
Define a `static double` method `AverageOfTwo` that takes two `int` parameters and returns their average as a
`double` (so `3` and `4` give `3.5`). In `Main`, prompt `Enter two numbers:` on its own line, read two whole
numbers, call `AverageOfTwo`, and print the returned value.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the average (a decimal when the sum is odd).

## Why it resists a trivial answer
To get a real average you must divide by `2.0` (or cast), not integer-divide. Cases include odd sums (a `.5`
result) and a whole result, so a plain `int` division would give the wrong value.

## Note
Compute `(a + b) / 2.0` so the division is floating point. Expected outputs are generated under invariant
culture (decimal point), verified by the oracle.
