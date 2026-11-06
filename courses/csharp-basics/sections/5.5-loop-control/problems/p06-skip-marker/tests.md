# Hidden tests, p06-skip-marker

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `5\n4\n-1\n6\n-1\n2` | `Enter a count:\n12\n` | sum skipping -1 markers: 4+6+2 = 12 |
| t2 | `3\n1\n2\n3` | `Enter a count:\n6\n` | no markers -> 6 |
| t3 | `3\n-1\n-1\n-1` | `Enter a count:\n0\n` | all markers -> 0 |
| t4 | `4\n10\n0\n-1\n5` | `Enter a count:\n15\n` | 0 is kept (only -1 skipped): 10+0+5 = 15 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
