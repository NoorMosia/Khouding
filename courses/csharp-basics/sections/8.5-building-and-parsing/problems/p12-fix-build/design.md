# Problem 12, Fix the build (language-independent design)

**Sub-skill:** assign back in the build loop: `result = result + c`.
**Difficulty:** 3

## Statement (student-facing)
The program should keep only the digit characters from the input and print them. It prints an empty line for
all inputs instead. Fix it.

## I/O contract
- **Input:** one line.
- **Output:** one line, only the digit characters (empty line if none).

## Why it resists a trivial answer
Cases have digits to keep, so "empty always" fails. The fix must assign `result = result + c`.

## Note
The bug is `result + c;` as a standalone statement, which does not compile (CS0201). Fix: `result = result + c;`.
This is a compile error, not a logic bug here: an expression-only statement is rejected.
