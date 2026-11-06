# Hidden tests, p07-const-label

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada` | `Name:\nAda\n` | normal |
| t2 | `Ada Lovelace` | `Name:\nAda Lovelace\n` | value with a space |
| t3 | `X` | `Name:\nX\n` | single character value |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
