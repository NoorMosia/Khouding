# Hidden tests, p03-fill-and-read-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n20\n30\n1` | `20\n` | middle index |
| t2 | `10\n20\n30\n0` | `10\n` | first index |
| t3 | `10\n20\n30\n2` | `30\n` | last in-bounds index |
| t4 | `7\n8\n9\n2` | `9\n` | different values |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
