# Hidden tests, p07-discount-tier

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `150` | `Enter the spend:\ngold\n` | gold (matches both >=100 and >=50; first wins) |
| t2 | `100` | `Enter the spend:\ngold\n` | gold (boundary) |
| t3 | `60` | `Enter the spend:\nsilver\n` | silver |
| t4 | `20` | `Enter the spend:\nnone\n` | none |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
