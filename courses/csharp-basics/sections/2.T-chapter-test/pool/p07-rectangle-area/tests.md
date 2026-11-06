# Hidden tests, p07-rectangle-area

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n5` | `Enter the width:\nEnter the height:\nArea: 20\n` | typical |
| t2 | `1\n1` | `Enter the width:\nEnter the height:\nArea: 1\n` | unit square |
| t3 | `10\n0` | `Enter the width:\nEnter the height:\nArea: 0\n` | zero height |
| t4 | `25\n12` | `Enter the width:\nEnter the height:\nArea: 300\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
