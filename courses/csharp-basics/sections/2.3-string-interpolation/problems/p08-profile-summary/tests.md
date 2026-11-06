# Hidden tests, p08-profile-summary

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLisbon\n36` | `Enter your name:\nEnter your city:\nEnter your age:\nName: Ada\nCity: Lisbon\nAge: 36\n` | typical |
| t2 | `Grace\nNairobi\n85` | `Enter your name:\nEnter your city:\nEnter your age:\nName: Grace\nCity: Nairobi\nAge: 85\n` | different values |
| t3 | `Jun\nLima\n0` | `Enter your name:\nEnter your city:\nEnter your age:\nName: Jun\nCity: Lima\nAge: 0\n` | age zero |
| t4 | `Al\nViet Nam\n7` | `Enter your name:\nEnter your city:\nEnter your age:\nName: Al\nCity: Viet Nam\nAge: 7\n` | value with a space |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
