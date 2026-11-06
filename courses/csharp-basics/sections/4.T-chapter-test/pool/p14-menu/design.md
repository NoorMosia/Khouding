# Pool p14, Menu (family D, switch)

**Integrates:** 4.6.
**Difficulty:** 1

## Statement (student-facing)
Prompt `Choose an option (1-3):` on its own line and read a whole number. Print `new game` for `1`, `continue`
for `2`, `exit` for `3`. For any other number print `invalid`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then one of `new game`, `continue`, `exit`, `invalid`.

## Why it resists a trivial answer
Cases hit all three options and two off-menu values reaching `default`, so a switch missing a case or the
default fails.
