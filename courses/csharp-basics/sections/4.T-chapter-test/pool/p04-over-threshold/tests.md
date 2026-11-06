# Hidden tests, p04-over-threshold

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `35` | `Enter a temperature:\nalert\n` | over -> alert |
| t2 | `30` | `Enter a temperature:\n` | edge: not > 30 -> no output |
| t3 | `10` | `Enter a temperature:\n` | under -> no output |
| t4 | `31` | `Enter a temperature:\nalert\n` | just over -> alert |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
