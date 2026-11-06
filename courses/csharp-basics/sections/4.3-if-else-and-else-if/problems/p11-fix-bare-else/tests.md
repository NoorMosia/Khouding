# Hidden tests, p11-fix-bare-else

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `30` | `Enter the temperature:\nhot\n` | hot (buggy bare-else would print warm) |
| t2 | `25` | `Enter the temperature:\nhot\n` | hot (boundary) |
| t3 | `15` | `Enter the temperature:\nwarm\n` | warm |
| t4 | `4` | `Enter the temperature:\ncold\n` | cold |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
