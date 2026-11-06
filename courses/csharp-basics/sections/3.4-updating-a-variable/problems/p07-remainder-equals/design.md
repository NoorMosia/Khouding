# Problem 07, Remainder-equals (language-independent design)

**Sub-skill:** `%=` stores the remainder back into the variable (callback to 3.3).
**Difficulty:** 2

## Statement (student-facing)
Read a value and a divisor (each prompted on its own line). Replace the value with its remainder using `%=`
and print the result.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the result on its own line.

## Why it resists a trivial answer
`value %= divisor` stores `value % divisor`. Cases cover a normal remainder, an exact divide (`0`), and a
value smaller than the divisor (the value itself), so the update must compute the real remainder.
