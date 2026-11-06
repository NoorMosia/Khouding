# Hidden tests, p06-can-vote

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `25` | `Enter your age:\ncan vote\n` | runs -> can vote |
| t2 | `18` | `Enter your age:\ncan vote\n` | runs (18 counts) |
| t3 | `17` | `Enter your age:\n` | skips |
| t4 | `0` | `Enter your age:\n` | skips |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
