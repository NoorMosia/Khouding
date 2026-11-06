# Problem 01, Upper case (language-independent design)

**Sub-skill:** `ToUpper()` returns a new string.
**Difficulty:** 1

## Statement (student-facing)
Read a line of text. Print it upper-cased.

## I/O contract
- **Input:** one line.
- **Output:** one line, all characters upper-cased.

## Why it resists a trivial answer
The output depends on the input. Cases vary mixed case, already-upper, and a single char, so a fixed answer
fails.

## Note
Use the returned value: `Console.WriteLine(s.ToUpper())` or `s = s.ToUpper(); Console.WriteLine(s)`.
