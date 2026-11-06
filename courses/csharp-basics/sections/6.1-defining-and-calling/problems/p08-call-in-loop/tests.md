# Hidden tests, p08-call-in-loop

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3` | `Enter a count:\n1\n-\n2\n-\n3\n-\n` | 1 dash 2 dash 3 dash |
| t2 | `1` | `Enter a count:\n1\n-\n` | 1 then dash |
| t3 | `0` | `Enter a count:\n` | zero iterations: only the prompt |
| t4 | `4` | `Enter a count:\n1\n-\n2\n-\n3\n-\n4\n-\n` | four pairs |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
