# Hidden tests, p03-insert-a-line-between

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `First.\nSecond.\nThird.\n` | no-input; new line inserted between the two existing ones |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
