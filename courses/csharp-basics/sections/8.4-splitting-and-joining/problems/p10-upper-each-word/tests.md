# Hidden tests, p10-upper-each-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world` | `HELLO WORLD\n` | HELLO WORLD |
| t2 | `one two three` | `ONE TWO THREE\n` | ONE TWO THREE |
| t3 | `ALREADY` | `ALREADY\n` | single already-upper: ALREADY |
| t4 | `a b c d` | `A B C D\n` | A B C D |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
