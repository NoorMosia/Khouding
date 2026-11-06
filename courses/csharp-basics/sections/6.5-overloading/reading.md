# Overloading

## One name, several versions

Sometimes the same idea applies to different inputs. Adding two numbers and adding three numbers are the same
idea with a different number of arguments. Rather than invent two names, C# lets you give several methods the
same name, as long as their parameter lists differ. This is called overloading. When you call the name, the
compiler picks the version whose parameters match your arguments.

```csharp
using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    static void Main()
    {
        Console.WriteLine(Add(2, 3));
        Console.WriteLine(Add(2, 3, 4));
    }
}
```

The output is:

```
5
9
```

Both methods are named `Add`. The first takes two parameters, the second takes three. `Add(2, 3)` matches the
two-parameter version and gives `5`; `Add(2, 3, 4)` matches the three-parameter version and gives `9`. The
compiler chooses based on the arguments at the call.

## What makes a valid overload

Overloads must differ in their parameter lists, by the number of parameters or by their types. These are both
valid sets of overloads:

```csharp
static int Max(int a, int b) { ... }            // two parameters
static int Max(int a, int b, int c) { ... }     // three parameters

static void Describe(int n) { ... }             // an int
static void Describe(string s) { ... }          // a string
```

The compiler tells them apart by what you pass. `Describe(5)` runs the `int` version; `Describe("hi")` runs
the `string` version.

```csharp
static void Describe(int n)
{
    Console.WriteLine("number");
}

static void Describe(string s)
{
    Console.WriteLine("text");
}

static void Main()
{
    Describe(5);
    Describe("hi");
}
```

The output is:

```
number
text
```

## What does not count

Two methods cannot differ by return type alone. The parameter lists must differ. If two methods have the same
name and the same parameters but different return types, that is not a valid overload and will not compile,
there is no way for the compiler to tell them apart from a call.

```csharp
static int Value() { return 1; }
static string Value() { return "one"; }   // same name, same (empty) parameters: not allowed
```

Overloads are about the parameters, not the return type.

## When it does not compile

If you call an overloaded method with arguments that match none of the versions, the call does not compile.
With the wrong number of arguments:

```
Program.cs(18,9): error CS1501: No overload for method 'Add' takes 1 arguments
```

That means no version of `Add` has that many parameters. Call it with a count that matches one of the
overloads.

With an argument of a type no overload accepts:

```
Program.cs(18,18): error CS1503: Argument 1: cannot convert from 'double' to 'int'
```

That means the argument's type does not fit any overload's parameter. Pass a type one of the overloads
declares.

## What you'll practise

Defining and resolving overloads: methods sharing a name but differing by parameter count or by parameter
type, calls that resolve to the right version, adding a new overload to an existing method, and recognising
when a call matches no overload. Ten reps on overloading. That completes the methods chapter; next is the
chapter test.
