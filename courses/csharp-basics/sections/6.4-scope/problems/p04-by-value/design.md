# Problem 04, By value (language-independent design)

**Sub-skill:** reassigning a parameter does not change the caller's variable.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `AddHundred` that takes one `int p`, sets `p = p + 100;`, and prints `p`. In
`Main`, prompt `Enter a number:` on its own line, read a whole number into a variable, call `AddHundred` with
it, then print the original variable. The program prints two lines: the method's changed value, then the
original (which is unchanged).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `number + 100`, then the original `number`.

## Why it resists a trivial answer
This is the by-value demonstration: the method changes its own copy, and `Main`'s variable is untouched. Cases
vary the input (including 0 and a negative), so the second line must always equal the original input.

## Note
Arguments are passed by value, so `AddHundred` cannot change `Main`'s variable. The second printed line is
the original, unchanged.
