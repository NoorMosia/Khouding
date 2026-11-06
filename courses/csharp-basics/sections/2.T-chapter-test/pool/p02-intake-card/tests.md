# Hidden tests, p02-intake-card

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nengineer\nLisbon` | `Enter the name:\nEnter the role:\nEnter the city:\nName: Ada\nRole: engineer\nCity: Lisbon\n` | typical |
| t2 | `Grace\nteacher\nNairobi` | `Enter the name:\nEnter the role:\nEnter the city:\nName: Grace\nRole: teacher\nCity: Nairobi\n` | different values |
| t3 | `Al\nnurse\nLima` | `Enter the name:\nEnter the role:\nEnter the city:\nName: Al\nRole: nurse\nCity: Lima\n` | short values |
| t4 | `Mary\ndata analyst\nViet Nam` | `Enter the name:\nEnter the role:\nEnter the city:\nName: Mary\nRole: data analyst\nCity: Viet Nam\n` | values with spaces |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
