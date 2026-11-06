# Cheatsheet, 6.5 Overloading

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Same name, different parameter lists
Several methods can share a name if their parameter lists differ (by count or by type). The compiler picks
the match from the arguments.
```csharp
static int Add(int a, int b)        { return a + b; }
static int Add(int a, int b, int c) { return a + b + c; }

Add(2, 3);        // runs the two-parameter version -> 5
Add(2, 3, 4);     // runs the three-parameter version -> 9
```

## Overload by type too
```csharp
static void Describe(int n)    { Console.WriteLine("number"); }
static void Describe(string s) { Console.WriteLine("text"); }

Describe(5);      // number
Describe("hi");   // text
```

## What does not count
Overloads cannot differ by return type alone; the parameter lists must differ.
```csharp
static int Value() { return 1; }
static string Value() { return "one"; }   // NOT allowed: same name, same parameters
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1501: No overload for method '...' takes N arguments` | no version has that many parameters | call with an argument count that matches an overload |
| `CS1503: Argument N: cannot convert from '...' to '...'` | the argument's type fits no overload's parameter | pass a type one of the overloads declares |

Overloading is about the parameters. If the compiler cannot match your arguments to a parameter list, the
call does not compile.
