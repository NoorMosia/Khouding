# Hidden tests, p11-sum-multiples

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `10\n3` | `Enter n and k:\n18\n` | 3+6+9 = 18 (12 > 10) |
| t2 | `10\n5` | `Enter n and k:\n15\n` | 5+10 = 15 |
| t3 | `4\n5` | `Enter n and k:\n0\n` | n < k: no multiples -> 0 |
| t4 | `10\n1` | `Enter n and k:\n55\n` | 1+2+...+10 = 55 |
| t5 | `12\n4` | `Enter n and k:\n24\n` | 4+8+12 = 24 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
