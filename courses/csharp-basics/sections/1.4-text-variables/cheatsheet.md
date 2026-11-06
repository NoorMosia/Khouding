# Cheatsheet, 1.4 Text variables

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Declare and initialise
```csharp
string name  = "Ada";    // many characters, double quotes
char   grade = 'A';      // exactly one character, single quotes
```

## string vs char
| Holds | Type | Quotes | Example |
|---|---|---|---|
| many characters (word, sentence) | `string` | `"..."` | `"hello"` |
| exactly one character | `char` | `'...'` | `'h'` |

When in doubt, use `string`. A `string` can hold one character too; reach for `char` only when it is
always one.

## Reassign (no type the second time)
```csharp
string status = "draft";
status = "published";   // status now holds "published"
```

## const string
```csharp
const string Greeting = "Welcome";   // fixed text, cannot be reassigned
```

## bool (light)
```csharp
bool isOpen = true;   // one of two values: true or false
```
Prints as `True` or `False` (capital first letter).

## Common errors here
| Message | Usually means | Fix |
|---|---|---|
| `CS1012: Too many characters in character literal` | single quotes around more than one character | use double quotes for a `string`: `"Sam"` |
| `CS0029: Cannot implicitly convert type 'string' to 'char'` | a double-quoted value put into a `char` | use single quotes for a `char`: `'A'` |
