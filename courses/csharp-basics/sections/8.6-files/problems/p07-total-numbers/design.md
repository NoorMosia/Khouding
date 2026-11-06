# Problem 07, Total the numbers (language-independent design)

**Sub-skill:** read loop + `int.Parse(line)` + accumulate (ties Ch.2 + Ch.5).
**Difficulty:** 3

## Statement (student-facing)
The file `data.txt` contains one integer per line. Read a multiplier from stdin. Print the sum of all the
numbers in the file, multiplied by the multiplier.

## I/O contract
- **Input:** one line from stdin, an integer multiplier.
- **Output:** one line, the sum of the file's numbers times the multiplier.

## Why it resists a trivial answer
The output depends on the multiplier. Cases vary it including 0.

## Note
Parse each line with `int.Parse(line)`, accumulate, multiply at the end.
