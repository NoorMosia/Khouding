# Problem 03, Read and mix (language-independent design)

**Sub-skill:** precedence with input, `*` binds before `+`.
**Difficulty:** 2

## Statement (student-facing)
Read two whole numbers `a` and `b` (each prompted on its own line). Print the value of `a + b * 2`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the two prompts, then the value of `a + b * 2` on its own line.

## Why it resists a trivial answer
The inputs vary, so the result must be computed, and `b * 2` must be done before adding `a`. A student who
evaluates left to right (`(a + b) * 2`) gets a different, wrong answer on every case.
