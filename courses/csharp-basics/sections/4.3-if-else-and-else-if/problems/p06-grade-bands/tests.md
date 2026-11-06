# Hidden tests, p06-grade-bands

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `95` | `Enter the score:\nA\n` | A |
| t2 | `80` | `Enter the score:\nB\n` | B (lower edge of B) |
| t3 | `70` | `Enter the score:\nC\n` | C (lower edge of C) |
| t4 | `60` | `Enter the score:\nfail\n` | fail |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
