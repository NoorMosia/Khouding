# Problem 14, Fix the math on text (language-independent design)

**Sub-skill:** debug the signature "you forgot to parse" mistake.
**Difficulty:** 2

## Statement (student-facing)
This program should read a whole number and print it doubled. It does not compile: it tries to multiply the
line from `Console.ReadLine()` by 2, but that line is text, and you cannot do math on text. Parse the line to
a whole number first, then multiply by 2.

## I/O contract
- **Input:** one line holding a whole number.
- **Output:** the prompt, then the number times 2 on its own line.

## The planted bug
`Console.ReadLine()` returns a `string`. Writing `Console.ReadLine() * 2` asks for `string * int`, which the
compiler rejects with CS0019: the `*` operator cannot be applied to a `string` and an `int`. The fix is to
parse the line to an `int`, then multiply.

## Why it resists a trivial answer
The starter does not compile, so it fails every case. Only parsing before the multiply produces a result, and
the varied inputs confirm it is really the number doubled.
