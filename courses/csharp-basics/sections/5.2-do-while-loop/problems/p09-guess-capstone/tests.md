# Hidden tests, p09-guess-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `7\n3\n5\n7` | `Enter the secret, then guesses:\n3\n` | secret 7, guesses 3,5,7 -> 3 guesses |
| t2 | `4\n4` | `Enter the secret, then guesses:\n1\n` | correct on the first guess -> 1 |
| t3 | `9\n1\n9` | `Enter the secret, then guesses:\n2\n` | two guesses -> 2 |
| t4 | `2\n8\n8\n2` | `Enter the secret, then guesses:\n3\n` | wrong guesses may repeat -> 3 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
