# Cheatsheet, 2.2 Converting input to numbers

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Read a line, then parse it
```csharp
Console.WriteLine("Enter a whole number:");   // prompt on its own line
int n = int.Parse(Console.ReadLine());        // text -> whole number
Console.WriteLine(n);
```

## Parse to a whole number or a decimal
```csharp
int count = int.Parse(Console.ReadLine());      // 7, 0, -4
double price = double.Parse(Console.ReadLine()); // 4.5, 19.95, -2.25
```
- `int.Parse` accepts whole numbers only. It rejects `4.99`.
- `double.Parse` accepts decimals. Use it for prices, measurements, anything with a fractional part.

## Compute, then print
```csharp
Console.WriteLine("Enter the width:");
int width = int.Parse(Console.ReadLine());
Console.WriteLine("Enter the height:");
int height = int.Parse(Console.ReadLine());
Console.WriteLine(width * height);              // compute with + - *
```
Output for width `4`, height `5`:
```
Enter the width:
Enter the height:
20
```

## The point of this section
Input arrives as text. Parsing is the step that turns that text into a number you can actually compute with.
Without it, input is just characters on a line.

## If the input is not a number
`int.Parse("hello")` throws a `FormatException` while the program runs. The practice problems here feed only
valid input, so your solutions never hit this. Handling bad input safely comes in a later chapter.

## Common errors

| What you did | Message you get | When | Fix |
|--------------|-----------------|------|-----|
| Math on text: `Console.ReadLine() * 2` | `error CS0019: Operator '*' cannot be applied to operands of type 'string' and 'int'` | compile time, the build stops | Parse first: `int n = int.Parse(Console.ReadLine()); ... n * 2` |
| Parse non-numeric text: `int.Parse("hello")` | `System.FormatException: The input string 'hello' was not in a correct format.` | run time, while the program runs | Make sure the line really holds a number (safe handling is a later chapter) |
| `int.Parse` on a decimal: `int.Parse("4.99")` | `System.FormatException` at run time | run time | Use `double.Parse` for decimals |

A compile error stops the build, so the program never runs. A runtime error happens while the program is
already running. Same word, "error", two very different moments.
