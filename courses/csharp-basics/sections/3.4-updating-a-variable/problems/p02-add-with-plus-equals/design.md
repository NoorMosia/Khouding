# Problem 02, Add with plus-equals (language-independent design)

**Sub-skill:** `+=` adds a value to a variable in place.
**Difficulty:** 1

## Statement (student-facing)
Read a total and an amount to add (each prompted on its own line). Add the amount to the total with `+=` and
print the new total.

## I/O contract
- **Input:** two lines, each a whole number: total, then amount.
- **Output:** the two prompts, then the new total on its own line.

## Why it resists a trivial answer
Both inputs vary, so the result must be computed. The add-zero case confirms the update uses the amount rather
than a fixed step.
