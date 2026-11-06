# Hidden tests, p06-read-three-fields

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada\nLondon\nEngineer` | `Enter a name:\nEnter a city:\nEnter a role:\nAda\nLondon\nEngineer\n` | three fields |
| t2 | `Sam\nOslo\nTeacher` | `Enter a name:\nEnter a city:\nEnter a role:\nSam\nOslo\nTeacher\n` | different values |
| t3 | `Mara\nAccra\nDoctor` | `Enter a name:\nEnter a city:\nEnter a role:\nMara\nAccra\nDoctor\n` | another set |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
