# Problem 10, Total cost (language-independent design)

**Sub-skill:** combine an `int` and a `double` with `*`.
**Difficulty:** 2

## Statement (student-facing)
Read a whole number (a count) on the first line, then a price that may have a decimal part on the second
line. Print the total cost: count times price.

## I/O contract
- **Input:** two lines: a whole-number count, then a (possibly fractional) price.
- **Output:** `count * price`.

## Why it resists a trivial answer
Realistic mixed-type arithmetic: an `int` times a `double` is a `double`. Varied cases (including a
zero count and a price with cents) only pass if the program multiplies the two inputs. The count must be an
`int` and the price a `double`, or the fractional part is lost.
