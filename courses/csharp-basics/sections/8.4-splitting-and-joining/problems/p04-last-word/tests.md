# Hidden tests, p04-last-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world` | `world\n` | world |
| t2 | `one two three` | `three\n` | three |
| t3 | `end` | `end\n` | single word: end |
| t4 | `a b c d` | `d\n` | d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
