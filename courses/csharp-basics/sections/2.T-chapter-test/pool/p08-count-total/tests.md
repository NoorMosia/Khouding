# Hidden tests, p08-count-total

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `6\n12` | `Enter the number of boxes:\nEnter items per box:\nTotal items: 72\n` | typical |
| t2 | `0\n10` | `Enter the number of boxes:\nEnter items per box:\nTotal items: 0\n` | zero boxes |
| t3 | `1\n1` | `Enter the number of boxes:\nEnter items per box:\nTotal items: 1\n` | single item |
| t4 | `20\n24` | `Enter the number of boxes:\nEnter items per box:\nTotal items: 480\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
