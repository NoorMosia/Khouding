# Hidden tests, p06-repeat-text

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `hi\n3` | `Enter text and count:\nhi\nhi\nhi\n` | hi three times |
| t2 | `yo\n1` | `Enter text and count:\nyo\n` | yo once |
| t3 | `x\n0` | `Enter text and count:\n` | zero times: nothing after the prompt |
| t4 | `ok\n4` | `Enter text and count:\nok\nok\nok\nok\n` | ok four times |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
