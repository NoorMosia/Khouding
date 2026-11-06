# Problem 12, Receipt capstone (language-independent design)

**Sub-skill:** integrative, a three-parameter method that computes and formats, driven by `Main`'s input.
**Difficulty:** 3

## Statement (student-facing)
Define a `static void` method `PrintLine` that takes a `string item`, an `int quantity`, and an `int price`,
and prints the line `<item> x<quantity> = <total>` where `total` is `quantity * price` (for example
`apple x3 = 6`). In `Main`, prompt `Enter item, quantity, price:` on its own line, read the item (line 1), the
quantity (line 2), and the price (line 3), and call `PrintLine`.

## I/O contract
- **Input:** line 1 the item, lines 2 and 3 whole numbers (quantity, price).
- **Output:** the prompt, then the receipt line.

## Why it resists a trivial answer
Three parameters combine into a formatted line that includes a computed total. Cases vary all three
(including a zero quantity), so each parameter must be used and the total computed inside the method.

## Note
Build the line with interpolation, for example `$"{item} x{quantity} = {quantity * price}"`.
