# Problem 06, Words per line (language-independent design)

**Sub-skill:** read loop + `Split` per line + count (ties 8.4 + Ch.7).
**Difficulty:** 3

## Statement (student-facing)
Read a separator character from stdin (first char of the line). For each line of `data.txt`, print how many
pieces the line splits into on that separator.

## I/O contract
- **Input:** one line from stdin, whose first character is the separator.
- **Output:** one number per line of `data.txt`, the piece count.

## Why it resists a trivial answer
The counts depend on the separator. Cases vary it including one that does not appear (each line gives 1).

## Note
`line.Split(sep).Length`. A separator absent from a line gives 1 piece.
