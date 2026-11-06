# Hidden tests, p04-char-at-index

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello\n1` | `e\n` | e |
| t2 | `hello\n0` | `h\n` | first: h |
| t3 | `hello\n4` | `o\n` | last in-bounds: o |
| t4 | `abcdef\n3` | `d\n` | d |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
