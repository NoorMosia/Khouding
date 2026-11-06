# Hidden tests, p18-fix-elseif-order

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `95` | `Enter a score:\nA\n` | A; buggy order would print C |
| t2 | `85` | `Enter a score:\nB\n` | B; buggy order would print C |
| t3 | `75` | `Enter a score:\nC\n` | C (correct either way) |
| t4 | `60` | `Enter a score:\nfail\n` | fail |
| t5 | `90` | `Enter a score:\nA\n` | A low edge; buggy order prints C |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
