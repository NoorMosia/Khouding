# Cheatsheet, 3.5 The Math class

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Calling a Math function
```csharp
Console.WriteLine(Math.Sqrt(16));   // 4
```
Write `Math.`, the function name, then the arguments in parentheses. Most `Math` functions return a `double`.

## The ones taught in the reading
| Call | What it does | Example |
|------|--------------|---------|
| `Math.Sqrt(x)` | square root | `Math.Sqrt(16)` is `4` |
| `Math.Pow(x, y)` | x to the power of y | `Math.Pow(2, 10)` is `1024` |
| `Math.Round(x, d)` | round x to d decimal places | `Math.Round(3.14159, 2)` is `3.14` |
| `Math.Abs(x)` | absolute value (distance from zero) | `Math.Abs(-5)` is `5` |
| `Math.Max(a, b)` | the larger of two | `Math.Max(3, 9)` is `9` |
| `Math.Min(a, b)` | the smaller of two | `Math.Min(3, 9)` is `3` |
| `Math.PI` | the constant pi | `Math.PI` is about `3.14159` |

## More of the toolbox (read these and use them)
These were not walked through in the reading. Reading a reference like this and working out how to call a
function is part of the craft. Each takes one `double` and returns a `double`.

| Call | What it does | Example |
|------|--------------|---------|
| `Math.Floor(x)` | round DOWN to the nearest whole number | `Math.Floor(3.7)` is `3` |
| `Math.Ceiling(x)` | round UP to the nearest whole number | `Math.Ceiling(3.2)` is `4` |
| `Math.Truncate(x)` | drop the fractional part (toward zero) | `Math.Truncate(3.7)` is `3`, `Math.Truncate(-3.7)` is `-3` |

## Where Math lives: namespaces and `using System;`
`Math` and `Console` live in the `System` namespace. The full name is `System.Math.Sqrt`. The line
`using System;` at the top lets you drop the `System.` prefix and write `Math.Sqrt`. It shortens names; it
does not add any capability.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `error CS0103: The name 'Math' does not exist in the current context` | missing `using System;` and not using the full name | add `using System;`, or write `System.Math.Sqrt(...)` |
| `error CS1501: No overload for method 'Sqrt' takes 2 arguments` | wrong number of arguments for the function | check how many arguments it expects (`Sqrt` takes one, `Pow` takes two) |

When you reach for a function you have not used before, check its name, how many arguments it wants, and what
it returns, then call it the same way as the ones you know.
