# Hidden tests, p04-reproduce-3-lines

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Menu:\n1. Start\n2. Quit\n` | no-input; reproduce a fixed 3-line block exactly |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
