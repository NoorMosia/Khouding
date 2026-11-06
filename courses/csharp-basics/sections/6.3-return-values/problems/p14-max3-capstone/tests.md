# Hidden tests, p14-max3-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n9\n5` | `Enter three numbers:\n9\n` | 9 (middle) |
| t2 | `9\n3\n5` | `Enter three numbers:\n9\n` | 9 (first) |
| t3 | `3\n5\n9` | `Enter three numbers:\n9\n` | 9 (last) |
| t4 | `-4\n-1\n-9` | `Enter three numbers:\n-1\n` | -1 (all negative) |
| t5 | `7\n7\n2` | `Enter three numbers:\n7\n` | 7 (tie at the top) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
