# Problem 04, Count letters (language-independent design)

**Sub-skill:** `char.IsLetter`.
**Difficulty:** 2

## Statement (student-facing)
Read a line of text. Print how many letter characters it contains.

## I/O contract
- **Input:** one line.
- **Output:** one line, the letter count.

## Why it resists a trivial answer
Cases vary: mixed, all-letter, no-letter, empty.

## Note
`char.IsLetter(c)` covers both uppercase and lowercase letters.
