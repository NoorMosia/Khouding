# Problem 08, Longest line (language-independent design)

**Sub-skill:** read loop + track max by `Length` (ties 7.3 max pattern, seeded from first line).
**Difficulty:** 3

## Statement (student-facing)
The file `data.txt` is provided. Print the longest line (the one with the most characters).

## I/O contract
- **Input:** none.
- **Output:** one line, the longest line from `data.txt`.

## Why it resists a trivial answer
The longest line is determined by the file contents. The single case is structural; can't be hardcoded.

## Note
Seed `longest` from the first `ReadLine()` call; compare `line.Length > longest.Length` in the loop.
