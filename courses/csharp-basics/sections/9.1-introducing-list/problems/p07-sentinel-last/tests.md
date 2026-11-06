# Hidden tests, p07-sentinel-last

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30\nstop` | `30\n` | 30 |
| t2 | `99\nstop` | `99\n` | one value: 99 |
| t3 | `1\n2\n3\n4\nstop` | `4\n` | 4 |
| t4 | `-5\nstop` | `-5\n` | -5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
