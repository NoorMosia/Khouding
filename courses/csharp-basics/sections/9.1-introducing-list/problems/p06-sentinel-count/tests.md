# Hidden tests, p06-sentinel-count

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30\nstop` | `3\n` | 3 |
| t2 | `7\nstop` | `1\n` | 1 |
| t3 | `stop` | `0\n` | 0 values before stop |
| t4 | `1\n2\n3\n4\n5\nstop` | `5\n` | 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
