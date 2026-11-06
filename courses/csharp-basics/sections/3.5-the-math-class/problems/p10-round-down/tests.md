# Hidden tests, p10-round-down

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3.7` | `Enter a value:\n3\n` | 3 (rounds down, not 4) |
| t2 | `3.2` | `Enter a value:\n3\n` | 3 |
| t3 | `9` | `Enter a value:\n9\n` | 9 (whole value unchanged) |
| t4 | `0.9` | `Enter a value:\n0\n` | 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
