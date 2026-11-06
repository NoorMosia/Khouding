# Hidden tests, p06-next-years-age

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `17` | `Enter your age:\nNext year you will be 18\n` | typical |
| t2 | `0` | `Enter your age:\nNext year you will be 1\n` | newborn |
| t3 | `64` | `Enter your age:\nNext year you will be 65\n` | older |
| t4 | `99` | `Enter your age:\nNext year you will be 100\n` | large |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
