# Cheatsheet, 4.1 Booleans and comparisons

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## bool
A `bool` holds `true` or `false`. Printed, it shows **`True`** or **`False`** (capitalised):
```csharp
bool ready = true;
Console.WriteLine(ready);   // True
```

## The comparison operators
Each produces a `bool`:
| Operator | Means |
|----------|-------|
| `==` | equal to |
| `!=` | not equal to |
| `<`  | less than |
| `>`  | greater than |
| `<=` | less than or equal |
| `>=` | greater than or equal |

```csharp
Console.WriteLine(5 > 3);    // True
Console.WriteLine(5 == 3);   // False
```

## Store the answer
A comparison is a value, so you can keep it in a `bool`:
```csharp
bool isAdult = age >= 18;
Console.WriteLine(isAdult);   // True or False
```

## The boundary
`>=` and `<=` include the edge; `>` and `<` do not:
```csharp
18 >= 18   // True  (equal counts)
18 >  18   // False (strictly greater)
```
Choosing `>` vs `>=` is often the difference between a correct and an off-by-one result.

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| `=` where you meant `==` (e.g. `bool x = a = b;`) | `error CS0029: Cannot implicitly convert type 'int' to 'bool'` | use `==` to compare: `bool x = a == b;` |
| expected `18 > 18` to be `True` | it is `False`; `>` is strict | use `>=` when the boundary should count |

`==` compares, `=` assigns. When CS0029 mentions `int` and `bool` on a line where you meant to compare, you
wrote `=` instead of `==`.
