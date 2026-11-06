# Loop control: break and continue

## Changing a loop's normal flow

Normally a loop runs its whole body each pass and stops only when its condition turns false. Two statements
let you change that from inside the body: `break` stops the loop immediately, and `continue` skips the rest of
the current pass and moves on to the next one.

## break: stop early

`break` ends the loop at once. The rest of the body is skipped, and so are all remaining passes. Execution
continues after the loop. It is how you stop as soon as you have what you need, like the first match in a
search:

```csharp
Console.WriteLine("Enter 5 numbers:");
for (int i = 1; i <= 5; i++)
{
    int value = int.Parse(Console.ReadLine());
    if (value < 0)
    {
        Console.WriteLine("found a negative");
        break;
    }
}
```

Given the input `4`, `2`, `-7`, `9`, `1`, the output is:

```
Enter 5 numbers:
found a negative
```

The loop reads `4`, `2`, then `-7`. On `-7` the `if` is true, so it prints the message and `break`s. The
fourth and fifth numbers are never read, because the loop has already ended.

## continue: skip to the next pass

`continue` skips the rest of the current pass but keeps the loop going. In a `for`, the update still runs
before the next condition check. It is how you ignore values that do not qualify while still processing the
rest, like summing only the positive numbers:

```csharp
Console.WriteLine("Enter 5 numbers:");
int total = 0;
for (int i = 1; i <= 5; i++)
{
    int value = int.Parse(Console.ReadLine());
    if (value <= 0)
    {
        continue;
    }
    total = total + value;
}
Console.WriteLine(total);
```

Given the input `4`, `-2`, `6`, `-1`, `3`, the output is:

```
Enter 5 numbers:
13
```

When a value is zero or negative, `continue` skips the `total = total + value;` line and goes to the next
pass. Only `4`, `6`, and `3` are added, giving `13`. Every value is still read, the loop runs all five passes,
`continue` just skips part of the body on some of them.

## break versus continue

The two are easy to mix up:

- `break` leaves the loop entirely. Remaining passes do not happen.
- `continue` leaves only the current pass. The loop carries on.

A quick test: "stop looking" wants `break`; "skip this one" wants `continue`. Picking the wrong one is a
common bug, and it usually compiles fine, so the output is what tells you.

## break out of a while (true)

A loop can be written to run forever on purpose, with `while (true)`, and rely on a `break` inside to end it.
This suits reading until a quit value when you would rather test for the quit in the middle of the body:

```csharp
Console.WriteLine("Enter numbers, 0 to stop:");
int total = 0;
while (true)
{
    int value = int.Parse(Console.ReadLine());
    if (value == 0)
    {
        break;
    }
    total = total + value;
}
Console.WriteLine(total);
```

Given the input `5`, `3`, `0`, the output is:

```
Enter numbers, 0 to stop:
8
```

The condition `true` never ends the loop on its own, so the `break` is the only way out. The loop reads a
value, ends on `0`, and otherwise adds it. A `while (true)` is only safe when a `break` is actually reachable;
without one it loops forever.

## When it does not compile

`break` and `continue` only mean something inside a loop. Writing either one outside any loop is a compile
error:

```
Program.cs(8,9): error CS0139: No enclosing loop out of which to break or continue
```

That means a `break` or `continue` is not inside a loop. Move it into the loop body where it belongs, or
remove it.

## What you'll practise

Steering a loop from the inside: `break` to stop at the first match or once a limit is crossed, `continue` to
skip values that do not qualify, and a `while (true)` ended by a reachable `break`. You will build searches
(first match, found or not, the position of a match) and filters (sum or count only the qualifying values),
and fix a program that uses `break` where it meant `continue`. Eleven reps on controlling the flow. That
completes the loops chapter; next is the chapter test.
