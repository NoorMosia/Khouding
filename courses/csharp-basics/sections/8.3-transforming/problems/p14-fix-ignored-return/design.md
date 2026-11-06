# Problem 14, Fix the ignored return value (language-independent design)

**Sub-skill:** every transform returns a new string; use it.
**Difficulty:** 3

## Statement (student-facing)
The program should print the upper-cased version of the input. It prints the original instead. Fix it.

## I/O contract
- **Input:** one line.
- **Output:** one line, upper-cased.

## Why it resists a trivial answer
Cases vary the input's case. The fix must use the returned value from `ToUpper`.

## Note
The bug is `s.ToUpper();` with the result discarded, then printing `s` (unchanged). The fix is
`Console.WriteLine(s.ToUpper())` or `s = s.ToUpper(); Console.WriteLine(s)`.
