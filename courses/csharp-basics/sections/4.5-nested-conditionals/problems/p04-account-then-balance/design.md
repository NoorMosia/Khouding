# Problem 04, Account, then balance (language-independent design)

**Sub-skill:** when NOT to flatten, the inner question only makes sense once the outer holds.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter account flag and balance:` on its own line. Read an account flag (line 1, `1` has an account,
`0` does not) and a balance (line 2, a whole number). If there is an account, print `overdrawn` when the
balance is below 0, otherwise `ok`. If there is no account, print `no account`.

## I/O contract
- **Input:** two lines. Line 1 is `0` or `1`; line 2 is a whole number.
- **Output:** the prompt, then one of `overdrawn`, `ok`, `no account`.

## Why it resists a trivial answer
The balance check is meaningless without an account, so it belongs inside the account branch; the no-account
case ignores the balance entirely. Cases cover account with negative, zero, and positive balances, plus
no-account with different balances. A flat `&&` cannot produce three distinct outputs, so nesting is required.

## Note
The account flag is read as an `int` and compared with `== 1` (no bool parsing yet).
