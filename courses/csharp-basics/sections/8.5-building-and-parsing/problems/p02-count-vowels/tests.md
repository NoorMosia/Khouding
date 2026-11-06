# Hidden tests, p02-count-vowels

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `2\n` | 2 vowels (e, o) |
| t2 | `AEIOU` | `5\n` | 5 uppercase vowels |
| t3 | `bcdfg` | `0\n` | no vowels: 0 |
| t4 | `` | `0\n` | empty: 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
