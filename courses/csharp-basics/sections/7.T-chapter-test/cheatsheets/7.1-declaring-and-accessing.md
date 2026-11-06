# Cheatsheet, 7.1 Declaring and accessing arrays

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Declare and build
```csharp
int[] a = new int[3];        // 3 slots, all default (0 for int)
int[] b = { 10, 20, 30 };    // literal: filled, length counted for you
string[] s = new string[2];  // array of another type
```

## Access by index
```csharp
a[0] = 90;                   // write the first slot
int x = a[0];                // read it
Console.WriteLine(a[2]);     // print a slot
```

## Index rules
| Thing | Value |
|-------|-------|
| First index | `0` |
| Last index | `a.Length - 1` |
| Valid range | `0 .. a.Length - 1` |
| Number of slots | `a.Length` (fixed) |

## Default values
A `new int[n]` starts every slot at `0`. A `new string[n]` starts every slot at `null`.

## Swap two elements
```csharp
int temp = a[0];
a[0] = a[1];
a[1] = temp;
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1586: Array creation must have array size or array initializer` | `new int[]` with no size and no `{ }` | give a size `new int[3]` or an initializer `{ 10, 20 }` |
| `CS0029: Cannot implicitly convert type 'string' to 'int'` | indexed with a non-int, e.g. `a["x"]` | use a whole number: `a[0]` |
| `System.IndexOutOfRangeException` (runtime) | index outside `0 .. Length-1`, often `a[a.Length]` | use `a[a.Length - 1]` for the last; stay in bounds |

The last one is a runtime crash, not a compile error: the compiler cannot know the index until the program runs.
