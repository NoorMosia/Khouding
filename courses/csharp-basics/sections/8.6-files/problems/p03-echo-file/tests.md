# Hidden tests, p03-echo-file

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `line one\nline two\nline three\n` | print every line of data.txt |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
