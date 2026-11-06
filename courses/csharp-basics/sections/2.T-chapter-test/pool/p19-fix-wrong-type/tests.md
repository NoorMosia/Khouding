# Hidden tests, p19-fix-wrong-type

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4.99` | `Enter the price:\n4.99\n` | typical price |
| t2 | `7.5` | `Enter the price:\n7.5\n` | one decimal place |
| t3 | `0.5` | `Enter the price:\n0.5\n` | under one |
| t4 | `12.25` | `Enter the price:\n12.25\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
