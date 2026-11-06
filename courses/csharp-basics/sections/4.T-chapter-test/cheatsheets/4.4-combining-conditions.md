# Cheatsheet, 4.4 Combining conditions

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The three logical operators
Each takes booleans and produces a `bool`.

| Operator | Reads | True when |
|----------|-------|-----------|
| `&&` | and | both sides are true |
| `\|\|` | or | at least one side is true |
| `!` | not | the single operand is false (it flips the value) |

```csharp
Console.WriteLine(true && false);   // False, both must be true
Console.WriteLine(true || false);   // True, one is enough
Console.WriteLine(!true);           // False, flipped
```

## Combine with comparisons
Both sides of `&&` and `||` should be full conditions, each producing a `bool`.
```csharp
bool working  = age >= 18 && age < 65;   // in a band: both bounds
bool outside  = n < 10 || n > 20;        // out of a band: either side
bool notZero  = !(x == 0);               // same as x != 0
```

## Range checks
A value inside a band uses `&&`; outside the band uses `||`. They are opposites.
```csharp
bool inRange  = x >= lo && x <= hi;      // within lo..hi inclusive
bool outRange = x < lo  || x > hi;       // the complement
```

## Parenthesise when you mix && and ||
`&&` binds tighter than `||`, so `a || b && c` means `a || (b && c)`. Do not rely on the reader knowing that.
Put parentheses where you mean them.
```csharp
bool r = a > 0 && (b > 0 || c > 0);      // a must hold, and at least one of b, c
```

## Booleans from input
There is no bool parsing yet. Read a yes/no flag as an `int` (0 or 1) and compare it.
```csharp
int flag = int.Parse(Console.ReadLine());
bool ok = age >= 18 && flag == 1;
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1002: ; expected` (pointing at `and`/`or`) | you wrote the word `and` or `or` | use the symbols `&&` and `\|\|` |
| `CS0023: Operator '!' cannot be applied to operand of type 'int'` | `!` was used on a number, not a `bool` | negate a comparison, e.g. `!(n > 0)` |
| `CS0019: Operator '&&' cannot be applied to operands of type 'bool' and 'int'` | one side of `&&`/`\|\|` is not a condition | make both sides full comparisons, e.g. `age >= 18 && age < 65` |

Short-circuit note: `&&` stops if the left side is false, `||` stops if the left side is true. It changes no
result you see here; it only matters once a condition can cause side effects (a later topic).
