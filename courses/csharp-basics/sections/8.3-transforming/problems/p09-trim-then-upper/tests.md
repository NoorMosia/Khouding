# Hidden tests, p09-trim-then-upper

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `  hello world  ` | `HELLO WORLD\n` | HELLO WORLD |
| t2 | `  already UPPER  ` | `ALREADY UPPER\n` | ALREADY UPPER |
| t3 | `nospaces` | `NOSPACES\n` | NOSPACES |
| t4 | `  a  ` | `A\n` | A |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
