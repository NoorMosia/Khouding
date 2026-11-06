# Pool p11, Order total (family C, money / formatting)

**Integrates:** 2.2 (parse + compute, mixed types), 2.5 (`:F2` money).
**Difficulty:** 2

## Statement (student-facing)
Read a count (whole number) and a unit price (decimal), each prompted on its own line. Compute the total
(count multiplied by unit price) and print `Total: ` followed by the total to two decimal places.

## I/O contract
- **Input:** two lines: a whole number (count), then a decimal (unit price).
- **Output:** the two prompts, then `Total: <total to 2 decimals>` on its own line.

## Why it resists a trivial answer
Two varying inputs of different types combined and formatted. The count-zero case gives `0.00`, padding cases
need the format, and values are chosen so the total is clean under invariant culture.
