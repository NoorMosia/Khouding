# Problem 07, Header then calls (language-independent design)

**Sub-skill:** compose a method with `Main`'s input and a header.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Row` that prints exactly `row`. In `Main`, prompt `Enter a count:` on its own
line, read a whole number `n`, print a line `ROWS:`, then call `Row` exactly `n` times. If `n` is 0 or less,
print `ROWS:` and then nothing more.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `ROWS:`, then `row` printed `n` times.

## Why it resists a trivial answer
`Main` interleaves its own output (the header) with `n` method calls. Cases vary `n` including `n = 0` (header
only), so the structure must be right.

## Note
Print the header after reading `n`, then loop the calls.
