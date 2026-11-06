# Hidden tests, p20-fix-slash-vs-percent

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17\n5` | `Enter the total:\nEnter the group size:\n2\n` | want 2, buggy 3 |
| t2 | `20\n5` | `Enter the total:\nEnter the group size:\n0\n` | want 0, buggy 4 |
| t3 | `4\n5` | `Enter the total:\nEnter the group size:\n4\n` | want 4, buggy 0 |
| t4 | `100\n7` | `Enter the total:\nEnter the group size:\n2\n` | want 2, buggy 14 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
