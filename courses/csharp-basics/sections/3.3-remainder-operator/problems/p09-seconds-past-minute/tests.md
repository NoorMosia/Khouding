# Hidden tests, p09-seconds-past-minute

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `125` | `Enter the total seconds:\n5\n` | 5 (2 min 5 s) |
| t2 | `60` | `Enter the total seconds:\n0\n` | 0 (exactly a minute) |
| t3 | `45` | `Enter the total seconds:\n45\n` | 45 (under a minute) |
| t4 | `3661` | `Enter the total seconds:\n1\n` | 1 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
