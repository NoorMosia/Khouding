# Hidden tests, p07-coin-name

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1` | `Enter coin value in cents:\npenny\n` | penny |
| t2 | `5` | `Enter coin value in cents:\nnickel\n` | nickel |
| t3 | `10` | `Enter coin value in cents:\ndime\n` | dime |
| t4 | `25` | `Enter coin value in cents:\nquarter\n` | quarter |
| t5 | `7` | `Enter coin value in cents:\nnot a coin\n` | not a coin value -> not a coin (default) |
| t6 | `50` | `Enter coin value in cents:\nnot a coin\n` | not in the set -> not a coin (default) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
