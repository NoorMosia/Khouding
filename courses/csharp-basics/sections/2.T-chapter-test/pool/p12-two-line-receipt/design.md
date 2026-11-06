# Pool p12, Two-line receipt (family C, money / formatting)

**Integrates:** 2.2 (parse), 2.5 (`:F2` money), multi-line output.
**Difficulty:** 2

## Statement (student-facing)
Read an item price and a tax (each prompted on its own line, each a decimal). Using `:F2`, print two labelled
lines: `Item: <item to 2 decimals>` and `Tax: <tax to 2 decimals>`.

## I/O contract
- **Input:** two lines, each a decimal number.
- **Output:** the two prompts, then the two labelled formatted lines in order.

## Why it resists a trivial answer
Two varying amounts formatted to two decimals across two lines; padding and zero cases require the format and
the fixed layout must match exactly.
