# Hidden tests, p09-full-groups

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17\n5` | `Enter the number of items:\nEnter the group size:\n3\n` | 3 full groups (2 left over, discarded) |
| t2 | `20\n5` | `Enter the number of items:\nEnter the group size:\n4\n` | 4 exact |
| t3 | `4\n5` | `Enter the number of items:\nEnter the group size:\n0\n` | 0 full groups |
| t4 | `100\n8` | `Enter the number of items:\nEnter the group size:\n12\n` | 12 full groups |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
