# Hidden tests, p02-declare-a-double

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4.99` | `4.99\n` | normal price |
| t2 | `0` | `0\n` | edge - zero (whole-looking) |
| t3 | `1.5` | `1.5\n` | simple decimal |
| t4 | `-0.5` | `-0.5\n` | edge - negative fraction |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
