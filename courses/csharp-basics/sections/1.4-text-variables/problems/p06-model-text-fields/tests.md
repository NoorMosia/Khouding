# Hidden tests, p06-model-text-fields

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `Emma\nJane Austen` | `Emma\nJane Austen\n` | a book |
| t2 | `The Trial\nFranz Kafka` | `The Trial\nFranz Kafka\n` | title with a space |
| t3 | `1984\nGeorge Orwell` | `1984\nGeorge Orwell\n` | numeric-looking title (still text) |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
