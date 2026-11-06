# Cheatsheet, 9.5 Lists and methods

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## List parameter, value returned
```csharp
static int Sum(List<int> list)
{
    int total = 0;
    foreach (int x in list) total = total + x;
    return total;
}
// call: int s = Sum(numbers);
```

## The key behaviour: a list is shared by reference
| Passed | Method does | Caller sees change? |
|--------|-------------|---------------------|
| `int` | `x = x + 1` | no (copied) |
| `List<int>` element | `list[i] = ...` | yes (same list) |
| `List<int>` Add/Remove | `list.Add(x)` | yes (same list) |
| `List<int>` parameter | `list = new List<int>()` | no (own copy of reference) |

## Mutate in place (void)
```csharp
static void DoubleAll(List<int> list)
{
    for (int i = 0; i < list.Count; i++) list[i] = list[i] * 2;
}
```

## Return a new list
```csharp
static List<int> Range(int n)
{
    var result = new List<int>();
    for (int i = 1; i <= n; i++) result.Add(i);
    return result;
}
// List<int> return type
```

## File + list pattern (8.6 + 9.1 combined)
```csharp
var list = new List<int>();
using (var reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null) list.Add(int.Parse(line));
}
// write a list:
using (var writer = new StreamWriter("output.txt"))
{
    foreach (int x in list) writer.WriteLine(x);
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| (no error) caller does not see the change | method did `list = new List<int>(...)` | mutate elements or Add/Remove; do not reassign the parameter |
| `CS1503: cannot convert from 'int' to 'List<int>'` | passed a single value where a list is expected | pass the list variable itself |
