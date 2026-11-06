# Hidden tests, p10-fix-dangling-else

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `1\n1` | `Enter a and b (0 or 1):\nboth\n` | a and b -> both |
| t2 | `1\n0` | `Enter a and b (0 or 1):\n` | a but not b -> (nothing); buggy version prints 'not a' |
| t3 | `0\n1` | `Enter a and b (0 or 1):\nnot a\n` | not a -> not a |
| t4 | `0\n0` | `Enter a and b (0 or 1):\nnot a\n` | not a -> not a (b ignored) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
