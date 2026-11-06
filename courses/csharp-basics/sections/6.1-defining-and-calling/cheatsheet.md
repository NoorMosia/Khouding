# Cheatsheet, 6.1 Defining and calling a method

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Define a method
Inside the `Program` class, next to `Main`:
```csharp
static void Greet()
{
    Console.WriteLine("Hello!");
}
```

## The anatomy
| Part | Meaning |
|------|---------|
| `static` | callable without an object (how this course is structured; like `Main`) |
| `void` | return type: returns nothing |
| `Greet` | the name you choose (PascalCase) |
| `()` | the parameters (none here, but still written) |
| `{ }` | the body that runs when called |

## Call a method
Write its name and parentheses. The call runs the body, then returns to the caller.
```csharp
Greet();          // runs the body once
Greet();          // call again to reuse it
```

## Main drives the I/O
`Main` reads input and calls your helpers. A method can be called in a loop:
```csharp
for (int i = 0; i < n; i++) { PrintStar(); }
```

## A method can call another method
```csharp
static void PrintBox()
{
    PrintLine();            // call another method
    Console.WriteLine("| hi |");
    PrintLine();
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement` | a method name was written without `()`, so it is not a call | add the parentheses: `Greet();` |
| `CS0103: The name '...' does not exist in the current context` | the called name is misspelled or the method is not defined | check the spelling against the definition |

Defining a method does not run it; only a call does. A method defined but never called produces no output.
