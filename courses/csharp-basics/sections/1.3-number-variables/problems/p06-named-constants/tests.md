# Hidden tests, p06-named-constants

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `12\n24\n` | one crate |
| t2 | `5` | `60\n120\n` | normal |
| t3 | `0` | `0\n0\n` | edge - zero |
| t4 | `10` | `120\n240\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
