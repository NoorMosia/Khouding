# Hidden tests, p12-ticket-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `3\n0` | `Enter age and weekend flag (0 or 1):\nfree\n` | under 5 -> free (weekend flag ignored) |
| t2 | `10\n0` | `Enter age and weekend flag (0 or 1):\nchild weekday\n` | child, weekday -> child weekday |
| t3 | `10\n1` | `Enter age and weekend flag (0 or 1):\nchild weekend\n` | child, weekend -> child weekend |
| t4 | `30\n0` | `Enter age and weekend flag (0 or 1):\nadult weekday\n` | adult, weekday -> adult weekday |
| t5 | `30\n1` | `Enter age and weekend flag (0 or 1):\nadult weekend\n` | adult, weekend -> adult weekend |
| t6 | `5\n1` | `Enter age and weekend flag (0 or 1):\nchild weekend\n` | age edge: 5 is child -> child weekend |
| t7 | `18\n0` | `Enter age and weekend flag (0 or 1):\nadult weekday\n` | age edge: 18 is adult -> adult weekday |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
