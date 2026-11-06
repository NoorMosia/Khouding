# Hidden tests, p13-aligned-table

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `Item	Price\nCoffee	3\nMuffin	2\n` | no-input; 3-row 2-column table using tabs and newlines |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
