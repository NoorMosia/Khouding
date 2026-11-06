# Hidden tests, p03-sentinel-count

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n8\n2\n0` | `Enter numbers, 0 to stop:\n3\n` | three values -> 3 |
| t2 | `0` | `Enter numbers, 0 to stop:\n0\n` | sentinel first -> 0 |
| t3 | `7\n0` | `Enter numbers, 0 to stop:\n1\n` | one value -> 1 |
| t4 | `4\n4\n4\n4\n0` | `Enter numbers, 0 to stop:\n4\n` | four values -> 4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
