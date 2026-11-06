# Problem 05, Three levels (language-independent design)

**Sub-skill:** a three-level decision tree, each level narrowing the last.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter a number:` on its own line and read a whole number. If it is not positive, print `not positive`.
If it is positive and odd, print `odd`. If it is positive and even, print `even by four` when it is divisible
by 4, otherwise `even not by four`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `not positive`, `odd`, `even by four`, `even not by four`.

## Why it resists a trivial answer
Four leaves across three nested levels. Cases reach every leaf, including the `% 4` split (8 and 6) and the
zero edge, so a collapsed or mis-nested tree misses at least one.

## Note
Use `% 2` for even/odd and `% 4` for divisible by four (remainder from Chapter 3).
