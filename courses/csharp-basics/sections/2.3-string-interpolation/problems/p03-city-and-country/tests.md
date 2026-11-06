# Hidden tests, p03-city-and-country

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Lisbon\nPortugal` | `Enter the city:\nEnter the country:\nLisbon, Portugal\n` | typical pair |
| t2 | `Nairobi\nKenya` | `Enter the city:\nEnter the country:\nNairobi, Kenya\n` | different pair |
| t3 | `Lima\nPeru` | `Enter the city:\nEnter the country:\nLima, Peru\n` | short names |
| t4 | `Hanoi\nViet Nam` | `Enter the city:\nEnter the country:\nHanoi, Viet Nam\n` | country with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
