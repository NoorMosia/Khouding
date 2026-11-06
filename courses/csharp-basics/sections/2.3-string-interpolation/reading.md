# String interpolation

## Mixing text and values in one string

So far, printing a label next to a value took two steps: print the label, then print the value. Interpolation
lets you build one string that holds both. Put a `$` in front of the string, then drop a value into it inside
`{` and `}`:

```csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine($"Hello, {name}");
```

Given the input `Ada`, the output is:

```
Enter your name:
Hello, Ada
```

The `$` marks the string as interpolated. Inside it, `{name}` is a hole: C# replaces it with the current
value of `name`. The rest, `Hello, `, is printed literally.

## The hole holds a value, the text around it stays literal

Everything outside the braces is ordinary text. Everything inside the braces is a value that gets filled in:

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
Console.WriteLine($"You entered {n}");
```

Given the input `42`, the output is:

```
Enter a number:
You entered 42
```

## More than one hole

A string can hold as many holes as you need. Each one is filled with its own value:

```csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());
Console.WriteLine($"{name} is {age}");
```

Given the input lines `Ada` then `36`, the output is:

```
Enter your name:
Enter your age:
Ada is 36
```

A hole can hold a `string` or a number; each value is turned into text at the point it is filled in.

## A hole can hold an expression

A hole is not limited to a single variable. You can put a small expression inside it, and C# computes it
first, then fills in the result:

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
Console.WriteLine($"{n} doubled is {n * 2}");
```

Given the input `5`, the output is:

```
Enter a number:
5 doubled is 10
```

The hole `{n * 2}` is worked out first (`10`), then placed into the string.

## The payoff: one line instead of two

In Chapter 1, a labelled value took two prints, a `Write` for the label and a `WriteLine` for the value:

```csharp
Console.Write("Total: ");
Console.WriteLine(total);
```

Interpolation collapses that into a single line that reads the way the output looks:

```csharp
Console.WriteLine($"Total: {total}");
```

For `total` holding `30`, both print the same thing:

```
Total: 30
```

The one-line interpolated form is the standard way to produce value-filled output from here on.

## When the output looks wrong: the missing `$`

The most common mistake is forgetting the `$`. Without it, the string is just ordinary text, and the braces
are printed literally instead of being filled in:

```csharp
string name = Console.ReadLine();
Console.WriteLine("Hello, {name}");   // no $, so this is NOT interpolated
```

Given the input `Ada`, the output is:

```
Hello, {name}
```

Notice what did not happen: no error, no warning, the program compiled and ran. It simply printed `{name}`
as text. This is a silent wrong-output bug, which is different from the errors in 2.2 that stopped the build
or crashed the run. When interpolation prints the braces instead of the value, the fix is almost always the
missing `$` prefix.

## You may also see: the older `{0}` style

Interpolation is the modern way, but C# has an older way to build the same output, and you will run into it in
existing code, in textbooks, and quite possibly on a lecturer's slides. It is worth being able to read it.

Instead of putting the value inside the string with `$`, you pass the values as extra arguments after the
string, and use numbered placeholders, `{0}`, `{1}`, `{2}`, to say where each one goes:

```csharp
string name = Console.ReadLine();
Console.WriteLine("Hello, {0}", name);
```

Given the input `Ada`, the output is:

```
Hello, Ada
```

`{0}` means "the first argument after the string", which here is `name`. This is called **composite
formatting**. It produces exactly the same output as the interpolated version:

```csharp
Console.WriteLine($"Hello, {name}");        // interpolation (this course's default)
Console.WriteLine("Hello, {0}", name);      // composite formatting (same result)
```

The numbers are positions, not values. `{0}` is the first argument, `{1}` is the second, and so on. You can
use them in any order and more than once:

```csharp
Console.WriteLine("{0} is {1}", name, age);   // {0} -> name, {1} -> age
```

For input `Ada` and `36`, the output is:

```
Ada is 36
```

The catch, and the reason this course prefers interpolation: with `{0}`, the value is not written where it
appears. You read `{1}` and then have to count along the argument list to find out what it is. With
interpolation the value sits right in the hole, so the line reads the way the output looks. The older style
also has a sharp edge: if you reference a placeholder with no matching argument, say `{1}` when you only
passed one value, it does not quietly do nothing. It throws a `FormatException` at run time:

```
System.FormatException: Index (zero based) must be greater than or equal to zero and less than the size of the argument list.
```

Use interpolation as your default. Keep `{0}` in your back pocket so that when you meet it in someone else's
code or on a slide, you know exactly what it does. Either style passes the problems in this section, since the
output is identical; the grader only looks at what you print.

## What you'll practise

Building value-filled output with `$"...{value}..."`: a greeting, a labelled total, two values on one line,
an expression inside a hole, a multi-line summary, and converting Chapter 1's two-line label pattern into one
interpolated line. Twelve reps on the standard way to mix text and values. The older `{0}` style above is for
recognition; interpolation is what you practise.
