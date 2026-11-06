# Cheatsheet, 9.2 Iterating a list

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The index walk (`list.Count` replaces `a.Length`)
```csharp
for (int i = 0; i < list.Count; i++)
{
    Console.WriteLine(list[i]);
}
```
Condition is `i < list.Count` (not `<=`). Count 0 means the loop runs zero times.

## foreach (read-only)
```csharp
foreach (int x in list)
{
    Console.WriteLine(x);
}
```
Cannot assign to `x`; to change elements use the indexed `for`.

## Filter and map shapes
```csharp
foreach (int x in list) { if (x > 0) Console.WriteLine(x); }  // filter
foreach (int x in list) { Console.WriteLine(x * 2); }          // map
```

## Other index tricks
| Goal | Loop |
|------|------|
| reverse order | `for (int i = list.Count - 1; i >= 0; i--)` |
| 1-based position | print `i + 1` alongside `list[i]` |
| every other | `for (int i = 0; i < list.Count; i += 2)` |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `System.ArgumentOutOfRangeException` (runtime) | loop bound was `i <= list.Count` (one too far) | use `i < list.Count` |

`foreach` reads; the indexed `for` reads or writes. A count-0 list makes either loop run zero times.
