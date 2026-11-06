# Hidden tests, p08-reverse-words

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one two three` | `three\ntwo\none\n` | three then two then one |
| t2 | `hello` | `hello\n` | single word: hello |
| t3 | `a b c d` | `d\nc\nb\na\n` | d c b a |
| t4 | `first last` | `last\nfirst\n` | last then first |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
