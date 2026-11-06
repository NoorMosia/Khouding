# Pool p10, Either way free (family C, combining & nesting)

**Integrates:** 4.4.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter total and coupon (0 or 1):` on its own line. Read an order total (line 1) and a coupon flag
(line 2, `1` or `0`). Print `free` if the total is 50 or more or the coupon flag is `1`, otherwise `paid`.

## I/O contract
- **Input:** two lines, each a whole number.
- **Output:** the prompt, then `free` or `paid`.

## Why it resists a trivial answer
`||` is false only when both routes fail. Cases include the both-false `paid`, each single-true route, and the
50 boundary, so checking only one route fails.

## Note
The coupon flag is read as an `int` and compared with `== 1` (no bool parsing yet).
