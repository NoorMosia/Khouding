# Problem 03, Describe by type (language-independent design)

**Sub-skill:** overload by parameter type.
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Describe`: `static void Describe(int n)` prints `number: ` followed by `n`, and
`static void Describe(string s)` prints `text: ` followed by `s`. In `Main`, prompt `Enter a number and a
word:` on its own line, read a whole number (line 1) and a word (line 2), then call `Describe` with the
number and `Describe` with the word.

## I/O contract
- **Input:** line 1 a whole number, line 2 a word.
- **Output:** the prompt, then `number: <n>`, then `text: <s>`.

## Why it resists a trivial answer
The two calls resolve by argument type: the `int` call runs the `int` overload, the `string` call runs the
`string` overload. Cases vary both, so each overload must produce its own labelled line.

## Note
Build each line with interpolation, for example `$"number: {n}"` and `$"text: {s}"`.
