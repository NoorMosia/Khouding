# Hidden tests, p11-round-trip

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `one two three` | `one-two-three\n` | one-two-three |
| t2 | `hello world` | `hello-world\n` | hello-world |
| t3 | `just one` | `just-one\n` | just-one |
| t4 | `a b c d e` | `a-b-c-d-e\n` | a-b-c-d-e |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
