# Cheatsheet, 2.3 String interpolation

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Interpolate a value into text
```csharp
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}");   // $ prefix, {name} is a hole
```
Output for input `Ada`:
```
Hello, Ada
```
- The `$` in front of the quote makes the string interpolated.
- Inside, `{value}` is a hole: it is replaced with the value.
- Text outside the braces is printed literally.

## More than one hole
```csharp
Console.WriteLine($"{name} is {age}");   // as many holes as you need
```

## A hole can hold an expression
```csharp
Console.WriteLine($"{n} doubled is {n * 2}");   // {n * 2} is computed, then filled in
```
Output for `n` of `5`:
```
5 doubled is 10
```

## The one-line payoff
Chapter 1 needed two prints for a labelled value:
```csharp
Console.Write("Total: ");
Console.WriteLine(total);
```
Interpolation does it in one line:
```csharp
Console.WriteLine($"Total: {total}");
```
Both print `Total: 30` when `total` is `30`. The one-line form is the standard from here on.

## The older `{0}` style (recognition)
You will see composite formatting in older code and on slides. The values go after the string, and `{0}`,
`{1}` are positions into that argument list:
```csharp
Console.WriteLine($"{name} is {age}");       // interpolation (this course's default)
Console.WriteLine("{0} is {1}", name, age);  // composite formatting (same output)
```
`{0}` is the first argument, `{1}` the second. Translate either direction: the hole `{name}` in the first
argument becomes `{0}` plus `name` passed after the string.

| Interpolation | Same thing with `{0}` |
|---------------|-----------------------|
| `$"Hello, {name}"` | `"Hello, {0}", name` |
| `$"{name} is {age}"` | `"{0} is {1}", name, age` |
| `$"Total: {total}"` | `"Total: {0}", total` |

Prefer interpolation (the value sits in the hole). Keep `{0}` readable for when you meet it elsewhere. Both
pass the problems here, since the printed output is identical.

## Common errors

| What you did | What happens | When | Fix |
|--------------|--------------|------|-----|
| Missing `$`: `"Hello, {name}"` | prints the braces literally: `Hello, {name}` | run time, no error or warning (silent wrong output) | Add the `$`: `$"Hello, {name}"` |
| Empty hole: `$"Hello, {}"` | `error CS1733: Expected expression`, the hole has nothing to fill it | compile time, the build stops | Put a value in the hole, e.g. `{name}` |
| `{0}` style, placeholder with no matching argument: `"{0} is {1}", name` | `System.FormatException: Index (zero based) must be greater than or equal to zero and less than the size of the argument list.` | run time, while the program runs | Pass an argument for every placeholder, or just use interpolation |

The missing-`$` case is the one to watch: nothing complains, the program runs, and the output just shows
`{name}` instead of the value. When you see braces in your output where a value should be, the `$` is almost
always missing.
