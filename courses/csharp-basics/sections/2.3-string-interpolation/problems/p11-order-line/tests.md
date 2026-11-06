# Hidden tests, p11-order-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `pens\n3` | `Enter the item:\nEnter the quantity:\nYou ordered 3 of pens\n` | typical |
| t2 | `notebook\n1` | `Enter the item:\nEnter the quantity:\nYou ordered 1 of notebook\n` | quantity one |
| t3 | `chairs\n0` | `Enter the item:\nEnter the quantity:\nYou ordered 0 of chairs\n` | quantity zero |
| t4 | `coffee beans\n12` | `Enter the item:\nEnter the quantity:\nYou ordered 12 of coffee beans\n` | item with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
