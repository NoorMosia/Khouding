# Hidden tests, p08-immutability-show

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hello` | `HELLO\nhello\n` | HELLO then hello |
| t2 | `Hello World` | `HELLO WORLD\nHello World\n` | HELLO WORLD then Hello World |
| t3 | `CAPS` | `CAPS\nCAPS\n` | both same: CAPS then CAPS |
| t4 | `mixed Case` | `MIXED CASE\nmixed Case\n` | MIXED CASE then mixed Case |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
