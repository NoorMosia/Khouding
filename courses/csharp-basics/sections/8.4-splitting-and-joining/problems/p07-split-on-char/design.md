# Problem 07, Split on a chosen separator (language-independent design)

**Sub-skill:** `Split(sep)` with a read separator char.
**Difficulty:** 2

## Statement (student-facing)
Read a line, then a single separator character (the first char of the second line). Print how many pieces the
line splits into on that separator.

## I/O contract
- **Input:** two lines: the text, then a separator character.
- **Output:** one line, the number of pieces.

## Why it resists a trivial answer
The count depends on both inputs. Cases vary the separator and how many times it occurs, including zero times
(gives 1), so a fixed answer fails.

## Note
`s.Split(sep).Length`. A separator that does not appear gives 1.
