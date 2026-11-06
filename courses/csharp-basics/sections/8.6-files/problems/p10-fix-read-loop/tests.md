# Hidden tests, p10-fix-read-loop

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `line one\nline two\nline three\nline four\n` | all four lines |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
