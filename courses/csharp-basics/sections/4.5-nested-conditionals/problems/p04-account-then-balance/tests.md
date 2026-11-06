# Hidden tests, p04-account-then-balance

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n-50` | `Enter account flag and balance:\noverdrawn\n` | account, negative -> overdrawn |
| t2 | `1\n0` | `Enter account flag and balance:\nok\n` | account, zero -> ok (0 is not < 0) |
| t3 | `1\n200` | `Enter account flag and balance:\nok\n` | account, positive -> ok |
| t4 | `0\n-50` | `Enter account flag and balance:\nno account\n` | no account -> no account (balance not asked) |
| t5 | `0\n999` | `Enter account flag and balance:\nno account\n` | no account, positive balance still -> no account |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
