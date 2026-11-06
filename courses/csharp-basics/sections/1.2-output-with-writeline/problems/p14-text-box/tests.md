# Hidden tests, p14-text-box

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `+------+\n| Hi   |\n+------+\n` | no-input; a small fixed text box |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
