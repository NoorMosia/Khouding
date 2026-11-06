# Problem 08, The original is unchanged (language-independent design)

**Sub-skill:** the immutability observable: a method returns a new string, the original survives.
**Difficulty:** 2

## Statement (student-facing)
Read a line. Print the upper-cased version, then print the original line, each on its own line.

## I/O contract
- **Input:** one line.
- **Output:** two lines: the upper-cased text, then the original.

## Why it resists a trivial answer
Cases vary mixed case. The two lines differ when the input is mixed or lower-case, proving the original is
unchanged.

## Note
`s.ToUpper()` returns a new string; `s` itself is still the original. Print both.
