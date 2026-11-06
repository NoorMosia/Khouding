# Hidden tests, p09-receipt-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Item:	Coffee\nQty:	3\nTotal:	7.5\n` | no-input; formatted 3-line receipt with tabs and a computed total |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
