# Problem 08, Type resolution (language-independent design)

**Sub-skill:** overloads resolved by argument type (`int` vs `bool`).
**Difficulty:** 2

## Statement (student-facing)
Define two overloads of `Show`: `static void Show(int n)` prints `int ` followed by `n`, and
`static void Show(bool b)` prints `bool ` followed by `b` (which prints `True` or `False`). In `Main`, prompt
`Enter a number and a flag (0 or 1):` on its own line, read a whole number (line 1) and a flag (line 2). Call
`Show` with the number, then `Show` with the expression `flag == 1` (a `bool`).

## I/O contract
- **Input:** line 1 a whole number, line 2 `0` or `1`.
- **Output:** the prompt, then `int <n>`, then `bool <True/False>`.

## Why it resists a trivial answer
The two calls resolve by type: an `int` argument runs the `int` overload, a `bool` argument runs the `bool`
overload. Cases vary both, so each overload must run and print its own labelled line.

## Note
`flag == 1` is a `bool`. Build each line with interpolation, for example `$"int {n}"` and `$"bool {b}"`.
