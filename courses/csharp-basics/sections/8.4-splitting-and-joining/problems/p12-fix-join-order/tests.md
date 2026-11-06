# Hidden tests, p12-fix-join-order

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\none\ntwo\nthree` | `one, two, three\n` | one, two, three |
| t2 | `1\nsolo` | `solo\n` | solo |
| t3 | `2\nalpha\nbeta` | `alpha, beta\n` | alpha, beta |
| t4 | `4\na\nb\nc\nd` | `a, b, c, d\n` | a, b, c, d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
