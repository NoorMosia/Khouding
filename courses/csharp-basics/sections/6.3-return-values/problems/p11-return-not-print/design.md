# Problem 11, Return, do not print (language-independent design)

**Sub-skill:** the return-vs-print beat, convert a printing method to a returning one so its result is reusable.
**Difficulty:** 2

## Statement (student-facing)
Write a `static int` method `Triple` that takes one `int n` and RETURNS `n * 3` (it must not print). In
`Main`, prompt `Enter a number:` on its own line, read a whole number `n`, then print two lines: first
`Triple(n)`, then `Triple(n) + Triple(n)` (the triple added to itself). The second line only works because
`Triple` returns a value you can use twice.

## The starting point
The starter has a `void` method that prints the triple and a `Main` that can only produce the first line. A
printing method cannot be used in `Triple(n) + Triple(n)`, so you must change it to return the value.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n * 3`, then `n * 3 + n * 3`.

## Why it resists a trivial answer
The second line requires reusing the method's result in an expression, which only a returning method allows.
Cases vary `n` (including 0 and a negative), so the returned value must be computed and used twice.
