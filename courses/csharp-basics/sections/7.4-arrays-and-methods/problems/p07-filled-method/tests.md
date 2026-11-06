# Hidden tests, p07-filled-method

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n7` | `7\n7\n7\n` | 7 7 7 |
| t2 | `1\n0` | `0\n` | edge - length 1: 0 |
| t3 | `0\n9` | `` | edge - length 0: prints nothing |
| t4 | `4\n-2` | `-2\n-2\n-2\n-2\n` | negative fill |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
