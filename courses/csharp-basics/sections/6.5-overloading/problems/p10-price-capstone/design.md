# Problem 10, Price capstone (language-independent design)

**Sub-skill:** integrative, an overloaded helper called in two ways from `Main`.
**Difficulty:** 3

## Statement (student-facing)
Define two overloads of `Price`: `static int Price(int quantity)` uses a default unit price of 10 and returns
`quantity * 10`, and `static int Price(int quantity, int unit)` returns `quantity * unit`. In `Main`, prompt
`Enter quantity and unit:` on its own line, read `quantity` (line 1) and `unit` (line 2), then print
`Price(quantity)` (using the default) on one line and `Price(quantity, unit)` on the next.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then the default-price total, then the custom-price total.

## Why it resists a trivial answer
The one-argument call runs the default-price overload; the two-argument call runs the custom one. Cases vary
both inputs (including a zero quantity and a unit equal to the default), so both overloads must compute
correctly and be selected by argument count.
