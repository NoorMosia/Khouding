# Hidden tests, p10-either-free

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `60\n0` | `Enter total and coupon (0 or 1):\nfree\n` | over threshold -> free |
| t2 | `20\n1` | `Enter total and coupon (0 or 1):\nfree\n` | coupon -> free |
| t3 | `50\n0` | `Enter total and coupon (0 or 1):\nfree\n` | edge: 50 >= 50 -> free |
| t4 | `20\n0` | `Enter total and coupon (0 or 1):\npaid\n` | neither -> paid |
| t5 | `49\n0` | `Enter total and coupon (0 or 1):\npaid\n` | just under, no coupon -> paid |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
