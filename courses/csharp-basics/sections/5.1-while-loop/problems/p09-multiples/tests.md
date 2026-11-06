# Hidden tests, p09-multiples

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n3` | `Enter n and k:\n3\n6\n9\n` | 3 6 9 (12 > 10 stops) |
| t2 | `10\n5` | `Enter n and k:\n5\n10\n` | 5 10 (10 included) |
| t3 | `4\n5` | `Enter n and k:\n` | n < k: nothing (zero iterations) |
| t4 | `7\n1` | `Enter n and k:\n1\n2\n3\n4\n5\n6\n7\n` | 1..7 one per line |
| t5 | `12\n4` | `Enter n and k:\n4\n8\n12\n` | 4 8 12 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
