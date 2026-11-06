# Hidden tests, p10-reverse-in-place

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4\n1\n2\n3\n4` | `4\n3\n2\n1\n` | even length |
| t2 | `3\n10\n20\n30` | `30\n20\n10\n` | odd length (middle stays) |
| t3 | `1\n7` | `7\n` | edge - length 1: unchanged |
| t4 | `0` | `` | edge - length 0: prints nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
