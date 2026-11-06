# Problem 08, Raw vs formatted (language-independent design)

**Sub-skill:** the motivation; print the same value raw and with `:F2` to see the difference.
**Difficulty:** 2

## Statement (student-facing)
Prompt `Enter a value:` on its own line and read it as a decimal number. Print two labelled lines: `Raw: ` then
the value printed with no format, and `Formatted: ` then the value to two decimal places.

## I/O contract
- **Input:** one line holding a decimal number.
- **Output:** the prompt, then `Raw: <value>` and `Formatted: <value to 2 decimals>` in order.

## Why it resists a trivial answer
The two lines differ for most inputs (`7.5` raw vs `7.50` formatted, `10` vs `10.00`), so a student sees
exactly what the format adds. Values are chosen so the raw print is clean and deterministic.
