# Problem 05, Last two digits (language-independent design)

**Sub-skill:** the digit idiom generalizes, `% 100` keeps the last two digits.
**Difficulty:** 2

## Statement (student-facing)
Read a whole number `n`. Print its last two digits using `% 100`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `n % 100` on its own line.

## Why it resists a trivial answer
Cases include a number under `100` (the whole number is the remainder) and one ending in `00` (result `0`),
so only `% 100` produces all of them. Shows the same remainder idea scales from `% 10` to `% 100`.
