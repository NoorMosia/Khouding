# Problem 02, Declare a double (language-independent design)

**Sub-skill:** declare and initialise a `double` from input, then print it.
**Difficulty:** 1

## Statement (student-facing)
Read one number that may have a decimal part, store it in a well-named `double`, and print it on its own
line.

## I/O contract
- **Input:** one line, a number (may be fractional).
- **Output:** that number.

## Why it resists a trivial answer
Same motion as p01 with a new type. Varied inputs including zero and a negative fraction kill a printed
literal. The student must choose `double` so the fractional values are preserved.
