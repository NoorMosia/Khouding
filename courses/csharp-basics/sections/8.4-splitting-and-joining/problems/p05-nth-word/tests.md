# Hidden tests, p05-nth-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one two three\n1` | `two\n` | two |
| t2 | `one two three\n0` | `one\n` | one (first) |
| t3 | `one two three\n2` | `three\n` | three (last) |
| t4 | `alpha beta gamma delta\n2` | `gamma\n` | gamma |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
