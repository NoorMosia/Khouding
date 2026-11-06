# Hidden tests, p03-pass-value-in

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a score:\n15\n` | 15 |
| t2 | `0` | `Enter a score:\n10\n` | 10 |
| t3 | `-4` | `Enter a score:\n6\n` | 6 |
| t4 | `90` | `Enter a score:\n100\n` | 100 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
