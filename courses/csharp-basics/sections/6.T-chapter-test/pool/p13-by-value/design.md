# Pool p13, By value (family D, scope)

**Integrates:** 6.4.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `AddHundred` that takes one `int p`, sets `p = p + 100;`, and prints `p`. In
`Main`, prompt `Enter a number:` on its own line, read a whole number into a variable, call `AddHundred` with
it, then print the original variable. The program prints two lines: the method's changed value, then the
original (unchanged).

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `number + 100`, then the original `number`.

## Why it resists a trivial answer
The method changes its own copy; `Main`'s variable is untouched. Cases vary the input, so the second line must
always equal the original.
