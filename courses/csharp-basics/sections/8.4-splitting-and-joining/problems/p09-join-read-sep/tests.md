# Hidden tests, p09-join-read-sep

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\none\ntwo\nthree\n-` | `one-two-three\n` | one-two-three |
| t2 | `3\na\nb\nc\n | ` | `a | b | c\n` | a | b | c |
| t3 | `1\nsolo\n,` | `solo\n` | single word: solo |
| t4 | `2\nhello\nworld\n...` | `hello...world\n` | hello...world |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
