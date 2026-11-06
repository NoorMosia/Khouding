# Hidden tests, p10-spaces-to-hyphens

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `a b c` | `a-b-c\n` | a-b-c |
| t2 | `hello world` | `hello-world\n` | hello-world |
| t3 | `nospaces` | `nospaces\n` | no change: nospaces |
| t4 | `one two three four` | `one-two-three-four\n` | one-two-three-four |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
