# Hidden tests, p03-first-word

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello world` | `hello\n` | hello |
| t2 | `one two three` | `one\n` | one |
| t3 | `just one` | `just\n` | just |
| t4 | `solo` | `solo\n` | single word: solo |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
