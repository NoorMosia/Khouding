# Cheatsheet, 7.4 Arrays and methods

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Array parameter, value returned
```csharp
static int Sum(int[] a)
{
    int total = 0;
    foreach (int x in a) { total = total + x; }
    return total;
}
// call: int s = Sum(nums);
```

## The key behaviour: an array is shared by reference
| Pass this | Method changes it | Caller sees the change? |
|-----------|-------------------|-------------------------|
| an `int` (or other value) | `x = x + 1` | no (it got a copy) |
| an array's element | `a[i] = ...` | yes (same array) |
| the parameter itself | `a = new int[...]` | no (only its own copy of the reference) |

## Mutate in place (void; caller sees it)
```csharp
static void DoubleAll(int[] a)
{
    for (int i = 0; i < a.Length; i++) { a[i] = a[i] * 2; }
}
```

## Return a new array (caller's original unchanged)
```csharp
static int[] Doubled(int[] a)
{
    int[] result = new int[a.Length];
    for (int i = 0; i < a.Length; i++) { result[i] = a[i] * 2; }
    return result;
}
```

## Array and scalar parameters together
```csharp
static int CountOver(int[] a, int threshold) { ... }
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1503: Argument 1: cannot convert from 'int' to 'int[]'` | passed a single value where an array is expected | pass the array variable: `Sum(nums)` |
| (no error) caller does not see the change | method did `a = new int[...]` (reassigned the parameter) | mutate elements `a[i] = ...`, or return a new array and assign it |

Element changes reach the caller; reassigning the parameter does not.
