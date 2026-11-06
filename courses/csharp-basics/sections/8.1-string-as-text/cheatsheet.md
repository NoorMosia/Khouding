# Cheatsheet, 8.1 A string is text you can measure and index

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Length
```csharp
string s = "hello";
int n = s.Length;      // 5
```

## Index a character (zero-based)
```csharp
char first = s[0];              // 'h'
char last  = s[s.Length - 1];  // 'o'
```

| Thing | Value |
|-------|-------|
| First index | `0` |
| Last index | `s.Length - 1` |
| Valid range | `0 .. s.Length - 1` |
| Number of characters | `s.Length` |

## char is its own type
```csharp
char c = s[1];         // single character, single quotes: 'e'
Console.WriteLine(c);  // prints the letter
bool same = (c == 'e');// compare chars with ==
```
A `char` uses single quotes (`'a'`); a string uses double quotes (`"a"`). `s[i]` is a `char`, not a one-letter
string.

## Strings are immutable
```csharp
s[0] = 'H';   // does NOT compile (CS0200): a string is read-only
```
To get a changed string, make a new one (the methods in 8.3 return new strings; the original is untouched).

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0200: Property or indexer 'string.this[int]' cannot be assigned to -- it is read only` | tried `s[i] = c` (strings are immutable) | build a new string instead (8.3 methods return new) |
| `System.IndexOutOfRangeException` (runtime) | index outside `0 .. Length-1`, often `s[s.Length]` | use `s[s.Length - 1]` for the last; stay in bounds |
