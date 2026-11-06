# Pool p15, Build a code (family D, build a string)

**Integrates:** 2.1 (read), 2.2 (parse), 2.4 (join with `+`, number becomes text in the join).
**Difficulty:** 2

## Statement (student-facing)
Read a prefix (text) and a number (whole number), each prompted on its own line. Build a single `string`
variable `code` that joins the prefix, a hyphen, and the number. Print `code`. For `AB` and `100` this reads
`AB-100`.

## I/O contract
- **Input:** two lines: a prefix, then a whole number.
- **Output:** the two prompts, then the composed code on its own line.

## Why it resists a trivial answer
Two varying inputs of different types joined with a literal hyphen; the number becomes text in the join. The
built string is stored, then printed.
