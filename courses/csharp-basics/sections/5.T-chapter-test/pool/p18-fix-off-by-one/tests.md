# Hidden tests, p18-fix-off-by-one

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5` | `Enter a count:\n1\n2\n3\n4\n5\n` | 1..5 (buggy 1..4) |
| t2 | `1` | `Enter a count:\n1\n` | 1 (buggy nothing) |
| t3 | `0` | `Enter a count:\n` | nothing either way |
| t4 | `3` | `Enter a count:\n1\n2\n3\n` | 1 2 3 (buggy 1 2) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
