# Reading input with Console.ReadLine

## From fixed values to real input

Until now your programs used values you wrote into the code. Real programs take input from the outside and
work with it. The first step is reading a line of text.

`Console.ReadLine()` reads one line of input and gives it back to you as a `string`. Store it in a variable
and use it like any other string.

```csharp
string name = Console.ReadLine();
Console.WriteLine(name);
```

Given the input `Ada`, the output is:

```
Ada
```

The program read the line `Ada` into `name`, then printed it.

## Prompt first

A program that just waits for input, with no message, leaves the person guessing what to type. So you print
a **prompt** first: a short line saying what you want.

```csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine(name);
```

Given the input `Ada`, the output is:

```
Enter your name:
Ada
```

Put the prompt on its **own line** with `WriteLine`, then read on the next statement. The prompt is just
normal output, it is the first thing your program prints.

## How input works here

On this platform your program does not pause for you to type while it runs. Instead, the **input is
supplied up front** and your program reads through it line by line from top to bottom. When you are solving
a problem you put your test input in the input box, press Run, and see what your program prints.

This is why, in the output above, the typed value does not appear next to the prompt: the input is fed to
the program separately, not echoed onto the screen as you would see in a live terminal. Your output is
exactly what your program *prints*, the prompt line, then whatever you choose to write out.

## Reading more than one line

Each `Console.ReadLine()` reads the **next** line of input. Call it again to read the next one.

```csharp
Console.WriteLine("Enter your first name:");
string first = Console.ReadLine();
Console.WriteLine("Enter your last name:");
string last = Console.ReadLine();
Console.WriteLine(first);
Console.WriteLine(last);
```

Given the input lines `Ada` then `Lovelace`, the output is:

```
Enter your first name:
Enter your last name:
Ada
Lovelace
```

The two prompts print first (the program prints them back to back as it runs), then the two values it read.
The order of your `WriteLine` statements is the order the output appears, exactly as in Chapter 1.

## A note on what you read

Whatever comes in is a `string`, even if it looks like a number. If the input line is `25`, then
`Console.ReadLine()` gives you the text `"25"`, not the number `25`. You cannot do arithmetic on it yet.
Turning input text into a number you can compute with is the next section.

## What you'll practise

Prompting for input, reading one or more lines into variables, and printing them back in the order you
want. The input is supplied to your program; your job is to capture it and use it. Eight reps to make the
read-and-use loop automatic.
