# Hidden tests, p12-seating-capstone

> GENERATED human mirror. Expected values produced by running the reference
> solution (the oracle), never hand-typed. Regenerate: `node kh.mjs gen`.
> Multiple varied inputs incl. edge cases → a hardcoded literal cannot pass all of them.

| # | stdin | expected stdout | why |
|---|-------|-----------------|-----|
| t1 | `2\n3` | `Enter rows and seats:\nR1S1 R1S2 R1S3\nR2S1 R2S2 R2S3\n` | R1S1 R1S2 R1S3 / R2S1 R2S2 R2S3 |
| t2 | `1\n4` | `Enter rows and seats:\nR1S1 R1S2 R1S3 R1S4\n` | one row R1S1..R1S4 |
| t3 | `3\n1` | `Enter rows and seats:\nR1S1\nR2S1\nR3S1\n` | three rows each one seat R1S1 / R2S1 / R3S1 |
| t4 | `2\n2` | `Enter rows and seats:\nR1S1 R1S2\nR2S1 R2S2\n` | R1S1 R1S2 / R2S1 R2S2 |

Pass condition: stdout matches expected exactly (CRLF→LF normalized) for **all** cases.
