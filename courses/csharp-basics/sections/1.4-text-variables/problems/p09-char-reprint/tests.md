# Hidden tests, p09-char-reprint

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `J` | `J\n` | uppercase initial |
| t2 | `m` | `m\n` | lowercase |
| t3 | `O` | `O\n` | another uppercase |
| t4 | `-` | `-\n` | a symbol |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
