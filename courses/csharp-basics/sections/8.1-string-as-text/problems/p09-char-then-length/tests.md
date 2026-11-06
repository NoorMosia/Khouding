# Hidden tests, p09-char-then-length

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\n0` | `h\n5\n` | h then 5 |
| t2 | `hello\n4` | `o\n5\n` | o then 5 |
| t3 | `hi\n1` | `i\n2\n` | i then 2 |
| t4 | `programming\n3` | `g\n11\n` | g then 11 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
