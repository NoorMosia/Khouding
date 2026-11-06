# Hidden tests, p08-process-until-invalid

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n3\n7\n-2\n9\n1` | `Enter a count:\n3\n7\nstopped\n` | echo 3,7 then -2 is invalid -> stopped |
| t2 | `3\n1\n2\n3` | `Enter a count:\n1\n2\n3\n` | all valid -> echo 1 2 3, no stopped line |
| t3 | `2\n-5\n4` | `Enter a count:\nstopped\n` | first value invalid -> stopped immediately (nothing echoed) |
| t4 | `3\n4\n0\n9` | `Enter a count:\n4\nstopped\n` | 0 is invalid -> echo 4 then stopped |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
