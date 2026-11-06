# Problem 10, Fix the off-by-one (language-independent design)

**Sub-skill:** last index is `Count - 1`, not `Count`.
**Difficulty:** 2

## Statement (student-facing)
The program reads values into a list and should print the last element. It crashes instead. Fix it.

## I/O contract
- **Input:** `n`, then `n` values (n >= 1).
- **Output:** one line, the last element.

## Note
Starter uses `list[list.Count]`; fix to `list[list.Count - 1]`. Committed solution stays in bounds.
