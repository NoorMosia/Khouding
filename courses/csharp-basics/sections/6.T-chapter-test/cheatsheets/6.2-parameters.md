# Cheatsheet, 6.2 Parameters

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Pass values in
A parameter is a variable in the method's `()`. An argument fills it at the call.
```csharp
static void PrintSquare(int n)   // n is a parameter
{
    Console.WriteLine(n * n);
}
PrintSquare(5);                  // 5 is the argument -> n = 5
```

## Parameter vs argument
- **parameter**: the variable in the definition (`int n`), part of the method.
- **argument**: the value at the call (`5`), copied into the parameter.

## Several parameters, matched by position
Arguments fill parameters left to right.
```csharp
static void Repeat(string text, int times) { ... }
Repeat("hi", 3);     // text = "hi", times = 3
```
Order matters: the types must line up with the parameters.

## Main reads, the method uses
```csharp
int x = int.Parse(Console.ReadLine());
int y = int.Parse(Console.ReadLine());
PrintSum(x, y);      // pass read values in
```
The method's parameters are separate variables from `Main`'s; values are copied across.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS7036: There is no argument given that corresponds to the required parameter '...'` | the call has too few arguments | supply one argument per parameter |
| `CS1503: Argument N: cannot convert from '...' to '...'` | an argument's type does not match its parameter | pass the right type (parse text to a number first if needed) |

Arguments match parameters by position and by type. A method here still prints its result and returns
nothing; returning a value is 6.3.
