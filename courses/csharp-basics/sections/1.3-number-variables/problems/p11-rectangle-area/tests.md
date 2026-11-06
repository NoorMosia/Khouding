# Hidden tests, p11-rectangle-area

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n4` | `12\n` | normal |
| t2 | `1\n1` | `1\n` | unit square |
| t3 | `5\n0` | `0\n` | edge - a zero side |
| t4 | `20\n15` | `300\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
