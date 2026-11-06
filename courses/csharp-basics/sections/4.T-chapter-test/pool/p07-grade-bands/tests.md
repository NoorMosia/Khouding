# Hidden tests, p07-grade-bands

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `95` | `Enter a score:\nA\n` | A |
| t2 | `90` | `Enter a score:\nA\n` | A low edge |
| t3 | `85` | `Enter a score:\nB\n` | B |
| t4 | `70` | `Enter a score:\nC\n` | C low edge |
| t5 | `69` | `Enter a score:\nfail\n` | fail (just below C) |
| t6 | `40` | `Enter a score:\nfail\n` | fail |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
