# Hidden tests, p11-inventory-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n10\n12\n4\n8\n0\n3` | `Enter count, threshold, then quantities:\n2\n4\n` | scan 12(ok),4(low),8(low),0(stop@4); low=2, firstZero=4 |
| t2 | `3\n5\n6\n7\n8` | `Enter count, threshold, then quantities:\n0\n0\n` | all healthy, no zero; low=0, firstZero=0 |
| t3 | `4\n10\n0\n5\n5\n5` | `Enter count, threshold, then quantities:\n0\n1\n` | first item is 0; low=0, firstZero=1 |
| t4 | `3\n10\n2\n3\n4` | `Enter count, threshold, then quantities:\n3\n0\n` | all low, no zero; low=3, firstZero=0 |
| t5 | `4\n5\n5\n2\n9\n0` | `Enter count, threshold, then quantities:\n1\n4\n` | 5(ok),2(low),9(ok),0(stop@4); low=1, firstZero=4 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
