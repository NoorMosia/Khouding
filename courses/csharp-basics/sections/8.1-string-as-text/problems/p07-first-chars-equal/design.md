# Problem 07, First characters equal (language-independent design)

**Sub-skill:** compare two chars with `==`.
**Difficulty:** 2

## Statement (student-facing)
Read two lines of text. Print `True` if their first characters are equal, otherwise `False`.

## I/O contract
- **Input:** two non-empty lines.
- **Output:** one line, `True` or `False`.

## Why it resists a trivial answer
The answer depends on both inputs. Cases cover match, mismatch, and a case difference (`A` vs `a` is not
equal), so a fixed answer fails.

## Note
Comparing two chars with `==` gives a `bool` (prints `True`/`False`). Comparison is case-sensitive.
