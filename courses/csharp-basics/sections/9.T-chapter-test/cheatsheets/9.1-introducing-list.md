# Cheatsheet, 9.1 Introducing List\<T\>

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Required using
```csharp
using System.Collections.Generic;
```
Without it: CS0246 (`List<>` not found).

## Create and add
```csharp
var list = new List<int>();   // empty list
list.Add(10);                  // appends 10
list.Add(20);                  // appends 20
```

## Count and index
```csharp
int n     = list.Count;        // number of elements
int first = list[0];           // first element
int last  = list[list.Count - 1]; // last element
int x     = list[i];           // element at index i (0-based)
```

| Thing | Value |
|-------|-------|
| First index | `0` |
| Last index | `list.Count - 1` |
| Valid range | `0 .. list.Count - 1` |
| Element count | `list.Count` |

## Count-then-values build
```csharp
int n = int.Parse(Console.ReadLine());
for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
```

## Sentinel build
```csharp
string line = Console.ReadLine();
while (line != "stop") { list.Add(int.Parse(line)); line = Console.ReadLine(); }
```

## Assign by index
```csharp
list[1] = 99;   // overwrite index 1 (must already exist)
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0246: The type or namespace name 'List<>' could not be found` | missing `using System.Collections.Generic;` | add the using directive |
| `System.ArgumentOutOfRangeException` (runtime) | index outside `0 .. Count-1`, often `list[list.Count]` | use `list[list.Count - 1]` for the last; stay in bounds |
