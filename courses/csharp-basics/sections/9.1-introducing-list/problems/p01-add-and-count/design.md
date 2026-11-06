# Problem 01, Add and count (language-independent design)

**Sub-skill:** `new List<int>()`, `Add`, `Count`.
**Difficulty:** 1

## Statement (student-facing)
Read a count `n`, then `n` integers into a list. Print the list's count.

## I/O contract
- **Input:** `n`, then `n` values.
- **Output:** one line, `list.Count`.

## Why it resists a trivial answer
Count equals n. Cases vary n incl. 0 (empty list) and 1.

## Note
`using System.Collections.Generic;` required.
