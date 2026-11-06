# Problem 06, Name the magic numbers (language-independent design)

**Sub-skill:** replace bare literals with named `const`s (naming as self-documentation).
**Difficulty:** 2

## Statement (student-facing)
The starter works but uses bare "magic numbers": 12 bottles per crate, and 2 each. Replace them with
well-named `const` variables, then print the same result: read a number of crates, print the total number
of bottles, then the total cost.

## I/O contract
- **Input:** one line, a whole number of crates.
- **Output:** two lines: total bottles (`crates * 12`), then total cost (`bottles * 2`).

## Why it resists a trivial answer
The output is computed from the input, so varied inputs (including zero) kill a printed literal. The rename
does not change the result; the point is that `BottlesPerCrate` and `PricePerBottle` say what the numbers
mean. Grading confirms the computation still holds.
