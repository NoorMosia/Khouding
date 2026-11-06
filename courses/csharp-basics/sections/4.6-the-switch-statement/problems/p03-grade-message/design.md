# Problem 03, Grade message (language-independent design)

**Sub-skill:** a `switch` on a `string`, with a case-sensitive match.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a grade (A, B, C, F):` on its own line and read the grade as text. Print `excellent` for `A`,
`good` for `B`, `pass` for `C`, `fail` for `F`. For anything else print `invalid grade`.

## I/O contract
- **Input:** one line of text.
- **Output:** the prompt, then one of `excellent`, `good`, `pass`, `fail`, `invalid grade`.

## Why it resists a trivial answer
Cases include an unmatched letter and a lowercase `a`, which must reach `default` because the match is
case-sensitive. A switch that drops the default or uses wrong labels fails.
