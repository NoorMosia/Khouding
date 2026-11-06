# Pool p16, Code lookup (family D, switch)

**Integrates:** 4.6 (switch on a string).
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a currency code:` on its own line and read the code as text. Print `British Pound` for `GBP`,
`US Dollar` for `USD`, `Euro` for `EUR`. For anything else print `unknown`.

## I/O contract
- **Input:** one line of text.
- **Output:** the prompt, then one of `British Pound`, `US Dollar`, `Euro`, `unknown`.

## Why it resists a trivial answer
Cases include an unmatched code and a lowercase `usd`, which must reach `default` because the match is
case-sensitive. A switch that drops the default or uses wrong labels fails.
