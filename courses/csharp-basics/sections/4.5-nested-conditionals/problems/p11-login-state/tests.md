# Hidden tests, p11-login-state

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n1` | `Enter logged-in and verified (0 or 1):\ngo\n` | logged in and verified -> go |
| t2 | `1\n0` | `Enter logged-in and verified (0 or 1):\nverify\n` | logged in, not verified -> verify |
| t3 | `0\n0` | `Enter logged-in and verified (0 or 1):\nlogin\n` | not logged in -> login |
| t4 | `0\n1` | `Enter logged-in and verified (0 or 1):\nlogin\n` | not logged in, verified flag ignored -> login |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
