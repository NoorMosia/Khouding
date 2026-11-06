# Hidden tests, p06-grade-then-distinction

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `97` | `Enter a score:\nA with distinction\n` | A band, >=95 -> A with distinction |
| t2 | `92` | `Enter a score:\nA\n` | A band, below 95 -> A |
| t3 | `95` | `Enter a score:\nA with distinction\n` | edge: 95 -> A with distinction |
| t4 | `85` | `Enter a score:\nB\n` | B band -> B |
| t5 | `72` | `Enter a score:\nC\n` | C band -> C |
| t6 | `50` | `Enter a score:\nfail\n` | below 70 -> fail |
| t7 | `90` | `Enter a score:\nA\n` | A band low edge, below 95 -> A |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
