# The if statement

## Running code only when a condition is true

An `if` statement runs a block of code only when its condition is true. If the condition is false, the block
is skipped and the program carries on after it.

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
if (n > 100)
{
    Console.WriteLine("That is a big number");
}
```

Given the input `250`, the output is:

```
Enter a number:
That is a big number
```

Given the input `7`, the output is:

```
Enter a number:
```

Same program, two inputs, two different outputs. With `250` the condition `n > 100` is true, so the block
runs. With `7` it is false, so the block is skipped and nothing else prints. This is the first program whose
output depends on a choice.

## The condition is a bool

Whatever goes in the parentheses must be a `bool`, which is exactly what the comparisons from 4.1 produce:

```csharp
if (age >= 18)
{
    Console.WriteLine("adult");
}
```

`age >= 18` evaluates to `True` or `False`, and the `if` runs the block only when it is `True`. You can also
put a `bool` variable straight in:

```csharp
bool isAdult = age >= 18;
if (isAdult)
{
    Console.WriteLine("adult");
}
```

## Inside the braces versus outside

Only the code **inside** the braces is conditional. Code before or after the `if` runs no matter what:

```csharp
Console.WriteLine("Checking...");
if (n > 100)
{
    Console.WriteLine("big");
}
Console.WriteLine("Done");
```

Given the input `7`, the output is:

```
Checking...
Done
```

`Checking...` and `Done` print every time, because they are outside the `if`. Only `big` is guarded by the
condition. When the condition is false, the guarded line simply does not appear; the program does not stop.

## The braces

For a single statement, C# lets you drop the braces, but always using them is the safer habit and the one this
course follows: it makes the block boundaries obvious and avoids a class of bugs. Put the conditional code
inside `{ }`.

## When the if runs no matter what: the stray semicolon

Watch the end of the `if` line. A semicolon right after the condition ends the `if` immediately, with an empty
body, so the block that follows is no longer guarded:

```csharp
if (n > 100);
{
    Console.WriteLine("big");
}
```

The compiler warns you here:

```
Program.cs(5,16): warning CS0642: Possible mistaken empty statement
```

The `;` becomes the entire body of the `if` (an empty statement that does nothing), and the `{ ... }` below is
just an ordinary block that always runs. So `big` prints even when `n` is `7`. The fix is to remove the stray
semicolon so the block becomes the `if`'s body. When a guarded line prints when it should not, check for a `;`
right after the condition, and heed the CS0642 warning.

## What you'll practise

Guarding a block with a condition: print a message only when a number crosses a threshold, only when two
values are equal, only when a value is within a bound; keeping conditional lines inside the braces and
unconditional lines outside; and fixing the stray-semicolon trap. Ten reps on the one-way `if`. No `else`
yet, that is the next section.
