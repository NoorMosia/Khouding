# Hidden tests, p01-count-up

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a count:\n1\n2\n3\n4\n` | several: 1 2 3 4 |
| t2 | `1` | `Enter a count:\n1\n` | one iteration |
| t3 | `0` | `Enter a count:\n` | zero iterations: prints nothing |
| t4 | `7` | `Enter a count:\n1\n2\n3\n4\n5\n6\n7\n` | larger count |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
