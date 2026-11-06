# Cheatsheet, 1.5 Naming and formatting

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The rules for a name
- Starts with a **letter** or `_`, never a digit. (`count2` yes, `2count` no.)
- Only **letters, digits, underscores**. No spaces, no symbols.
- Not a **reserved keyword** (`int`, `class`, `string`, ...).

## Convention: casing
| Kind | Casing | Example |
|---|---|---|
| local variable | camelCase | `totalScore`, `firstName` |
| constant / type | PascalCase | `DaysInWeek`, `MaxItems` |

The program runs the same either way; convention is for the reader.

## A good name says what the value is
```csharp
int q = x * a2;              // what is this counting?
int totalSeats = rows * seatsPerRow;   // clear
```

## Formatting is for the reader
- One statement per line.
- Spaces around operators (`a + b`, not `a+b`).
- Indent the body of each block one step in from its braces.

The compiler ignores indentation and line breaks; a human does not.

## Common errors here
| Message | Usually means | Fix |
|---|---|---|
| `CS1001: Identifier expected` | the name starts with a digit, or is a reserved keyword | rename it to a legal identifier |
| `CS1002: ; expected` (on a declaration) | the name has a space in it | join the words into one name (camelCase) |
