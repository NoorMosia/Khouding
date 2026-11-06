# Hidden tests, p01-first-negative

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n5\n-3\n8\n-1` | `Enter a count:\n-3\n` | first negative is -3 (found late) |
| t2 | `3\n-7\n2\n4` | `Enter a count:\n-7\n` | first value negative (found first pass) -> -7 |
| t3 | `3\n1\n2\n3` | `Enter a count:\nnone\n` | no negative -> none |
| t4 | `1\n-9` | `Enter a count:\n-9\n` | single negative -> -9 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
