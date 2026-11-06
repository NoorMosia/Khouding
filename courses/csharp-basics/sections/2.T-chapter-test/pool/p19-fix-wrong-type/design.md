# Pool p19, Fix the wrong type (family E, fix the broken program)

**Integrates:** 2.2 (parse, int vs double), 1.3 (type choice), debug.
**Difficulty:** 2

## Statement (student-facing)
This program should read a price and print it, but it reads the price as a whole number. A price can have a
decimal part, so `int.Parse` cannot read a value like `4.99` and the program fails while running. Change the
type to `double` (and use `double.Parse`) so decimals are read, then print the price.

## I/O contract
- **Input:** one line holding a decimal number (the price).
- **Output:** the prompt, then the price on its own line.

## The planted bug
`int.Parse("4.99")` throws a `FormatException` at run time because `int` holds whole numbers only. The fix is
`double price = double.Parse(Console.ReadLine());`.

## Why it resists a trivial answer
Every case is a decimal, so the `int` starter throws on all of them. Only switching to `double` reads the
value and prints it.
