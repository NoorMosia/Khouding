# Hidden tests, p20-banner

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `` | `========================\n  Welcome to "The Lab"\n========================\n` | no-input; reproduce a banner with leading spaces and literal quotes |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
