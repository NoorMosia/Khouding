# Hidden tests, p10-group-three

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n-1\n4` | `Enter three numbers, one per line:\nTrue\n` | a positive, c positive -> True |
| t2 | `5\n2\n-3` | `Enter three numbers, one per line:\nTrue\n` | a positive, b positive -> True |
| t3 | `5\n-1\n-2` | `Enter three numbers, one per line:\nFalse\n` | a positive but neither b nor c -> False |
| t4 | `-5\n3\n4` | `Enter three numbers, one per line:\nFalse\n` | a not positive, group cannot save it -> False |
| t5 | `0\n1\n1` | `Enter three numbers, one per line:\nFalse\n` | a is zero (not positive) -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
