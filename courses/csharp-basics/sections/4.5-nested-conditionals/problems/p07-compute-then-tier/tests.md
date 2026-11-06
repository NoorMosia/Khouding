# Hidden tests, p07-compute-then-tier

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n10` | `Enter quantity and unit price:\nstandard\n` | total 20 -> standard |
| t2 | `20\n10` | `Enter quantity and unit price:\nbulk\n` | total 200 -> bulk |
| t3 | `100\n10` | `Enter quantity and unit price:\npremium\n` | total 1000 -> premium |
| t4 | `10\n10` | `Enter quantity and unit price:\nbulk\n` | total 100 edge -> bulk (>= 100) |
| t5 | `50\n10` | `Enter quantity and unit price:\npremium\n` | total 500 edge -> premium (>= 500) |
| t6 | `9\n11` | `Enter quantity and unit price:\nstandard\n` | total 99 -> standard (just under 100) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
