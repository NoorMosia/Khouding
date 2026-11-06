# The Math class

## Calling a ready-made function

You do not have to write everything yourself. C# ships with a class called `Math` that is full of ready-made
functions you can call. To use one, write `Math.`, the function name, and the value you are giving it in
parentheses:

```csharp
Console.WriteLine(Math.Sqrt(16));
```

The output is:

```
4
```

`Math.Sqrt(16)` is a function call: `Sqrt` is the function, `16` is the argument you hand it, and it hands
back a value, the square root. That returned value is used here by `WriteLine`. This is the same shape as
`Console.WriteLine(...)` you have used all along: a name, then arguments in parentheses.

## A few you will use often

Each of these is called the same way, `Math.` then the name then the arguments:

```csharp
Console.WriteLine(Math.Pow(2, 10));      // 2 to the power of 10
Console.WriteLine(Math.Abs(-5));         // absolute value (distance from zero)
Console.WriteLine(Math.Max(3, 9));       // the larger of two
Console.WriteLine(Math.Min(3, 9));       // the smaller of two
```

The output is:

```
1024
5
9
3
```

`Math.Pow` and some others take two arguments, separated by a comma. `Math.Round` rounds a value to a chosen
number of decimal places:

```csharp
Console.WriteLine(Math.Round(3.14159, 2));
```

The output is:

```
3.14
```

Most `Math` functions hand back a `double`. For values like `Math.Sqrt(16)` the result is a whole number, so
it prints as `4`, but it is still a `double`.

## Combining Math with what you already know

The real use is combining a `Math` call with input and arithmetic. `Math.PI` is the constant pi, and
`Math.Pow(r, 2)` squares a radius, so a circle's area is both together:

```csharp
Console.WriteLine("Enter the radius:");
double r = double.Parse(Console.ReadLine());
Console.WriteLine($"{Math.PI * Math.Pow(r, 2):F2}");
```

Given the input `5`, the output is:

```
Enter the radius:
78.54
```

A call can also be an argument to another call. The length of the long side of a right triangle is the square
root of the sum of the squares of the other two:

```csharp
double a = 3, b = 4;
Console.WriteLine(Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2)));
```

The output is:

```
5
```

## Where Math comes from: the real story of `using System;`

Back in 1.1 you were told `using System;` was "the line that lets you say `Console.WriteLine` instead of its
longer full name." Here is the full picture, because `Math` is the same situation.

Classes like `Console` and `Math` are organised into groups called **namespaces**. Both live in a namespace
called `System`. The complete name of the function you just called is actually `System.Math.Sqrt`. You can
write it that way and it works:

```csharp
Console.WriteLine(System.Math.Sqrt(9));
```

The output is:

```
3
```

Writing `System.` in front of everything is tedious, so `using System;` at the top of the file says "I am
using the `System` namespace, let me drop the `System.` prefix." That is why, with `using System;` present,
you can write `Math.Sqrt` and `Console.WriteLine` instead of their full names. The `using` does not add any
capability; it is a convenience that shortens the names.

## Reading the library yourself

`Math` has many more functions than the handful above. You will not be walked through every one, and you do
not need to be. The cheatsheet for this section lists more of them with a one-line description each. Part of
the craft is reading that kind of reference and working out how to call a function you have not been shown,
the name, what arguments it wants, what it hands back. Some of the practice problems deliberately use a
function that only appears on the cheatsheet, so you get used to reaching for the reference instead of waiting
to be taught.

## What you'll practise

Calling `Math` functions and combining them with input and arithmetic: square root, powers, rounding,
absolute value, larger and smaller of two, a circle area with `Math.PI`, and a hypotenuse built from nested
calls. A couple of problems ask you to use a function listed only on the cheatsheet, so you practise reading
the library. Thirteen reps on using code someone else wrote.
