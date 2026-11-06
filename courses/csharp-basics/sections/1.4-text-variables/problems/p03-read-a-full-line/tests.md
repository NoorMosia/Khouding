# Hidden tests, p03-read-a-full-line

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Ada Lovelace` | `Ada Lovelace\n` | a full name with a space |
| t2 | `hello` | `hello\n` | single word |
| t3 | `hello there friend` | `hello there friend\n` | several words |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
