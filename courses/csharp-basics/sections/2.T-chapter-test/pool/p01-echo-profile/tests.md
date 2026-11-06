# Hidden tests, p01-echo-profile

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLisbon` | `Enter your name:\nEnter your city:\nName: Ada\nCity: Lisbon\n` | typical |
| t2 | `Grace\nNairobi` | `Enter your name:\nEnter your city:\nName: Grace\nCity: Nairobi\n` | different values |
| t3 | `Al\nLima` | `Enter your name:\nEnter your city:\nName: Al\nCity: Lima\n` | short values |
| t4 | `Mary\nViet Nam` | `Enter your name:\nEnter your city:\nName: Mary\nCity: Viet Nam\n` | value with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
