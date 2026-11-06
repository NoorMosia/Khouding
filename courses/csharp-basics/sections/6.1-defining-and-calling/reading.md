# Defining and calling a method

## The problem: repeating yourself

Every program so far has lived inside `Main`. Suppose you want to print the same banner three times:

```csharp
static void Main()
{
    Console.WriteLine("Hello!");
    Console.WriteLine("Hello!");
    Console.WriteLine("Hello!");
}
```

The output is:

```
Hello!
Hello!
Hello!
```

It works, but the same line is copied three times. If the banner changes, you edit it in three places, and
it is easy to miss one. Repeated code is a cost.

## Your own named blocks

A method lets you give a block of code a name, define it once, and run it whenever you want by calling that
name. You have already called methods written by others: `Console.WriteLine(...)` is a method call. Now you
write your own. The repetition above becomes:

```csharp
using System;

class Program
{
    static void Greet()
    {
        Console.WriteLine("Hello!");
    }

    static void Main()
    {
        Greet();
        Greet();
        Greet();
    }
}
```

The output is the same:

```
Hello!
Hello!
Hello!
```

`Greet` is a method you defined inside the `Program` class, right next to `Main`. The line `Greet();` in
`Main` is the call: it runs `Greet`'s body, which prints `Hello!`, and then control returns to `Main` and the
program continues. The message now lives in one place: change it once and all three calls follow. Defining a
method does not run it; only calling it does.

## The anatomy, and what static void means

Look at the first line of `Greet`:

```csharp
static void Greet()
```

Four parts, left to right:

- `static` means the method belongs to the class itself, so you can call it without creating an object. This
  whole course uses that style (everything lives in `Program`), so every method you write is `static`, just
  like `Main`. The deeper meaning of `static` arrives when you start building your own objects in a later
  course. For now: it is the keyword every method here needs.
- `void` is the return type. `void` means the method returns nothing; it just does its work. Methods that hand
  a value back come in a later section.
- `Greet` is the name you choose. Convention is PascalCase, like the method names you have already seen.
- `()` holds the parameters. `Greet` takes none, so the parentheses are empty. You still write them, on both
  the definition and the call.

This is the `static void` that was left unexplained back in Chapter 1. Now you have the whole picture: a
`static` method, returning nothing, named `Greet`, taking no inputs.

## Reuse is the point

That is the whole value of a method: define the block once, call it as many times as you like. The three
`Greet();` calls above each run the body again, and the message itself is written in exactly one place. Change
`Greet`, and every call reflects the change. One definition, many calls, no duplication.

## Main still does the input and output

`Main` is where the program starts and where you read input and drive the overall flow. A method you define is
a helper that `Main` (or another method) calls. For example, `Main` can read a count and call a method that
many times:

```csharp
static void PrintStar()
{
    Console.WriteLine("*");
}

static void Main()
{
    Console.WriteLine("Enter a count:");
    int n = int.Parse(Console.ReadLine());
    for (int i = 0; i < n; i++)
    {
        PrintStar();
    }
}
```

Given the input `3`, the output is:

```
Enter a count:
*
*
*
```

`Main` reads `n` and loops; each pass calls `PrintStar`. With a count of `0` the loop runs zero times and the
method is never called, so nothing prints after the prompt.

## A method can call another method

A method body can call other methods, just like `Main` does. This lets you build small pieces and combine
them:

```csharp
static void PrintLine()
{
    Console.WriteLine("----");
}

static void PrintBox()
{
    PrintLine();
    Console.WriteLine("| hi |");
    PrintLine();
}

static void Main()
{
    PrintBox();
}
```

The output is:

```
----
| hi |
----
```

`Main` calls `PrintBox`, which calls `PrintLine` twice around a middle line. Each call runs its body and
returns to where it was called from.

## When it does not compile

A method must be called to run, and the call must name it correctly. Two mistakes are common.

Writing a method name without the parentheses is not a call. C# reads it as a reference to the method and
complains that it is not used as a method:

```
Program.cs(14,9): error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement
```

That means a line like `Greet;` is not a statement C# accepts. Add the parentheses: `Greet();`.

Calling a name that is not defined anywhere is also an error:

```
Program.cs(14,9): error CS0103: The name 'Gret' does not exist in the current context
```

That means the name is misspelled or the method was never defined. Check the spelling against the definition,
`Greet` not `Gret`.

## What you'll practise

Defining your own `static void` methods and calling them: defining a method next to `Main`, calling it once
and many times, having `Main` read input and drive the calls, defining several methods, and one method calling
another. Ten reps on the first half of methods, naming a block and running it. Next is parameters, passing
values into a method so it can work on different inputs.
