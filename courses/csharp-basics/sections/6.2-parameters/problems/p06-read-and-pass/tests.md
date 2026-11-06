# Hidden tests, p06-read-and-pass

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\n36` | `Enter name and age:\nAda is 36\n` | Ada is 36 |
| t2 | `Bo\n9` | `Enter name and age:\nBo is 9\n` | Bo is 9 |
| t3 | `Cy\n0` | `Enter name and age:\nCy is 0\n` | Cy is 0 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
