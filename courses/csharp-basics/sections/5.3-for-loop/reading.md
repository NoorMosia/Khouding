# The for loop

## A counted loop on one line

Most loops count: start a variable at some value, run while it is within a bound, and change it each pass. A
`while` can do this, but the three pieces (the start, the test, the change) end up scattered. The `for` loop
gathers all three on one line, which makes a counted loop easy to read at a glance.

```csharp
for (int i = 1; i <= 3; i++)
{
    Console.WriteLine(i);
}
```

The output is:

```
1
2
3
```

The header has three parts, separated by semicolons:

- `int i = 1` is the **init**: it runs once, before the loop starts.
- `i <= 3` is the **condition**: checked before each pass, like a `while`. True runs the body; false ends the
  loop.
- `i++` is the **update**: it runs after each pass, before the condition is checked again.

So the order is init, then (condition, body, update) repeating until the condition is false.

## A for is a while in disguise

Every `for` can be written as a `while`. Seeing them side by side shows there is nothing new here, just a
tidier layout:

```csharp
// for
for (int i = 1; i <= 3; i++)
{
    Console.WriteLine(i);
}

// the same loop as a while
int i = 1;
while (i <= 3)
{
    Console.WriteLine(i);
    i++;
}
```

Both print `1`, `2`, `3`. The `for` just puts the counter's setup, test, and step in one place instead of
spreading them across three lines. Use a `for` when the loop is clearly counting; use a `while` when the stop
condition is not a simple count (like reading until a sentinel).

## Counting down and stepping

The init, condition, and update can be anything. Count down by decrementing, or step by more than one:

```csharp
for (int i = 5; i >= 1; i--)
{
    Console.Write(i);
    Console.Write(" ");
}
Console.WriteLine();
for (int i = 0; i <= 10; i += 2)
{
    Console.Write(i);
    Console.Write(" ");
}
```

The output is:

```
5 4 3 2 1 
0 2 4 6 8 10 
```

The first loop counts down from 5 with `i--`. The second steps by 2 with `i += 2`, printing the even numbers
up to 10. The header controls the whole pattern.

## Zero passes

Like a `while`, a `for` checks its condition before the first pass, so it can run zero times. If the condition
is false at the start, the body never runs:

```csharp
int n = 0;
for (int i = 1; i <= n; i++)
{
    Console.WriteLine(i);
}
Console.WriteLine("done");
```

The output is:

```
done
```

With `n = 0`, the condition `1 <= 0` is false immediately, so the body is skipped and only `done` prints.

## The count pattern: process n values

A `for` is the natural fit for reading a count and then processing that many values. The counter runs from 0
up to `n`, and each pass reads and uses one value. Here it accumulates a sum:

```csharp
Console.WriteLine("Enter a count:");
int n = int.Parse(Console.ReadLine());
int total = 0;
for (int i = 0; i < n; i++)
{
    int value = int.Parse(Console.ReadLine());
    total = total + value;
}
Console.WriteLine(total);
```

Given the input `3`, `5`, `2`, `4` (the count then three numbers), the output is:

```
Enter a count:
11
```

The loop runs three times, reading and adding each value. With a count of `0` it runs zero times and prints
`0`, the accumulator keeps its starting value.

## When it does not compile

A `for` header has exactly two semicolons separating its three parts. Using a comma where a semicolon belongs,
or dropping one, breaks the header. For example, a comma in place of the first semicolon:

```
Program.cs(7,23): error CS1002: ; expected
```

That means the header parts are not separated by semicolons. Write it as `for (init; condition; update)` with
exactly two semicolons.

The condition must be a `bool`, the same rule as every loop. A number is not a condition:

```
Program.cs(8,21): error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

That means the middle part is an `int`, not a test. Make it a comparison, for example `i <= n`.

## What you'll practise

The counted loop: reading a `for` header's three parts, counting up, down, and by steps, the count pattern for
processing `n` read values, and accumulating a sum, a product, a count, or a maximum. You will also meet the
two classic `for` bugs, an off-by-one bound and a wrong update. Fifteen reps on the loop you will reach for
most often. Next is nested loops, a loop inside a loop.
