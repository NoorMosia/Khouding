# Hidden tests, p12-two-line-receipt

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `19.95\n2.5` | `Enter the item price:\nEnter the tax:\nItem: 19.95\nTax: 2.50\n` | typical |
| t2 | `7.5\n0` | `Enter the item price:\nEnter the tax:\nItem: 7.50\nTax: 0.00\n` | padding and zero |
| t3 | `100\n49.9` | `Enter the item price:\nEnter the tax:\nItem: 100.00\nTax: 49.90\n` | whole and one-decimal |
| t4 | `0\n0` | `Enter the item price:\nEnter the tax:\nItem: 0.00\nTax: 0.00\n` | both zero |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
