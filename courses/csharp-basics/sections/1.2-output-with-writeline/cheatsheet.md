# Cheatsheet, 1.2 Output

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Print
```csharp
Console.WriteLine("text");   // prints, then moves to a new line
Console.Write("text");        // prints, stays on the same line
Console.WriteLine();          // prints an empty line
```

## Escape sequences
| Write | You get |
|---|---|
| `\n` | a newline (inside a string) |
| `\t` | a tab |
| `\"` | a double quote `"` |
| `\\` | a single backslash `\` |

```csharp
Console.WriteLine("Top\nBottom");       // two lines
Console.WriteLine("She said \"hi\".");  // She said "hi".
Console.WriteLine("C:\\Users\\Ada");     // C:\Users\Ada
Console.WriteLine("Name\tAda");          // Name   Ada
```

## Trailing newline
`WriteLine` adds a newline at the very end; `Write` does not. When a target says "no trailing newline",
use `Write`.

## Comments (ignored by the compiler)
```csharp
// line comment, to the end of the line
/* block comment,
   across lines */
```

## Matching is exact
Spaces, tabs, blank lines, and the final newline all count. A tab is not spaces.

## Common errors here
| Message | Usually means | Fix |
|---|---|---|
| `CS1003: Syntax error, ',' expected` | a `"` inside a string was not escaped, so the string ended early | escape inner quotes as `\"` |
| `CS1009: Unrecognized escape sequence` | a single `\` was read as an escape and not recognised | for a real backslash write `\\` |
