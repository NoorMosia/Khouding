# Hidden tests, p03-boundary-check

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `18` | `Enter your age:\nTrue\n` | edge: 18 >= 18 -> True |
| t2 | `17` | `Enter your age:\nFalse\n` | just under -> False |
| t3 | `40` | `Enter your age:\nTrue\n` | well over -> True |
| t4 | `0` | `Enter your age:\nFalse\n` | zero -> False |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
