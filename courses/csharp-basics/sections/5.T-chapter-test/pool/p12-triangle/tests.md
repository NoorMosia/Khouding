# Hidden tests, p12-triangle

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `4` | `Enter a height:\n#\n##\n###\n####\n` | #, ##, ###, #### |
| t2 | `1` | `Enter a height:\n#\n` | single |
| t3 | `3` | `Enter a height:\n#\n##\n###\n` | #, ##, ### |
| t4 | `5` | `Enter a height:\n#\n##\n###\n####\n#####\n` | five rows |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
