# Hidden tests, p03-count-down

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a count:\n4\n3\n2\n1\n` | 4 3 2 1 |
| t2 | `1` | `Enter a count:\n1\n` | just 1 |
| t3 | `0` | `Enter a count:\n` | zero iterations: nothing |
| t4 | `-3` | `Enter a count:\n` | negative: nothing |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
