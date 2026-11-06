# Hidden tests, p02-step-under-limit

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `0\n10` | `Enter start and limit:\n0\n3\n6\n9\n` | 0 3 6 9 (12 not < 10) |
| t2 | `5\n5` | `Enter start and limit:\n5\n` | start not < limit: still prints 5 once (guaranteed pass) |
| t3 | `8\n3` | `Enter start and limit:\n8\n` | start already past limit: still prints 8 once |
| t4 | `1\n8` | `Enter start and limit:\n1\n4\n7\n` | 1 4 7 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
