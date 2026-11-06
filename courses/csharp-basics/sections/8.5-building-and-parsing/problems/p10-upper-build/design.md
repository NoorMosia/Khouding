# Problem 10, Upper-case by building (language-independent design)

**Sub-skill:** build with `char.ToUpper(c)` per character.
**Difficulty:** 3

## Statement (student-facing)
Read a line. Using a loop and `char.ToUpper`, build and print the upper-cased version character by character
(without using `s.ToUpper()`).

## I/O contract
- **Input:** one line.
- **Output:** one line, all upper-cased.

## Why it resists a trivial answer
Cases vary the content and case. The skill is using `char.ToUpper` in the loop.

## Note
`result = result + char.ToUpper(c)` per iteration. The output equals what `s.ToUpper()` produces.
