# Cheatsheet, 1.1 The parts of a C# program

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The skeleton every program sits in
```csharp
using System;

class Program
{
    static void Main()
    {
        // your statements go here
    }
}
```

## The parts
| Part | What it is |
|---|---|
| `using System;` | lets you write `Console` instead of `System.Console` |
| `class Program` | the container your code lives in |
| `static void Main()` | where the program starts running |
| `{ }` | a block; every `{` needs a matching `}` |
| `;` | ends a statement |

## Print a line
```csharp
Console.WriteLine("text here");
```
Whatever is inside the quotes appears on the screen. Statements run top to bottom.

## Where code goes
Your statements go **inside `Main`'s braces**. A statement outside `Main` does not run.

## Common errors here
| Message | Usually means | Fix |
|---|---|---|
| `; expected` | a statement is missing its closing semicolon | add `;` at the end of that line |
| `invalid token` / member-declaration error on a `WriteLine` line | the statement is sitting outside `Main` | move it inside `Main`'s braces |

> Read the **first** error, and check the line number it gives you (e.g. `(9,46)` = line 9).
