# Problem 12, Fix the Join argument order (language-independent design)

**Sub-skill:** `string.Join(separator, array)`, separator first.
**Difficulty:** 3

## Statement (student-facing)
The program reads `n` words and should print them joined by `", "`. It does not compile. Fix it.

## I/O contract
- **Input:** `n`, then `n` words.
- **Output:** the words joined by `", "`.

## Why it resists a trivial answer
Cases vary word counts including 1. The fix must put the separator first.

## Note
The bug is `string.Join(words, ", ")` (array first). The fix is `string.Join(", ", words)` (separator first).
This is CS1503 (cannot convert string[] to char) at compile time.
