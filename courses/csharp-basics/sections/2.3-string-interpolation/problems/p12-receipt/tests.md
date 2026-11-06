# Hidden tests, p12-receipt

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `pens\n3\n2` | `Enter the item:\nEnter the quantity:\nEnter the unit price:\nItem: pens\nQuantity: 3\nTotal: 6\n` | typical |
| t2 | `notebook\n1\n5` | `Enter the item:\nEnter the quantity:\nEnter the unit price:\nItem: notebook\nQuantity: 1\nTotal: 5\n` | quantity one |
| t3 | `chairs\n0\n40` | `Enter the item:\nEnter the quantity:\nEnter the unit price:\nItem: chairs\nQuantity: 0\nTotal: 0\n` | quantity zero |
| t4 | `coffee beans\n10\n7` | `Enter the item:\nEnter the quantity:\nEnter the unit price:\nItem: coffee beans\nQuantity: 10\nTotal: 70\n` | item with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
