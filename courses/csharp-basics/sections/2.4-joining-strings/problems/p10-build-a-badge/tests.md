# Hidden tests, p10-build-a-badge

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLisbon\n36` | `Enter your name:\nEnter your city:\nEnter your age:\nAda from Lisbon, age 36\n` | typical |
| t2 | `Grace\nNairobi\n85` | `Enter your name:\nEnter your city:\nEnter your age:\nGrace from Nairobi, age 85\n` | different values |
| t3 | `Al\nLima\n0` | `Enter your name:\nEnter your city:\nEnter your age:\nAl from Lima, age 0\n` | age zero |
| t4 | `Mary\nViet Nam\n41` | `Enter your name:\nEnter your city:\nEnter your age:\nMary from Viet Nam, age 41\n` | city with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
