# Hidden tests, p01-read-a-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada` | `Enter your name:\nAda\n` | normal name |
| t2 | `Sam` | `Enter your name:\nSam\n` | short name |
| t3 | `Boutros` | `Enter your name:\nBoutros\n` | another name |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
