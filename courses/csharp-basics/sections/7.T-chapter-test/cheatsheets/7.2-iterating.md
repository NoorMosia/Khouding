# Cheatsheet, 7.2 Iterating over an array

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The index walk (position matters, or you write elements)
```csharp
for (int i = 0; i < a.Length; i++)
{
    Console.WriteLine(a[i]);   // i is the index
}
```
Condition is `i < a.Length` (not `<=`). Last index touched is `a.Length - 1`.

## foreach (read-only, when you only need the value)
```csharp
foreach (int x in a)
{
    Console.WriteLine(x);      // x is a copy of each element
}
```
Cannot assign to `x`; to change elements use the indexed `for` and write `a[i]`.

## Write through the index
```csharp
for (int i = 0; i < a.Length; i++) { a[i] = a[i] * 2; }
```

## Filter shape (print only some)
```csharp
foreach (int x in a) { if (x > 0) Console.WriteLine(x); }
```

## Map shape (print each transformed)
```csharp
foreach (int x in a) { Console.WriteLine(x * 2); }
```

## Other index tricks
| Goal | Loop |
|------|------|
| reverse order | `for (int i = a.Length - 1; i >= 0; i--)` |
| 1-based position | print `i + 1` alongside `a[i]` |
| every other | `for (int i = 0; i < a.Length; i += 2)` |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1656: Cannot assign to 'x' because it is a 'foreach iteration variable'` | tried to change a `foreach` value | use an indexed `for` and assign `a[i]` |
| `System.IndexOutOfRangeException` (runtime) | loop bound was `i <= a.Length` (one too far) | use `i < a.Length` |

`foreach` reads; the indexed `for` reads or writes. A length-0 array makes either loop run zero times.
