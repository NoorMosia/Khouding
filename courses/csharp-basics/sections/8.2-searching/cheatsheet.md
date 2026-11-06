# Cheatsheet, 8.2 Searching inside a string

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The query methods
```csharp
string s = "hello world";
bool has   = s.Contains("world");   // True  (present anywhere?)
int  at    = s.IndexOf("o");         // 4     (first index, or -1 if absent)
bool pre   = s.StartsWith("hell");   // True
bool suf   = s.EndsWith("rld");      // True
int  space = s.IndexOf(' ');         // 5     (a char works too)
bool hasW  = s.Contains('w');        // True  (a char works too)
```

| Method | Returns | Meaning |
|--------|---------|---------|
| `Contains(part)` | `bool` | is `part` anywhere in the string |
| `IndexOf(part)` | `int` | index of the first occurrence, or `-1` if absent |
| `StartsWith(pre)` | `bool` | does the string begin with `pre` |
| `EndsWith(suf)` | `bool` | does the string end with `suf` |

- `s.Contains(part)` is the same as `s.IndexOf(part) != -1`.
- All queries are **read-only** (the string is unchanged) and **case-sensitive** here (ASCII, invariant).
- `-1` means **not found** (same sentinel as 7.3 array search).

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `System.IndexOutOfRangeException` (runtime) | used an `IndexOf` result of `-1` as a real index | check `IndexOf(...) != -1` before using it as a position |

`IndexOf` returning `-1` is not a compiler error (the compiler cannot know if the target is present); handle the
not-found case yourself.
