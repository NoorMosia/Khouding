# Hidden tests, p07-product

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `6\n7` | `Enter the first number:\nEnter the second number:\n42\n` | positive |
| t2 | `9\n0` | `Enter the first number:\nEnter the second number:\n0\n` | times zero |
| t3 | `-4\n3` | `Enter the first number:\nEnter the second number:\n-12\n` | negative result |
| t4 | `12\n12` | `Enter the first number:\nEnter the second number:\n144\n` | larger |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
