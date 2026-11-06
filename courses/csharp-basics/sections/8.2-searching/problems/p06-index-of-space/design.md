# Problem 06, Index of the first space (language-independent design)

**Sub-skill:** `IndexOf(' ')` on a `char`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print the index of the first space, or `-1` if the line has no space.

## I/O contract
- **Input:** one line.
- **Output:** one line, the index of the first space, or `-1`.

## Why it resists a trivial answer
The result depends on where the first space is. Cases vary it, including a line with no space (`-1`) and a
leading space (index 0), so a fixed answer fails.

## Note
`IndexOf(' ')` returns `-1` when there is no space.
