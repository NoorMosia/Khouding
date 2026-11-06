# Hidden tests, p09-difference-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `100\n60` | `Enter the target:\nEnter the current:\nRemaining: 40\n` | positive result |
| t2 | `50\n50` | `Enter the target:\nEnter the current:\nRemaining: 0\n` | exactly met |
| t3 | `40\n55` | `Enter the target:\nEnter the current:\nRemaining: -15\n` | overshoot |
| t4 | `500\n125` | `Enter the target:\nEnter the current:\nRemaining: 375\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
