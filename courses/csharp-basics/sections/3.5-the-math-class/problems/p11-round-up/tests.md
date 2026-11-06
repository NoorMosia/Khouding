# Hidden tests, p11-round-up

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3.2` | `Enter a value:\n4\n` | 4 (rounds up, not 3) |
| t2 | `3.7` | `Enter a value:\n4\n` | 4 |
| t3 | `9` | `Enter a value:\n9\n` | 9 (whole value unchanged) |
| t4 | `0.1` | `Enter a value:\n1\n` | 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
