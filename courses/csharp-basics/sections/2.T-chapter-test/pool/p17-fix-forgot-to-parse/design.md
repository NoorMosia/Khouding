# Pool p17, Fix the forgotten parse (family E, fix the broken program)

**Integrates:** 2.1 (read), 2.2 (parse), debug.
**Difficulty:** 2

## Statement (student-facing)
This program should read a whole number and print it times 3, but it does not compile: it multiplies the line
from `Console.ReadLine()` by 3, and that line is text. Parse the line to a whole number first, then multiply.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then the number times 3 on its own line.

## The planted bug
`Console.ReadLine()` returns a `string`. `Console.ReadLine() * 3` asks for `string * int`, which the compiler
rejects with CS0019. The fix is to parse to an `int`, then multiply.

## Why it resists a trivial answer
The starter does not compile, so it fails every case. Only parsing before the multiply, with varied inputs
including zero and a negative, produces the right result.
