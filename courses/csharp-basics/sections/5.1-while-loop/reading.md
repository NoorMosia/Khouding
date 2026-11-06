# The while loop

## Repeating a block

Every program so far ran each statement at most once per path. A loop changes that: it runs a block over and
over. The `while` loop is the simplest form. It repeats its body as long as a condition stays true, checking
the condition before each pass.

```csharp
int i = 1;
while (i <= 3)
{
    Console.WriteLine(i);
    i++;
}
```

The output is:

```
1
2
3
```

The condition `i <= 3` is a `bool`, the same kind of expression you built in Chapter 4. Before each pass C#
checks it: if it is true, the body runs; if it is false, the loop ends and the program continues after it.
Here `i` starts at 1, the body prints it and adds 1, and after the pass where `i` becomes 4 the condition is
false, so the loop stops.

## Making progress

The body must change something that moves the condition toward false. In the example, `i++` is what makes
progress. Leave it out and `i` stays 1 forever, the condition never becomes false, and the loop never ends.
That is an infinite loop: a program that runs until you kill it. The fix is always to make sure each pass
brings the condition closer to stopping.

```csharp
int i = 1;
while (i <= 3)
{
    Console.WriteLine(i);
    // no i++  ->  i is always 1, the loop never stops
}
```

Nothing to show here, this version would print `1` endlessly. When a program seems to hang, a loop whose
condition never changes is the first thing to check.

## Zero passes

Because the condition is checked first, a `while` can run its body zero times. If the condition is false at
the very start, the body is skipped entirely:

```csharp
int i = 5;
while (i <= 3)
{
    Console.WriteLine(i);
    i++;
}
Console.WriteLine("done");
```

The output is:

```
done
```

`5 <= 3` is false immediately, so the body never runs and only `done` prints. This matters: your loop has to
behave correctly even when there is nothing to do.

## The count pattern: do something n times

A common shape is reading a count, then looping that many times. Read `n`, run a counter from 1 to `n`, and do
the work each pass. Here the work is adding to a running total:

```csharp
Console.WriteLine("Enter a count:");
int n = int.Parse(Console.ReadLine());
int total = 0;
int i = 1;
while (i <= n)
{
    total = total + i;
    i++;
}
Console.WriteLine(total);
```

Given the input `4`, the output is:

```
Enter a count:
10
```

The loop adds 1, 2, 3, 4 into `total`, giving `10`. A `total` that lives outside the loop and grows each pass
is an accumulator, the standard way to build a sum, a count, or a maximum with a loop. Given the input `0`,
the loop runs zero times and the output is `0`, the accumulator keeps its starting value.

## The sentinel pattern: loop until a stop value

Sometimes you do not know the count in advance. Instead you keep reading until a special stop value, called a
sentinel, arrives. Read one value, and while it is not the sentinel, process it and read the next:

```csharp
Console.WriteLine("Enter numbers, 0 to stop:");
int total = 0;
int value = int.Parse(Console.ReadLine());
while (value != 0)
{
    total = total + value;
    value = int.Parse(Console.ReadLine());
}
Console.WriteLine(total);
```

Given the input `5`, `3`, `2`, `0` (one per line), the output is:

```
Enter numbers, 0 to stop:
10
```

The loop totals `5 + 3 + 2` and stops when it reads the `0`. The sentinel itself is not counted. If the very
first value is `0`, the loop runs zero times and the total is `0`. Reading one value before the loop and the
next at the end of the body is the usual way to write this: the condition always has a fresh value to test.

## When it does not compile

A `while` is mostly familiar pieces, a `bool` condition and a block, so the errors are the ones you have seen.
Read the first error and go to the line and column it names.

Forgetting the braces is the common slip. Without them, only the next single statement is the loop body. If
that statement tries to declare a variable, C# rejects it, a loop body that is a bare declaration is not
allowed:

```
Program.cs(10,13): error CS1023: Embedded statement cannot be a declaration or labeled statement
```

That means a `while` with no braces was followed directly by a variable declaration. Add braces `{ }` around
the whole body so every statement you meant to repeat is inside the loop. (Even when a brace-less loop does
compile, it only repeats that one next statement, so always use braces for a multi-line body.)

A condition that is not a `bool` will not compile either. A `while` needs a true-or-false test, not a number:

```
Program.cs(8,16): error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

That means you wrote something like `while (n)` where `n` is an `int`. Make it a comparison, for example
`while (n > 0)`, so the condition is a `bool`.

## What you'll practise

Driving a loop with a condition: the count pattern (do something `n` times with a counter) and the sentinel
pattern (read until a stop value), accumulating a sum, a count, or a maximum into a single variable, and
making sure the loop both makes progress and behaves when it runs zero times. Twelve reps on the first and
most fundamental loop. Next is `do-while`, the loop that always runs at least once.
