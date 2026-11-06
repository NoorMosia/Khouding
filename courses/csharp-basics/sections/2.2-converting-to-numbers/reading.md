# Converting input to numbers

## Input comes in as text

`Console.ReadLine()` always gives you a `string`, even when the line is `25`. A string of digits is not a
number you can do arithmetic on. This fails to compile:

```csharp
string input = Console.ReadLine();
int result = input * 2;   // error: cannot multiply a string
```

To compute with input, you first **convert** the text into a number.

## Parsing to a whole number

`int.Parse` takes a string of digits and gives back an `int`:

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
Console.WriteLine(n * 2);
```

Given the input `6`, the output is:

```
Enter a number:
12
```

`Console.ReadLine()` reads the line, `int.Parse(...)` turns the text `"6"` into the number `6`, and now
`n * 2` is real arithmetic.

## Parsing to a decimal

For a value that can have a fractional part, read it and convert with `double.Parse`:

```csharp
Console.WriteLine("Enter a price:");
double price = double.Parse(Console.ReadLine());
Console.WriteLine(price);
```

Given the input `4.99`, the output is:

```
Enter a price:
4.99
```

Use `int.Parse` for whole numbers and `double.Parse` for numbers that may have a decimal part, the same
int-vs-double choice you made in 1.3, now applied to input.

## The payoff: input you can compute with

This is what the chapter has been building toward. Read two numbers and actually combine them:

```csharp
Console.WriteLine("Enter the first number:");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Enter the second number:");
int b = int.Parse(Console.ReadLine());
Console.WriteLine(a + b);
```

Given the input lines `3` then `4`, the output is:

```
Enter the first number:
Enter the second number:
7
```

The arithmetic is Chapter 1's `+ - *`, now fed by real input.

## If the input is not a number

Assume the input is a valid number: in these problems it always will be. But it is worth knowing what
happens if it is not. `int.Parse("hello")` cannot produce a number, so at run time it **throws an error**
and the program stops:

```
System.FormatException: The input string 'hello' was not in a correct format.
```

For now we do not guard against this; we just assume the input is well-formed. The safe way to handle
possibly-bad input comes in a later chapter. The point to carry: parsing text that is not a number is a
run-time error, not a silent wrong answer.

## When it does not compile

The most common mistake here is trying to do math on the input **before** converting it:

```
Program.cs(8,22): error CS0019: Operator '*' cannot be applied to operands of type 'string' and 'int'
```

That means you tried to use `*` (or `+`, `-`) on a `string`. `Console.ReadLine()` is a string; parse it
first, then do the arithmetic on the number. (Note this one is a **compile** error, it stops the build. The
`FormatException` above is a **run-time** error, it happens while the program runs.)

## What you'll practise

Reading input and converting it with `int.Parse` and `double.Parse`, then computing with `+ - *`: doubling
a number, summing two, next year's age, a total from a count and a price. Fifteen reps turning text into
numbers you can use.
