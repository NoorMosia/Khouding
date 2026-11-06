# Cheatsheet, 8.4 Splitting and joining

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Split: one string into a string[]
```csharp
string[] parts = s.Split(' ');   // split on space
string[] csv   = s.Split(',');   // split on comma
int n = parts.Length;            // number of pieces (Ch.7 .Length)
string first = parts[0];         // first piece
string last  = parts[parts.Length - 1]; // last piece
```

## Walk the pieces (Ch.7 array walk)
```csharp
foreach (string word in s.Split(' ')) { Console.WriteLine(word); }
```
Or with an indexed `for` when you need the position.

## Join: string[] into one string
```csharp
string result = string.Join(", ", parts);   // "a, b, c"
string result = string.Join("-", parts);    // "a-b-c"
```
Argument order: **separator first, array second**.

## Round trip
```csharp
string[] parts = s.Split(' ');
string rejoined = string.Join("-", parts);  // space-separated in, hyphen-separated out
```

## Edge cases
| Input | `s.Split(' ').Length` |
|-------|-----------------------|
| `"one two three"` | 3 |
| `"hello"` (no space) | 1 (whole string is one piece) |
| `""` (empty string) | 1 (one empty piece) |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| (no error) wrong joined output | separator and array swapped in `string.Join` | `string.Join(separator, array)`, separator first |
| `System.IndexOutOfRangeException` (runtime) | indexed past `parts.Length - 1` | stay in bounds |

`Split` returns a `string[]`; all Chapter 7 array rules apply.
