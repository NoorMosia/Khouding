# Hidden tests, p12-free-shipping-check

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `60\n50` | `Enter the cart total:\nEnter the free-shipping threshold:\nTrue\n` | True (over) |
| t2 | `50\n50` | `Enter the cart total:\nEnter the free-shipping threshold:\nTrue\n` | True (exactly on the threshold) |
| t3 | `40\n50` | `Enter the cart total:\nEnter the free-shipping threshold:\nFalse\n` | False (under) |
| t4 | `0\n50` | `Enter the cart total:\nEnter the free-shipping threshold:\nFalse\n` | False (empty cart) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
