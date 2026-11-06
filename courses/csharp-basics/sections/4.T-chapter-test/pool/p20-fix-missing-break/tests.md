# Hidden tests, p20-fix-missing-break

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Enter a rank (1-3):\ngold\n` | gold |
| t2 | `2` | `Enter a rank (1-3):\nsilver\n` | silver |
| t3 | `3` | `Enter a rank (1-3):\nbronze\n` | bronze |
| t4 | `4` | `Enter a rank (1-3):\nnone\n` | none (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
