# Hidden tests, p06-range-method

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `1\n2\n3\n4\n` | 1 2 3 4 |
| t2 | `1` | `1\n` | 1 |
| t3 | `0` | `` | edge - empty: nothing |
| t4 | `6` | `1\n2\n3\n4\n5\n6\n` | longer |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
