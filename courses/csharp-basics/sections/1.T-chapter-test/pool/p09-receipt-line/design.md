# p09, Receipt line (Family C, model and format)

**Integrates:** types (1.3/1.4) + compute `*` (1.3) + formatted output with tabs (1.2) + naming (1.5).

## Statement (student-facing)
A receipt line is 3 units of `Coffee` at a unit price of `2.5`. Declare the item (text), the quantity
(whole number), and the unit price (fractional). Compute the line total (quantity times unit price). Print
three lines, each a label, a tab, then the value:

```
Item:	Coffee
Qty:	3
Total:	7.5
```

Put each label and value on one line using `Write` for the label (ending with `\t`) and `WriteLine` for the
value. (No string joining with `+`, that is a later section.)

## Why it belongs in the boss
Full model-and-format: three types, a computed `double` total, and tab-aligned labelled output, byte-exact.
A value-varied model-and-format variant.
