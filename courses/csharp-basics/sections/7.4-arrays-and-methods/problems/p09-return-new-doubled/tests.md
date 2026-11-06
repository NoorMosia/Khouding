# Hidden tests, p09-return-new-doubled

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n1\n2\n3` | `2\n4\n6\n---\n1\n2\n3\n` | doubled 2 4 6, original 1 2 3 |
| t2 | `1\n5` | `10\n---\n5\n` | edge - length 1 |
| t3 | `0` | `---\n` | edge - length 0: just the --- line |
| t4 | `2\n-4\n0` | `-8\n0\n---\n-4\n0\n` | negative and zero |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
