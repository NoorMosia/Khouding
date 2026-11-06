# Hidden tests, p09-chain-to-switch

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `red` | `Enter a light colour:\nstop\n` | stop |
| t2 | `green` | `Enter a light colour:\ngo\n` | go |
| t3 | `yellow` | `Enter a light colour:\nslow\n` | slow |
| t4 | `blue` | `Enter a light colour:\noff\n` | unmatched -> off (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
