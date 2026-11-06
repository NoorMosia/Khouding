# Hidden tests, p02-print-words

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one two three` | `one\ntwo\nthree\n` | three lines |
| t2 | `hello` | `hello\n` | 1 word |
| t3 | `a b c d` | `a\nb\nc\nd\n` | four lines |
| t4 | `red green blue` | `red\ngreen\nblue\n` | three colors |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
