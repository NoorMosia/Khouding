# Parameters

## The problem: a method stuck on one value

A method with no parameters does exactly the same thing every call. If you want to square different numbers,
you end up writing a near-identical method for each one:

```csharp
static void PrintSquareOf5() { Console.WriteLine(5 * 5); }
static void PrintSquareOf3() { Console.WriteLine(3 * 3); }
```

The logic is the same; only the number changes. Writing a new method per value does not scale, and it cannot
handle a number you only learn at run time.

## Passing values in

Parameters let you pass values in, so one method works on different inputs each time. A parameter is a
variable listed in the method's parentheses; it receives a value, called an argument, when you call the
method. One `PrintSquare` replaces all those near-duplicates:

```csharp
using System;

class Program
{
    static void PrintSquare(int n)
    {
        Console.WriteLine(n * n);
    }

    static void Main()
    {
        PrintSquare(5);
        PrintSquare(3);
    }
}
```

The output is:

```
25
9
```

`PrintSquare` declares one parameter, `int n`. The call `PrintSquare(5)` runs the body with `n` equal to `5`,
printing `25`; `PrintSquare(3)` runs it again with `n` equal to `3`, printing `9`. Inside the body `n` is an
ordinary variable you can use like any other.

## Argument and parameter

Two words for the two sides of the same handoff:

- A **parameter** is the variable in the method definition (`int n`). It is part of the method.
- An **argument** is the value you supply at the call (`5`). It fills the parameter.

The argument is copied into the parameter when the call starts. The method works with that copy.

## More than one parameter

List several parameters separated by commas. Arguments fill them left to right, by position: the first
argument goes to the first parameter, the second to the second, and so on.

```csharp
static void Repeat(string text, int times)
{
    for (int i = 0; i < times; i++)
    {
        Console.WriteLine(text);
    }
}

static void Main()
{
    Repeat("hi", 3);
}
```

The output is:

```
hi
hi
hi
```

`Repeat("hi", 3)` sends `"hi"` to `text` and `3` to `times`. The order matters: `Repeat(3, "hi")` would try to
put `3` into a `string` and `"hi"` into an `int`, which does not match the types and would not compile.

## Main reads, the method uses

The arguments do not have to be literals. `Main` can read values from input and pass them in, so the same
method handles whatever the user enters:

```csharp
static void PrintSum(int a, int b)
{
    Console.WriteLine(a + b);
}

static void Main()
{
    Console.WriteLine("Enter two numbers:");
    int x = int.Parse(Console.ReadLine());
    int y = int.Parse(Console.ReadLine());
    PrintSum(x, y);
}
```

Given the input `4`, `6`, the output is:

```
Enter two numbers:
10
```

`Main` reads `x` and `y`, then passes them as the arguments to `PrintSum`. Note the method's parameters `a`
and `b` are separate variables from `Main`'s `x` and `y`; the values are copied across by position.

## When it does not compile

Calling a method with the wrong number of arguments does not compile. The call must supply one argument per
parameter:

```
Program.cs(16,9): error CS7036: There is no argument given that corresponds to the required parameter 'b' of 'Program.PrintSum(int, int)'
```

That means a parameter was left without an argument. Supply all of them, here both `a` and `b`.

Passing an argument of the wrong type is also an error. A method expecting an `int` cannot take a `string`:

```
Program.cs(16,18): error CS1503: Argument 1: cannot convert from 'string' to 'int'
```

That means an argument's type does not match its parameter. Pass the right type, or parse the text to a number
first.

## What you'll practise

Defining and calling methods with parameters: one parameter, several parameters matched by position, string
and numeric parameters, a parameter that drives a loop or a decision inside the method, and `Main` reading the
arguments and passing them in. Twelve reps on getting values into a method. The methods here still print their
result and return nothing; handing a value back to the caller is the next section.
