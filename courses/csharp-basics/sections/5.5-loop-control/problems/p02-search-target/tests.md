# Hidden tests, p02-search-target

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n7\n2\n7\n9\n1` | `Enter count, target, then values:\nfound\n` | target 7 appears (found) |
| t2 | `3\n5\n5\n1\n2` | `Enter count, target, then values:\nfound\n` | target 5 is the first value (found first pass) |
| t3 | `3\n8\n1\n2\n3` | `Enter count, target, then values:\nnot found\n` | target 8 absent -> not found |
| t4 | `1\n4\n4` | `Enter count, target, then values:\nfound\n` | single value equals target -> found |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
