# Cheatsheet, 8.5 Building and parsing character by character

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Walk every character (two shapes)
```csharp
// indexed for (when you need the position)
for (int i = 0; i < s.Length; i++) { Console.WriteLine(s[i]); }

// foreach (when you only need the value)
foreach (char c in s) { Console.WriteLine(c); }
```
Empty string: loop runs zero times.

## char helpers
```csharp
char.IsDigit(c)    // true for '0'..'9'
char.IsLetter(c)   // true for 'a'..'z', 'A'..'Z'
char.ToUpper(c)    // returns the upper-case version of c
```

## Count (start at 0, add 1 on match)
```csharp
int count = 0;
foreach (char c in s) { if (c == 'a') count++; }
```

## Validate all (start true, set false on failure)
```csharp
bool ok = true;
foreach (char c in s) { if (!char.IsDigit(c)) ok = false; }
```
Empty string gives `true` (no character fails).

## Build by concatenation (result starts as "")
```csharp
string result = "";
foreach (char c in s) { if (char.IsLetter(c)) result = result + c; }
```
Assign back: `result = result + c`, not just `result + c`.

## Reverse by building
```csharp
string rev = "";
for (int i = s.Length - 1; i >= 0; i--) { rev = rev + s[i]; }
```

## Common errors

| Mistake | Symptom | Fix |
|---------|---------|-----|
| `i <= s.Length` | IndexOutOfRangeException on last pass | use `i < s.Length` |
| forgot `result = ""` before loop | compile: unassigned variable | declare and initialise: `string result = "";` |
| `result + c;` without assigning | `CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement` | `result = result + c;` |

Strings are immutable: `+` returns a new string. Store it back in `result`.
