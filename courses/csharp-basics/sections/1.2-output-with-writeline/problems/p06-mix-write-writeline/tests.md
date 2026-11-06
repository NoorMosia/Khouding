# Hidden tests, p06-mix-write-writeline

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Score: 100\nLives: 3\n` | no-input; a layout that needs Write to stay on the line then WriteLine to end it |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
