# Hidden tests, p08-min

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n3\n9\n2\n7` | `Enter a count:\n2\n` | min 2 (middle) |
| t2 | `1\n5` | `Enter a count:\n5\n` | single -> 5 |
| t3 | `3\n4\n1\n9` | `Enter a count:\n1\n` | min 1 |
| t4 | `3\n-2\n-8\n-1` | `Enter a count:\n-8\n` | all negative -> -8 |
| t5 | `3\n5\n5\n9` | `Enter a count:\n5\n` | duplicate min -> 5 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
