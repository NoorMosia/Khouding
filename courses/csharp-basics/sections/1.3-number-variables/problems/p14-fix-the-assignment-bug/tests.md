# Hidden tests, p14-fix-the-assignment-bug

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `7\n` | normal |
| t2 | `0\n0` | `0\n` | edge - zeros |
| t3 | `-5\n2` | `-3\n` | negative |
| t4 | `100\n250` | `350\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
