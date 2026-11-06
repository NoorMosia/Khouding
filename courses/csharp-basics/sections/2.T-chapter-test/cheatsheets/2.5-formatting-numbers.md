# Cheatsheet, 2.5 Formatting numbers for output

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Fixed decimal places with :F2
```csharp
double price = double.Parse(Console.ReadLine());
Console.WriteLine($"{price:F2}");   // two decimal places
```
Examples:
```
7.5   -> 7.50     (pads with a trailing zero)
10    -> 10.00    (whole value still shows two decimals)
2.345 -> 2.35     (rounds the display)
0     -> 0.00
```
`:F2` goes inside the interpolation hole, after the value and a colon. `F` means fixed-point, `2` is the
number of decimal places.

## Formatting is display, not the stored value
```csharp
double x = 0.1 + 0.2;
Console.WriteLine(x);          // 0.30000000000000004  (raw)
Console.WriteLine($"{x:F2}");  // 0.30                 (formatted)
```
The format changes how the number looks when printed. The value in the variable does not change.

## Showing money
```csharp
Console.WriteLine($"Price: {price:F2}");   // label + two-decimal amount
```
Two decimals is the normal shape for money. Keep the presentation plain (a label and the amount); currency
symbols depend on country and are a separate topic.

## Floating-point: double vs float
- A **floating-point** number holds a value with a fractional part (`4.99`, `0.5`).
- Not every decimal is stored exactly; some are kept as the closest approximation. That is why `0.1 + 0.2`
  prints with stray digits, and why you format for display.
- **`double`**: the default, about 15 to 16 significant digits.
- **`float`**: smaller, about 6 to 7 digits, so less precise.
- Reach for `double` unless you have a specific reason not to.

## Common error

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Printed money as a raw double: `$"{price}"` | shows natural digits: `7.5`, `10`, or stray imprecise digits | add the format: `$"{price:F2}"` |

Forgetting the format is a silent display problem: it compiles and runs, the number is just shown in the
wrong shape. When money looks like `7.5` instead of `7.50`, the `:F2` is missing.
