# Cheatsheet, 6.4 Scope

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Locals and parameters are private
A variable declared inside a method, and the method's parameters, exist only inside that method, only while it
runs.
```csharp
static void Helper()
{
    int x = 99;      // this x belongs to Helper only
}
```

## The same name reused is fine
Two methods can each have a local with the same name; they are separate variables.
```csharp
static void A() { int n = 1; Console.WriteLine(n); }
static void B() { int n = 2; Console.WriteLine(n); }   // a different n
```

## A helper cannot see Main's variables
Pass values in as arguments; the helper works with its parameters.
```csharp
static void PrintPlusTen(int value) { Console.WriteLine(value + 10); }
// in Main:
int score = 5;
PrintPlusTen(score);     // pass it in; the helper cannot read score directly
```

## Passing a value copies it
Changing a parameter inside a method does not change the caller's variable.
```csharp
static void AddHundred(int p) { p = p + 100; Console.WriteLine(p); }  // prints 105
// in Main:
int original = 5;
AddHundred(original);
Console.WriteLine(original);   // still 5
```

## Locals start fresh each call
A local is created when the method runs and gone when it returns. Nothing carries over between calls.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0103: The name '...' does not exist in the current context` | a method used a variable that belongs to another method (often one of Main's) | pass the value in as a parameter so the method has its own copy |

Because values are copied in, a method cannot reach back and change the caller's variables. If you need the
result, return it (6.3).
