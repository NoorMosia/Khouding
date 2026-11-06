# Problem 13, Fix the wrong type (language-independent design)

**Sub-skill:** debug a wrong-type declaration (`int` where `double` is needed).
**Difficulty:** 2

## Statement (student-facing)
This program should read a price (which can have a decimal part) and print it. It does not compile: the
price is being stored in an `int`. Fix the type so it compiles and prints the price correctly.

## I/O contract
- **Input:** one line, a price (may be fractional).
- **Output:** the price.

## The planted bug
`int price = double.Parse(...)` does not compile, because a `double` value cannot be stored in an `int`
jar. The fix is to make `price` a `double`.

## Why it resists a trivial answer
The starter does not compile, so it produces no output and fails. Only changing the type to `double` makes
it read and print the fractional price correctly.
