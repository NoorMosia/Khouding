# Problem 07, Coin name (language-independent design)

**Sub-skill:** a realistic one-value dispatch with `switch`.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter coin value in cents:` on its own line and read a whole number. Print the coin name: `1` is
`penny`, `5` `nickel`, `10` `dime`, `25` `quarter`. For any other value print `not a coin`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then a coin name or `not a coin`.

## Why it resists a trivial answer
Cases hit all four coin values and two non-coin values that must reach `default`, so a switch missing a case
or the default fails.
