# Cheatsheet, 8.3 Transforming a string

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The transform methods (all return a NEW string; original unchanged)
```csharp
string s = "  Hello World  ";
s.ToUpper()           // "  HELLO WORLD  "  -- new string
s.ToLower()           // "  hello world  "  -- new string
s.Trim()              // "Hello World"       -- strips leading/trailing whitespace
s.Replace("o", "0")  // "  Hell0 W0rld  "  -- every occurrence
s.Substring(2)        // "Hello World  "     -- from index 2 to end
s.Substring(2, 5)     // "Hello"             -- 5 chars starting at index 2
```

## Use the returned value
```csharp
string upper = s.ToUpper();          // correct: store the result
Console.WriteLine(s.ToUpper());      // correct: print it directly
s.ToUpper();                         // WRONG: result is thrown away, s is unchanged
```

## Chaining
```csharp
string result = s.Trim().ToUpper();  // Trim first, then upper the trimmed string
```

## Substring rules
| Call | Meaning |
|------|---------|
| `s.Substring(i)` | from index `i` to the end |
| `s.Substring(i, n)` | `n` characters starting at index `i` |
| Valid range | `0 <= i <= s.Length`; `i + n <= s.Length` |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| (no error) output is the original, not the transformed value | `s.ToUpper();` without using the result | store or print: `s = s.ToUpper();` or `Console.WriteLine(s.ToUpper())` |
| `System.ArgumentOutOfRangeException: startIndex cannot be larger than length of string` | `Substring` start is past the end | compute start from `s.Length`; stay in bounds |

Every transform method returns a **new string**. The original is untouched. Use the return value.
