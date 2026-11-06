# Hidden tests, p05-multiply-equals

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `6\n3` | `Enter the value:\nEnter the factor:\n18\n` | 18 |
| t2 | `5\n0` | `Enter the value:\nEnter the factor:\n0\n` | 0 (times zero) |
| t3 | `7\n1` | `Enter the value:\nEnter the factor:\n7\n` | 7 (times one) |
| t4 | `12\n12` | `Enter the value:\nEnter the factor:\n144\n` | 144 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
