# Hidden tests, p09-factorial

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a count:\n24\n` | 24 |
| t2 | `1` | `Enter a count:\n1\n` | 1 |
| t3 | `0` | `Enter a count:\n1\n` | empty product -> 1 |
| t4 | `5` | `Enter a count:\n120\n` | 120 |
| t5 | `6` | `Enter a count:\n720\n` | 720 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
