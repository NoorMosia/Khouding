# p06, Crate order (Family B, named constants)

**Integrates:** `const` + `*` (1.3) + naming (1.5) + multi-line output (1.2).

## Statement (student-facing)
A crate holds 12 bottles, and each bottle costs 3. An order is 4 crates. Use well-named `const` variables
for the 12 and the 3. Print the total number of bottles, then the total cost.

Print exactly:

```
48
144
```

## Why it belongs in the boss
Two named constants feeding a two-step computation (`crates * bottlesPerCrate`, then `* pricePerBottle`).
A value-varied named-constants variant.
